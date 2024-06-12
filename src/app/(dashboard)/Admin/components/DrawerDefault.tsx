import React, { useRef, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import CloseButton from "@/components/CloseButton";
import GenericButton from "@/components/GenericButton";
import { GetTPDocById } from "@/DA/TpDocsController";
import { SuccessAction } from "@/components/toasters";
import { DownloadIcon } from "@radix-ui/react-icons";
import AddButton from "@/components/AddButton";
import { IoMdCloudUpload, IoMdDownload } from "react-icons/io";
import BrakeRule from "@/components/BrakeRule";

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
      console.log("jeje");
      SuccessAction("Download will Start Shortly");
      const jsonData = await GetTPDocById(idDocument);
      const encodedData = encodeURIComponent(JSON.stringify(jsonData));
      const href = `data:text/json;charset=utf-8,${encodedData}`;
      const downloadLink = document.createElement("a");
      downloadLink.href = href;
      downloadLink.download = "filename.json";
      downloadLink.click();
    } catch (error) {
      console.error("Error downloading JSON:", error);
    }
  }

  async function handleUpload() {}

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
    Segments: "hello",
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
      <div className=" px-3 flex w-full flex-col items-center justify-center">
        <div className=" mt-2 flex flex-col justify-center w-full items-center ">
          <AddButton onClick={() => {}}>
            Upload <IoMdCloudUpload className="ml-3" />
          </AddButton>

          <p className="text-lg mt-2 w-3/4 text-center italic">
            Upload json file with document configuration
          </p>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-primary-content/50 bg-base-100 -translate-x-1/2  left-1/2 dark:text-darkMode-foreground/50 dark:bg-darkMode-base-200">
            or
          </span>
        </div>

        <div className=" mt-2 flex flex-col w-full justify-center items-center ">
          <AddButton
            onClick={() => {
              handleDownload();
            }}
          >
            Download <IoMdDownload />
          </AddButton>

          <p className="text-lg mt-2 w-3/4 text-center italic">
            Download the current document configuration in json format
          </p>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize"
        onMouseDown={handleMouseDown}
      />
    </Drawer>
  );
}
