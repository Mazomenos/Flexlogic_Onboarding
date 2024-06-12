import React, { useRef, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import CloseButton from "@/components/CloseButton";
import GenericButton from "@/components/GenericButton";
import { GetTPDocById } from "@/DA/TpDocsController";
import { SuccessAction } from "@/components/toasters";


interface Props {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  idDocument: string;
  documentTitle: string | undefined;
}

 


export default function DrawerDefault({
  open,
  setOpen,
  idDocument,
  documentTitle,
}: Props) {
  const [drawerWidth, setDrawerWidth] = useState(550); // Initial width
  const drawerRef = useRef<HTMLDivElement>(null);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

 

  async function handleDownload() {
    try {
      console.log("jeje")
      SuccessAction("Download will Start Shortly")
      const jsonData = await GetTPDocById(idDocument);    
      const encodedData = encodeURIComponent(JSON.stringify(jsonData));
      const href = `data:text/json;charset=utf-8,${encodedData}`;
      const downloadLink = document.createElement('a');
      downloadLink.href = href;
      downloadLink.download = "filename.json";
      downloadLink.click();
    } catch (error) {
      console.error('Error downloading JSON:', error);
  };}

  async function handleUpload() {
    
  }



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

  const YOURJSON = {
    "Segments": "hello"
  }

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
      <div className=" px-3 flex justify-center gap-5">
        <div className=" mt-2 flex ">
          <GenericButton onClick={() => {}}>Upload </GenericButton>
        </div>
        <div className=" mt-2 flex justify-end">
          <GenericButton onClick={() => {handleDownload()}}>Download </GenericButton>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize"
        onMouseDown={handleMouseDown}
      />
      <div className="w-full mt-2 flex justify-end">
        <GenericButton onClick={() => {}}>Create </GenericButton>
      </div>
    </Drawer>
  );
}
