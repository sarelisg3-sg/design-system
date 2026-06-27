import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Modal } from "./Modal";
import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";

const meta: Meta<typeof Modal> = {
  title: "Design System/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: function DefaultStory() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal
          open={open}
          onClose={close}
          title="Confirmar acción"
          description="Esta acción no se puede deshacer."
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={close}>Cancelar</Button>
              <Button onClick={close}>Confirmar</Button>
            </div>
          }
        >
          <Typography variant="body">
            ¿Estás segura de que deseas continuar? Este cambio es permanente y no podrá
            revertirse una vez confirmado.
          </Typography>
        </Modal>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: function WithFooterStory() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir modal con footer</Button>
        <Modal
          open={open}
          onClose={close}
          title="Guardar cambios"
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={close}>Descartar</Button>
              <Button variant="outline" onClick={close}>Guardar borrador</Button>
              <Button onClick={close}>Publicar</Button>
            </div>
          }
        >
          <Typography variant="body">
            Has modificado el contenido. Elige cómo deseas guardar los cambios antes de salir.
          </Typography>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: function LongContentStory() {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);
    return (
      <>
        {!open && <Button onClick={() => setOpen(true)}>Reabrir</Button>}
        <Modal
          open={open}
          onClose={close}
          title="Términos y condiciones"
          description="Léelos antes de continuar."
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={close}>Rechazar</Button>
              <Button onClick={close}>Aceptar</Button>
            </div>
          }
        >
          <div className="flex flex-col gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Typography key={i} variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              </Typography>
            ))}
          </div>
        </Modal>
      </>
    );
  },
};

export const InitiallyOpen: Story = {
  render: function InitiallyOpenStory() {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);
    return (
      <>
        {!open && <Button onClick={() => setOpen(true)}>Reabrir modal</Button>}
        <Modal open={open} onClose={close} title="Modal de bienvenida">
          <Typography variant="body">
            Este modal se abre automáticamente al cargar la story, útil para revisar
            el diseño sin tener que hacer clic. Cierra con Escape o con el botón ×.
          </Typography>
        </Modal>
      </>
    );
  },
};
