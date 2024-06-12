import React, {ChangeEvent ,useRef, useState } from "react";
import { Drawer } from "@material-tailwind/react";
import CloseButton from "@/components/CloseButton";
import GenericButton from "@/components/GenericButton";
import { GetTPDocById, updateConfigTPDoc, updateTPDoc } from "@/DA/TpDocsController";
import { SuccessAction } from "@/components/toasters";
import { FaUpload } from "react-icons/fa6";

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


  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
 

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setFile(event.target.files[0]);
    }
  };


  async function handleDownload() {
    try {
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
    if (!file) {
      alert('Please select a file first!');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
          const parsedData = JSON.parse(e.target?.result as string);
          const json = parsedData; // Update state with the parsed object
          console.log('Parsed JSON Object:', json);

          const send = updateConfigTPDoc(idDocument, json)



      } catch (error) {
        console.error('Parsing Error:', error);
        alert('Invalid JSON file!');
      }
    };
    reader.readAsText(file);
  
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
          <GenericButton onClick={() => {handleUpload()}}>Upload </GenericButton>
        </div>
        <div className=" mt-2 flex justify-end">
          <GenericButton onClick={() => {handleDownload()}}>Download </GenericButton>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize"
        onMouseDown={handleMouseDown}
      />

      <div
              className="flex flex-col mt-0 text-primary-content/40 dark:text-darkMode-foreground/40 items-center hover:bg-info/30 hover:text-info-content dark:hover:bg-darkMode-info dark:hover:text-darkMode-info-content justify-center border-2 border-dashed border-primary-content/40 dark:border-darkMode-foreground/40 p-6 rounded-lg cursor-pointer hover:border-info-content dark:hover:border-darkMode-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={handleUploadClick}
              style={{ marginTop: "0.8rem" }}
            >
              <FaUpload className="text-4xl mb-2" />
              <input
                type="file"
                id="fileInput"
                accept=".json"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <p className="">
                {fileName
                  ? fileName
                  : "Click to upload a file"}
              </p>
            </div>

      <div className="w-full mt-2 flex justify-end">
        <GenericButton onClick={() => {}}>Create </GenericButton>
      </div>
    </Drawer>
  );
}
