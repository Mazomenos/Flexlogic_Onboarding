import React, { useRef, useState } from "react";
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
  const [drawerWidth, setDrawerWidth] = useState(450); // Initial width
  const drawerRef = useRef<HTMLDivElement>(null);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.clientX;
    const startWidth = drawerWidth;

    const doDrag = (dragEvent: MouseEvent) => {
      const newWidth = startWidth - (dragEvent.clientX - startX);
      setDrawerWidth(newWidth > 200 ? newWidth : 200); // Minimum width of 200px
    };

    const stopDrag = () => {
      document.documentElement.removeEventListener("mousemove", doDrag);
      document.documentElement.removeEventListener("mouseup", stopDrag);
    };

    document.documentElement.addEventListener("mousemove", doDrag);
    document.documentElement.addEventListener("mouseup", stopDrag);
  };

  return (
    <Drawer
      open={open}
      size={drawerWidth}
      onClose={closeDrawer}
      placement="right"
      className="p-4 right-0 border-l-darkMode-foreground/30 border-l-2 top-0 bg-base-200 dark:bg-darkMode-base-200"
      ref={drawerRef}
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
      <div
        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize"
        onMouseDown={handleMouseDown}
      />
    </Drawer>
  );
}
