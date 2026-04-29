import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Counter } from "./Counter";

const meta = {
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IncrementCounter: Story = {
  play: async ({ canvas, userEvent }) => {
    const incrementButton = canvas.getByRole("button", { name: /hækka/i });
    await userEvent.click(incrementButton);
    await expect(canvas.getByText("1")).toBeInTheDocument();
  },
};

export const IncrementAndResetCounter: Story = {
  play: async ({ canvas, userEvent }) => {
    const incrementButton = canvas.getByRole("button", { name: /hækka/i });
    const resetButton = canvas.getByRole("button", { name: /endurstilla/i });

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);

    await expect(await canvas.findByText("2")).toBeInTheDocument();

    await userEvent.click(resetButton);

    await expect(await canvas.findByText("0")).toBeInTheDocument();
  },
};
