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
import ValidateButton from "../../components/ValidateButton";
import data from "@/libs/validation/elements";


const SystemFile = [
  {
    Position: 1,
    Segment: "ISA",
    Requirement: "M",
    Max: "1",
    Elements: [
      {
        Position: "ISA01",
        Element: "I01",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "ISA02",
        Element: "I02",
        Requirement: "M",
        Type: "AN",
        Min: 10,
        Max: 10,
      },
      {
        Position: "ISA03",
        Element: "I03",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "ISA04",
        Element: "I04",
        Requirement: "M",
        Type: "AN",
        Min: 10,
        Max: 10,
      },
      {
        Position: "ISA05",
        Element: "I05",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "ISA06",
        Element: "I06",
        Requirement: "M",
        Type: "AN",
        Min: 15,
        Max: 15,
      },
      {
        Position: "ISA07",
        Element: "I05",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "ISA08",
        Element: "I07",
        Requirement: "M",
        Type: "AN",
        Min: 15,
        Max: 15,
      },
      {
        Position: "ISA09",
        Element: "I08",
        Requirement: "M",
        Type: "DT",
        Min: 6,
        Max: 6,
      },
      {
        Position: "ISA10",
        Element: "I09",
        Requirement: "M",
        Type: "TM",
        Min: 4,
        Max: 4,
      },
      {
        Position: "ISA12",
        Element: "I11",
        Requirement: "M",
        Type: "ID",
        Min: 5,
        Max: 5,
      },
      {
        Position: "ISA13",
        Element: "I12",
        Requirement: "M",
        Type: "N0",
        Min: 9,
        Max: 9,
      },
      {
        Position: "ISA14",
        Element: "I13",
        Requirement: "M",
        Type: "ID",
        Min: 1,
        Max: 1,
      },
      {
        Position: "ISA15",
        Element: "I14",
        Requirement: "M",
        Type: "ID",
        Min: 1,
        Max: 1,
      },
      {
        Position: "ISA16",
        Element: "I15",
        Requirement: "M",
        Type: "",
        Min: 1,
        Max: 1,
      }
    ],
  },
  {
    Position: 2,
    Segment: "GS",
    Requirement: "M",
    Max: "1",
    Elements: [
      {
        Position: "GS01",
        Element: "479",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "GS02",
        Element: "142",
        Requirement: "M",
        Type: "AN",
        Min: 2,
        Max: 15,
      },
      {
        Position: "GS03",
        Element: "124",
        Requirement: "M",
        Type: "AN",
        Min: 2,
        Max: 15,
      },
      {
        Position: "GS04",
        Element: "373",
        Requirement: "M",
        Type: "DT",
        Min: 8,
        Max: 8,
      },
      {
        Position: "GS05",
        Element: "337",
        Requirement: "M",
        Type: "TM",
        Min: 4,
        Max: 8,
      },
      {
        Position: "GS06",
        Element: "28",
        Requirement: "M",
        Type: "N0",
        Min: 1,
        Max: 9,
      },
      {
        Position: "GS07",
        Element: "455",
        Requirement: "M",
        Type: "ID",
        Min: 1,
        Max: 2,
      },
      {
        Position: "GS08",
        Element: "480",
        Requirement: "M",
        Type: "AN",
        Min: 1,
        Max: 12,
      },
    ],
  },
  {
    Position: 3,
    Segment: "ST",
    Requirement: "M",
    Max: "1",
    Elements: [
      {
        Position: "ST01",
        Element: "143",
        Requirement: "M",
        Type: "ID",
        Min: 3,
        Max: 3,
      },
      {
        Position: "ST02",
        Element: "329",
        Requirement: "M",
        Type: "AN",
        Min: 4,
        Max: 9,
      },
    ],
  },
  {
    Position: 4,
    Segment: "BEG",
    Requirement: "M",
    Max: "1",
    Elements: [
      {
        Position: "BEG01",
        Element: "353",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "BEG02",
        Element: "92",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "BEG03",
        Element: "324",
        Requirement: "M",
        Type: "AN",
        Min: 1,
        Max: 22,
      },
      {
        Position: "BEG05",
        Element: "373",
        Requirement: "M",
        Type: "DT",
        Min: 8,
        Max: 8,
      },
    ],
  },
  {
    Position: 5,
    Segment: "REF",
    Requirement: "M",
    Max: ">1",
    Elements: [
      {
        Position: "REF01",
        Element: "128",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 3,
      },
      {
        Position: "REF02",
        Element: "127",
        Requirement: "C",
        Type: "AN",
        Min: 1,
        Max: 30,
      },
    ],
  },
  {
    Position: 6,
    Segment: "REF",
    Requirement: "OP",
    Max: ">1",
    Elements: [
      {
        Position: "REF01",
        Element: "128",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 3,
      },
      {
        Position: "REF02",
        Element: "127",
        Requirement: "C",
        Type: "AN",
        Min: 1,
        Max: 30,
      },
    ],
  },
  {
    Position: 7,
    Segment: "FOB",
    Requirement: "OP",
    Max: ">1",
    Elements: [
      {
        Position: "FOB01",
        Element: "146",
        Requirement: "M",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "FOB04",
        Element: "334",
        Requirement: "O",
        Type: "ID",
        Min: 2,
        Max: 2,
      },
      {
        Position: "FOB05",
        Element: "335",
        Requirement: "C",
        Type: "ID",
        Min: 3,
        Max: 3,
      },
      {
        Position: "FOB06",
        Element: "309",
        Requirement: "C",
        Type: "ID",
        Min: 1,
        Max: 2,
      },
      {
        Position: "FOB07",
        Element: "352",
        Requirement: "O",
        Type: "AN",
        Min: 1,
        Max: 80,
      },
    ],
  },
  {
    Position: 8,
    Segment: "CSH",
    Requirement: "M",
    Max: "5",
    Elements: [
      {
        Position: "CSH01",
        Element: "563",
        Requirement: "O",
        Type: "ID",
        Min: 1,
        Max: 2,
      },
    ],
  },
  {
    Position: 9,
    Segment: "DTM",
    Requirement: "OP",
    Max: "10",
    Elements: [
      {
        Position: "DTM01",
        Element: "374",
        Requirement: "M",
        Type: "ID",
        Min: 3,
        Max: 3,
      },
      {
        Position: "DTM02",
        Element: "373",
        Requirement: "C",
        Type: "DT",
        Min: 8,
        Max: 8,
      },
    ],
  },
  {
    Position: 10,
    Segment: "DTM",
    Requirement: "OP",
    Max: "10",
    Elements: [
      {
        Position: "DTM01",
        Element: "374",
        Requirement: "M",
        Type: "ID",
        Min: 3,
        Max: 3,
      },
      {
        Position: "DTM02",
        Element: "373",
        Requirement: "C",
        Type: "DT",
        Min: 8,
        Max: 8,
      },
    ],
  },
  {
    Position: 11,
    Segment: "PKG",
    Requirement: "OP",
    Max: "200",
    Elements: [
      {
        Position: "PKG01",
        Element: "349",
        Requirement: "C",
        Type: "ID",
        Min: 1,
        Max: 1,
      },
      {
        Position: "PKG02",
        Element: "753",
        Requirement: "O",
        Type: "ID",
        Min: 1,
        Max: 5,
      },
      {
        Position: "PKG05",
        Element: "352",
        Requirement: "C",
        Type: "AN",
        Min: 1,
        Max: 80,
      },
    ],
  },
  {
    Position: 12,
    Segment: "LOOP",
    Requirement: "",
    Max: "1000",
    Segments: [
      {
        Position: 1,
        Segment: "N9",
        Requirement: "M",
        Max: "1",
        Elements: [
          {
            Position: "N901",
            Element: "128",
            Requirement: "M",
            Type: "ID",
            Min: 2,
            Max: 3,
          },
          {
            Position: "N902",
            Element: "127",
            Requirement: "C",
            Type: "AN",
            Min: 1,
            Max: 30,
          },
        ],
      },
      {
        Position: 2,
        Segment: "MSG",
        Requirement: "M",
        Max: "1000",
        Elements: [
          {
            Position: "MSG01",
            Element: "933",
            Requirement: "M",
            Type: "AN",
            Min: 1,
            Max: 264,
          },
        ],
      },
    ],
  },
  {
    Position: 13,
    Segment: "LOOP",
    Requirement: "",
    Max: "200",
    Segments: [
      {
        Position: 1,
        Segment: "N1",
        Requirement: "M",
        Max: "1",
        Elements: [
          {
            Position: "N101",
            Element: "98",
            Requirement: "M",
            Type: "ID",
            Min: 2,
            Max: 3,
          },
          {
            Position: "N103",
            Element: "66",
            Requirement: "M",
            Type: "ID",
            Min: 1,
            Max: 2,
          },
          {
            Position: "N104",
            Element: "67",
            Requirement: "M",
            Type: "AN",
            Min: 2,
            Max: 80,
          },
        ],
      },
    ],
  },
  {
    Position: 14,
    Segment: "LOOP",
    Requirement: "",
    Max: "1000",
    Segments: [
      {
        Position: 1,
        Segment: "PO1",
        Requirement: "M",
        Max: "1",
        Elements: [
          {
            Position: "PO101",
            Element: "350",
            Requirement: "M",
            Type: "AN",
            Min: 1,
            Max: 20,
          },
          {
            Position: "PO102",
            Element: "330",
            Requirement: "M",
            Type: "R",
            Min: 1,
            Max: 15,
          },
          {
            Position: "PO103",
            Element: "355",
            Requirement: "M",
            Type: "ID",
            Min: 2,
            Max: 2,
          },
          {
            Position: "PO104",
            Element: "212",
            Requirement: "M",
            Type: "R",
            Min: 1,
            Max: 17,
          },
          {
            Position: "PO105",
            Element: "639",
            Requirement: "M",
            Type: "ID",
            Min: 2,
            Max: 2,
          },
          {
            Position: "PO106",
            Element: "235",
            Requirement: "M",
            Type: "ID",
            Min: 2,
            Max: 2,
          },
          {
            Position: "PO107",
            Element: "234",
            Requirement: "M",
            Type: "AN",
            Min: 1,
            Max: 48,
          },
        ],
      },
    ],
  },
  {
    Position: 15,
    Segment: "LOOP",
    Requirement: "",
    Max: "1",
    Segments: [
      {
        Position: 1,
        Segment: "CTT",
        Requirement: "M",
        Max: "1",
        Elements: [
          {
            Position: "CTT01",
            Element: "354",
            Requirement: "M",
            Type: "N0",
            Min: 1,
            Max: 6,
          },
          {
            Position: "CTT02",
            Element: "347",
            Requirement: "M",
            Type: "R",
            Min: 1,
            Max: 10,
          },
        ],
      },
    ],
  },
  {
    Position: 16,
    Segment: "SE",
    Requirement: "M",
    Max: "1",
    Elements: [
      {
        Position: "SE01",
        Element: "96",
        Requirement: "M",
        Type: "N0",
        Min: 1,
        Max: 10,
      },
      {
        Position: "SE02",
        Element: "329",
        Requirement: "M",
        Type: "AN",
        Min: 4,
        Max: 9,
      },
    ],
  },
  {
    Position: 17,
    Segment: "GE",
    Requirement: "M",
    Max: "1",
    Elements: [
      {
        Position: "GE01",
        Element: "97",
        Requirement: "M",
        Type: "N0",
        Min: 1,
        Max: 6,
      },
      {
        Position: "GE02",
        Element: "28",
        Requirement: "M",
        Type: "N0",
        Min: 1,
        Max: 9,
      },
    ],
  },
  {
    Position: 18,
    Segment: "IEA",
    Requirement: "OP",
    Max: "1",
    Elements: [
      {
        Position: "IEA01",
        Element: "I16",
        Requirement: "M",
        Type: "N0",
        Min: 1,
        Max: 5,
      },
      {
        Position: "IEA02",
        Element: "I12",
        Requirement: "M",
        Type: "N0",
        Min: 9,
        Max: 9,
      },
    ],
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
export default function UploadModal({idDoc, status}:{idDoc: string, status: string}) {
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
    console.log(ValStructure(SystemFile, Segments, 0, "M", true));
    data(SystemFile, Segments, [])
  };

  return (
    <>
      <ValidateButton onClick={() => setIsOpen(true)}>{"Validate"}</ValidateButton>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Upload your document {idDoc}</DialogTitle>
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
