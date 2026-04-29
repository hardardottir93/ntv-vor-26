import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Greeting } from "./Greeting";

const meta = {
  component: Greeting,
} satisfies Meta<typeof Greeting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SubmitName: Story = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /nafn/i });
    const submitButton = canvas.getByRole("button", { name: /senda/i });

    await userEvent.type(input, "Hafrún");
    await userEvent.click(submitButton);

    await expect(canvas.getByText(/halló,\s*hafrún/i)).toBeInTheDocument();
  },
};
