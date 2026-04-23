import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { QuoteCard } from "./QuoteCard";
import { fetchRandomQuote } from "../lib/quotes";

vi.mock("../lib/quotes", () => ({
  fetchRandomQuote: vi.fn(),
}));

describe("QuoteCard", () => {
  it("should fetch and display a quote when the Sækja quote button is clicked", async () => {
    const user = userEvent.setup();

    vi.mocked(fetchRandomQuote).mockResolvedValue('"Test quote" - Test Author');

    render(<QuoteCard />);

    const button = screen.getByRole("button", { name: /sækja quote/i });
    await user.click(button);

    expect(
      await screen.findByText('"Test quote" - Test Author'),
    ).toBeInTheDocument();
  });

  it("should show an error message if fetching the quote fails", async () => {
    const user = userEvent.setup();

    vi.mocked(fetchRandomQuote).mockRejectedValue(new Error("API error"));

    render(<QuoteCard />);

    const button = screen.getByRole("button", { name: /sækja quote/i });
    await user.click(button);

    expect(
      await screen.findByText(/ekki tókst að sækja quote./i),
    ).toBeInTheDocument();
  });
});
