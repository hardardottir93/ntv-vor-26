import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("starts at 0", () => {
    render(<Counter />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should increment the value when clicking Hækka", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /hækka/i });

    await user.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should decrement the value when clicking Minnka", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const decrementButton = screen.getByRole("button", { name: /minnka/i });

    await user.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("should reset the value back to 0", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /hækka/i }));
    await user.click(screen.getByRole("button", { name: /hækka/i }));
    await user.click(screen.getByRole("button", { name: /endurstilla/i }));

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
