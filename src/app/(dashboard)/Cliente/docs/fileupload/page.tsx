"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import { PiUploadSimple } from "react-icons/pi";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  //const { edgestore } = useEdgeStore();
  const [message, setMessage] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const uploadAndParseFile = async () => {
    if (file && file.name) {
      //const filename = file.name.toString();
      //console.log(filename);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/parse", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fileName: formData }),
        });

        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        const result = await response.json();
        setMessage(result.message);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      }
    } else {
      console.error("No file selected or file has no name");
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Validate</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Upload your document</DialogTitle>
        <div className="flex flex-col-reverse items-center w-full">
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
            }}
          />
          {error && <p>Error: {error}</p>}
          {message && <p>{message}</p>}
        </div>
        <div className="flex w-full justify-end">
          <div className="w-full flex justify-end mr-2">
            <CancelButton onClick={() => setIsOpen(false)} />
          </div>
          <button onClick={uploadAndParseFile}>Validate</button>
        </div>
      </Modal>
    </>
  );
}
