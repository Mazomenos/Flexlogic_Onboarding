import React from "react";
import { Drawer } from "@material-tailwind/react";
import CloseButton from "@/components/CloseButton";
import GenericButton from "@/components/GenericButton";

interface Props {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  idDocument: number | null;
}

export default function DrawerDefault({ open, setOpen, idDocument }: Props) {
  const [] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <Drawer
      open={open}
      size={600}
      onClose={closeDrawer}
      placement="right"
      className="p-4 right-0 top-0 bg-base-200 dark:bg-darkMode-base-200 "
    >
      <div className="mb-6 flex items-center justify-between">
        <p className="text-primary-content dark:text-darkMode-foreground">
          {idDocument}
        </p>
        <CloseButton onClick={closeDrawer} />
      </div>
      <p color="gray" className="mb-8 pr-4 font-normal">
        Material Tailwind features multiple React and HTML components, all
        written with Tailwind CSS classes and Material Design guidelines.
      </p>
      <div className="flex gap-2">
        <GenericButton onClick={() => console.log(idDocument)}>
          {" "}
          hola{" "}
        </GenericButton>
      </div>
    </Drawer>
  );
}
