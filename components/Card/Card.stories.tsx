import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <p className="text-[length:var(--ds-text-sm)] text-neutral-600">
        Contenido principal de la tarjeta.
      </p>
    </Card>
  ),
  args: {
    title: "Título de la tarjeta",
    description: "Una descripción breve del contenido.",
  },
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <p className="text-[length:var(--ds-text-sm)] text-neutral-600">
        Contenido de la tarjeta con pie de página.
      </p>
    </Card>
  ),
  args: {
    title: "Tarjeta con footer",
    description: "Incluye una sección al pie.",
    footer: "Última actualización: hoy",
  },
};

export const Minimal: Story = {
  render: (args) => (
    <Card {...args}>
      <p className="text-[length:var(--ds-text-sm)] text-neutral-600">
        Tarjeta sin encabezado, solo contenido.
      </p>
    </Card>
  ),
  args: {},
};
