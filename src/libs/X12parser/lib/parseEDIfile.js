import X12parser from "@/libs/X12parser/lib/X12parser";
import { resolve } from "path";

export function ParseEDIfile(contentStream) {
  return new Promise((resolve, reject) => {
    let Segments = [];
    // Create a new parser
    const myParser = new X12parser("ascii", "~", ">", "*", "U");
    myParser.on("error", (err) => {
      console.error(err);
      reject(err); // Reject the promise on error
    });

    // Handle events from the parser
    contentStream.pipe(myParser).on("data", (data) => {
      Segments.push(data);
    }).on("end", () => {
      resolve(Segments); // Resolve the promise with Segments when parsing is complete
    });
  });
}
