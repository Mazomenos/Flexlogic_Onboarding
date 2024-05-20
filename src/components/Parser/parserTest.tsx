import { createReadStream } from "fs";
import { ParseEDIfileTest } from "../../libs/X12parser/lib/parseEDIfileTest.js";

export default function ParserTest() {
  async function upload(data: FormData) {
    "use server";

    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      throw new Error("No file was uploaded");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log(typeof file.name);
    ParseEDIfileTest(file.name);

    return { success: true };
  }

  return (
    <main>
      <h1>EDI Parser</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
    </main>
  );
}
