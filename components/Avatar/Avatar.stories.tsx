import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Design System/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "/globe.svg",
    alt: "Sareli García",
    name: "Sareli García",
  },
};

export const WithFallback: Story = {
  args: {
    src: "/nonexistent-image.jpg",
    name: "Sareli García",
  },
};

export const Initials: Story = {
  args: {
    name: "Sareli García",
  },
};

export const NoImage: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" name="Sareli García" />
      <Avatar size="md" name="Sareli García" />
      <Avatar size="lg" name="Sareli García" />
    </div>
  ),
};
