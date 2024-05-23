import X12parser from "@/libs/X12parser/lib/X12parser";

export function ParseEDIfile(contentStream) {
  // Create a new parser
  const myParser = new X12parser("ascii", "~", ">", "*", "U");
  myParser.on("error", (err) => {
    console.error(err);
  });

  // Handle events from the parser
  contentStream.pipe(myParser).on("data", (data) => {
    console.log(data);
  });
}
