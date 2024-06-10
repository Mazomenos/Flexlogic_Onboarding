"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import GenericButton from "@/components/GenericButton";
import { PiUploadSimple } from "react-icons/pi";
import { ParseEDIfile } from "@/libs/X12parser/lib/parseEDIfile";
import { Readable } from "stream";
import ValStructure from "@/libs/validation/segments";


const SystemFile = [
  {
    Position: 1,
    Segment: "ISA",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 2,
    Segment: "GS",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 3,
    Segment: "ST",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 4,
    Segment: "BEG",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 5,
    Segment: "REF",
    Requirement: "M",
    Max: ">1",
  },
  {
    Position: 6,
    Segment: "REF",
    Requirement: "OP",
    Max: ">1",
  },
  {
    Position: 7,
    Segment: "FOB",
    Requirement: "OP",
    Max: ">1",
  },
  {
    Position: 8,
    Segment: "CSH",
    Requirement: "M",
    Max: "5",
  },
  {
    Position: 9,
    Segment: "DTM",
    Requirement: "OP",
    Max: "10",
  },
  {
    Position: 10,
    Segment: "DTM",
    Requirement: "OP",
    Max: "10",
  },
  {
    Position: 11,
    Segment: "PKG",
    Requirement: "OP",
    Max: "200",
  },
  {
    Position: 12,
    Segment: "LOOP",
    Requirement: "",
    Max: "2",
    Segments: [
      {
        Position: 1,
        Segment: "N1",
        Requirement: "M",
        Max: "1",
      },
      {
        Position: 2,
        Segment: "MSG",
        Requirement: "OP",
        Max: "1000",
      },
    ],
  },
  {
    Position: 13,
    Segment: "LOOP",
    Requirement: "",
    Max: "3",
    Segments: [
      {
        Position: 1,
        Segment: "N1",
        Requirement: "M",
        Max: "1",
      },
      {
        Position: 2,
        Segment: "PM",
        Requirement: "OP",
        Max: "1000",
      },
    ],
  },
  {
    Position: 15,
    Segment: "LOOP",
    Requirement: "",
    Max: "3",
    Segments: [
      {
        Position: 1,
        Segment: "CTT",
        Requirement: "M",
        Max: "1",
      },
    ],
  },
  {
    Position: 16,
    Segment: "SE",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 17,
    Segment: "GE",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 18,
    Segment: "IEA",
    Requirement: "M",
    Max: "1",
  },
];

const SystemFile2 = [
  {
    Position: 1,
    Segment: "ISA",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 2,
    Segment: "GS",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 3,
    Segment: "ST",
    Requirement: "M",
    Max: "2",
  },
  {
    Position: 4,
    Segment: "LOOP",
    Requirement: "M",
    Max: "2",
    Segments: [
      {
        Position: 1,
        Segment: "N1",
        Requirement: "M",
        Max: "2",
      },
      {
        Position: 2,
        Segment: "MEA",
        Requirement: "M",
        Max: "2",
      },
      {
        Position: 3,
        Segment: "LOOP",
        Requirement: "OP",
        Max: "2",
        Segments: [
          {
            Position: 1,
            Segment: "ST",
            Requirement: "M",
            Max: "2",
          },
        ],
      },
      {
        Position: 4,
        Segment: "LOOP",
        Requirement: "OP",
        Max: "2",
        Segments: [
          {
            Position: 1,
            Segment: "OP",
            Requirement: "M",
            Max: "2",
          },
        ],
      },
    ],
  },
  {
    Position: 5,
    Segment: "LOOP",
    Requirement: "M",
    Max: "3",
    Segments: [
      {
        Position: 1,
        Segment: "MT",
        Requirement: "M",
        Max: "1",
      },
      {
        Position: 2,
        Segment: "MSG",
        Requirement: "OP",
        Max: "2",
      },
    ],
  },
  {
    Position: 6,
    Segment: "MTG",
    Requirement: "OP",
    Max: "2",
  },
  {
    Position: 6,
    Segment: "NFT",
    Requirement: "M",
    Max: "2",
  },
];

const SystemFile3 = [
  {
    Position: 1,
    Segment: "ISA",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 2,
    Segment: "GS",
    Requirement: "M",
    Max: "1",
  },
  {
    Position: 3,
    Segment: "LOOP",
    Requirement: "M",
    Max: "2",
    Segments: [
      {
        Position: 1,
        Segment: "N1",
        Requirement: "M",
        Max: "1",
      },
      {
        Position: 2,
        Segment: "N2",
        Requirement: "OP",
        Max: "1",
      },
      {
        Position: 3,
        Segment: "N3",
        Requirement: "M",
        Max: "1",
      },
      {
        Position: 4,
        Segment: "N4",
        Requirement: "M",
        Max: "1",
      },
    ],
  },
  {
    Position: 4,
    Segment: "LOOP",
    Requirement: "M",
    Max: "2",
    Segments: [
      {
        Position: 1,
        Segment: "N1",
        Requirement: "M",
        Max: "1",
      },
    ],
  },
  {
    Position: 5,
    Segment: "LOOP",
    Requirement: "OP",
    Max: "2",
    Segments: [
      {
        Position: 1,
        Segment: "N1",
        Requirement: "M",
        Max: "1",
      },
      {
        Position: 2,
        Segment: "MTY",
        Requirement: "M",
        Max: "1",
      },
    ],
  },
  {
    Position: 6,
    Segment: "ITD",
    Requirement: "M",
    Max: "1",
  },
];

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
  let cont = 0;
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
    } else {
      console.log("Error reading file");
    }
  };

  const uploadAndParseFile = async () => {
    const contentStream = new ReadableString(String(fileContent));
    const Segments = await ParseEDIfile(contentStream);
    console.log(ValStructure(SystemFile3, Segments, 0, "M", true));
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
