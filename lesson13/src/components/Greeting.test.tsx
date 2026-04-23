import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("Greeting", () => {
  it("should shows a greeting when the user enters a name and clicks Senda", async () => {
    const user = userEvent.setup();

    render(<Greeting />);

    const input = screen.getByLabelText(/nafn/i);
    const button = screen.getByRole("button", { name: /senda/i });

    await user.type(input, "Hafrún");
    await user.click(button);

    expect(screen.getByText("Halló, Hafrún!")).toBeInTheDocument();
  });

  it("should not show a greeting if the input is empty or only spaces", async () => {
    const user = userEvent.setup();

    render(<Greeting />);

    const input = screen.getByLabelText(/nafn/i);
    const button = screen.getByRole("button", { name: /senda/i });

    await user.type(input, "   ");
    await user.click(button);

    expect(screen.queryByText(/halló/i)).not.toBeInTheDocument();
  });
});
