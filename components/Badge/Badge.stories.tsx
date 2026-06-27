import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Badge",
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Success: Story = {
  args: { variant: "success", children: "Completado" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Pendiente" },
};

export const Error: Story = {
  args: { variant: "error", children: "Error" },
};

export const Info: Story = {
  args: { variant: "info", children: "Info" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Completado</Badge>
      <Badge variant="warning">Pendiente</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};
