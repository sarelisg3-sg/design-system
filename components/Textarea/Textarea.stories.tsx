import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Design System/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Escribe algo...",
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Mensaje",
    placeholder: "Escribe tu mensaje aquí...",
  },
};

export const WithError: Story = {
  args: {
    label: "Mensaje",
    placeholder: "Escribe tu mensaje aquí...",
    error: "El mensaje es obligatorio.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Mensaje",
    placeholder: "Escribe tu mensaje aquí...",
    disabled: true,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: "Sin etiqueta",
  },
};
