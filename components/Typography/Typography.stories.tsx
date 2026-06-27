import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
  tags: ["autodocs"],
  args: {
    children: "Texto de ejemplo",
  },
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Design System Personal",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Componentes base del sistema",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Tokens, colores y tipografía",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "El sistema de diseño define los componentes base que dan consistencia visual al portfolio. Cada componente sigue convenciones de accesibilidad y usa tokens de diseño como fuente de verdad.",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Última actualización: 27 de junio de 2026",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Este campo es opcional",
  },
};

export const Code: Story = {
  args: {
    variant: "code",
    children: "npm run build-storybook",
  },
};

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-xl">
      <Typography variant="h1">Heading 1 — Design System</Typography>
      <Typography variant="h2">Heading 2 — Componentes base</Typography>
      <Typography variant="h3">Heading 3 — Tokens y estilos</Typography>
      <Typography variant="body">
        Body — El sistema define los componentes que dan consistencia al portfolio. Los tokens usan
        el prefijo <Typography variant="code">--ds-*</Typography> y se definen en{" "}
        <Typography variant="code">globals.css</Typography>.
      </Typography>
      <Typography variant="small">Small — Nota al pie de página</Typography>
      <Typography variant="muted">Muted — Texto secundario o de ayuda</Typography>
    </div>
  ),
};
