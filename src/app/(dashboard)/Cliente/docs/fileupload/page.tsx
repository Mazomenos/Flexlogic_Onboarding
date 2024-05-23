"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import GenericButton from "@/components/GenericButton";
import { PiUploadSimple } from "react-icons/pi";
import { ParseEDIfileTest } from "@/libs/X12parser/lib/parseEDIfileTest";
import { Readable } from "stream";

// Read stream code by Russell Briggs: https://medium.com/@dupski/nodejs-creating-a-readable-stream-from-a-string-e0568597387f
class ReadableString extends Readable {
  private sent = false;

  constructor(private str: string) {
    super();
  }

  _read() {
    if (!this.sent) {
      this.push(Buffer.from(this.str));
      this.sent = true;
    } else {
      this.push(null);
    }
  }
}
export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [fileContent, setFileContent] = React.useState<string | null>(null);
  // const [message, setMessage] = React.useState<string | null>(null);
  // const [error, setError] = React.useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        setFileContent(text as string);
      };
      reader.readAsText(file);
      console.log("FileContent:");
      console.log(fileContent);
      console.log(typeof fileContent);
    } else {
      console.log("Error reading file");
    }
  };
  const uploadAndParseFile = async () => {
    const contentStream = new ReadableString(String(fileContent));
    ParseEDIfileTest(contentStream);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Validate</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Upload your document</DialogTitle>
        <div className="flex flex-col-reverse items-center w-full">
          <input type="file" onChange={handleFileChange} />
          {/* {error && <p>Error: {error}</p>}
          {message && <p>{message}</p>} */}
        </div>
        <div className="flex w-full justify-end">
          <div className="w-full flex justify-end mr-2">
            <CancelButton onClick={() => setIsOpen(false)} />
          </div>
          <GenericButton onClick={uploadAndParseFile}> Validate </GenericButton>
        </div>
      </Modal>
    </>
  );
}
