import React, { useRef, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import CloseButton from "@/components/CloseButton";
import GenericButton from "@/components/GenericButton";
import SidebarItem from "./sidebar/SidebarItem";
import { ACTION_PREFETCH } from "next/dist/client/components/router-reducer/router-reducer-types";
import ModalSaveChanges from "./ModalSaveChanges";

interface Props {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  idDocument: number | null;
  documentTitle: string;
}

export default function DrawerDefault({
  open,
  setOpen,
  idDocument,
  documentTitle,
}: Props) {
  const [drawerWidth, setDrawerWidth] = useState(600); // Initial width
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => {
    setModalOpen(true);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.clientX;
    const startWidth = drawerWidth;

    const doDrag = (dragEvent: MouseEvent) => {
      const newWidth = startWidth - (dragEvent.clientX - startX);
      setDrawerWidth(newWidth > 400 ? newWidth : 400); // Minimum width of 200px
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
      className="h-full z-40 flex flex-col p-4 select-none right-0 border-l-darkMode-foreground/30 border-l-2 top-0 bg-base-100 dark:bg-darkMode-base-200"
      ref={drawerRef}
    >
      <div className="mb-6 flex items-center justify-between">
        <p className="text-primary-content dark:text-darkMode-foreground">
          {documentTitle}
        </p>
        <CloseButton onClick={closeDrawer} />
      </div>
      <div className="flex-1 overflow-y-auto px-3">
        <SidebarItem />
      </div>
      <div
        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize"
        onMouseDown={handleMouseDown}
      />
      <div className="w-full mt-2 flex justify-end">
        <GenericButton onClick={() => {}}>Create</GenericButton>
      </div>
      <ModalSaveChanges
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        setDrawerOpen={setOpen}
      />
    </Drawer>
  );
}
