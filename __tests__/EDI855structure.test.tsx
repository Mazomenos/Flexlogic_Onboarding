const { createReadStream } = require("fs");
import ValStructure from "@/libs/validation/segments";
import { ParseEDIfile } from "@/libs/X12parser/lib/parseEDIfile";
import { systemFile855 } from "./testSystemFiles";

const currSystemFile = systemFile855
const testFilePath = "__tests__/testfiles/AMZN_Procurement_855_Example_A.txt"

// EDI850 tests
// ediFile var is pending to be changed depending on test case
describe("Structure Validator for EDI850", () => {
  test("EDI has correct format", async () => {
    const ediFile = createReadStream(testFilePath);
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });

  test("Incorrect segments order", async () => {
    const ediFile = createReadStream(testFilePath); // update EDI file
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });

  test("Segment repeated the wrong number of times", async () => {
    const ediFile = createReadStream(testFilePath); // update EDI file
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });

  test("Mandatory segment not in EDI", async () => {
    const ediFile = createReadStream(testFilePath); // update EDI file
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });

  test("Incorrect segments order + Segment repeated the wrong number of times", async () => {
    const ediFile = createReadStream(testFilePath); // update EDI file
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });

  test("Incorrect segments order + Mandatory segment not in EDI", async () => {
    const ediFile = createReadStream(testFilePath); // update EDI file
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });

  test("Incorrect segments order + Segment repeated the wrong number of times + Mandatory segment not in EDI", async () => {
    const ediFile = createReadStream(testFilePath); // update EDI file
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });

  test("Segment repeated the wrong number of times + Mandatory segment not in EDI", async () => {
    const ediFile = createReadStream(testFilePath); // update EDI file
    const ClientFile = await ParseEDIfile(ediFile);
    const varControlClient = 0;
    const reqLoop = "M";
    const isFirst = true;

    const result = ValStructure(
      currSystemFile,
      ClientFile,
      varControlClient,
      reqLoop,
      isFirst
    );

    expect(result).toStrictEqual({ status: "Failed" });
  });
});
