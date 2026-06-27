import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Escribe algo...",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "tu@email.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "tu@email.com",
    error: "El email es obligatorio.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "tu@email.com",
    disabled: true,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: "Sin etiqueta",
  },
};
