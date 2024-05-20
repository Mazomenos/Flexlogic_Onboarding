import { createReadStream } from "fs";

import X12parser from "@/libs/X12parser/lib/X12parser";

export function ParseEDIfileTest(filename) {
  filename = "./src/libs/X12parser/" + filename;
  console.log(filename);
  // Create a new parser
  const myParser = new X12parser("ascii", "~", ">", "*", "U");
  myParser.on("error", (err) => {
    console.error(err);
  });

  // Create a read stream from a file
  const ediFile = createReadStream(filename);
  ediFile.on("error", (err) => {
    console.error(err);
  });

  // Handle events from the parser
  ediFile.pipe(myParser).on("data", (data) => {
    console.log(data);
  });
}
