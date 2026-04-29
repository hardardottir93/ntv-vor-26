import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import Task from "./Task";

const meta = {
  component: Task,
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "id",
      title: "title",
      state: "TASK_ARCHIVED",
    },
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
};

export const Pinned: Story = {
  args: {
    task: {
      id: "2",
      title: "Lesa kafla 3 í tutorial",
      state: "TASK_PINNED",
    },
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
};

export const Archived: Story = {
  args: {
    task: {
      id: "3",
      title: "Gamalt verkefni",
      state: "TASK_ARCHIVED",
    },
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
};

export const ArchiveTask: Story = {
  args: {
    task: {
      id: "4",
      title: "Archive this task",
      state: "TASK_INBOX",
    },
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
  play: async ({ canvasElement, args, userEvent }) => {
    const archiveButton = canvasElement.querySelector(".checkbox-custom");

    await expect(archiveButton).toBeInTheDocument();

    await userEvent.click(archiveButton as HTMLElement);

    await expect(args.onArchiveTask).toHaveBeenCalledWith("4");
  },
};

export const PinTask: Story = {
  args: {
    task: {
      id: "5",
      title: "Pin this task",
      state: "TASK_INBOX",
    },
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
  play: async ({ canvas, args, userEvent }) => {
    const pinButton = canvas.getByLabelText("pinTask-5");

    await userEvent.click(pinButton);

    await expect(args.onPinTask).toHaveBeenCalledWith("5");
  },
};
