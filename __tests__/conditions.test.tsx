import Conditions from "@/libs/validation/elements/conditions"
import { Iconditions, IcharLength, IdecimalCondition, IcompareCodes, IcompareData, IdateAndTimeFormat, Operator } from "@/libs/validation/elements/conditions/InterfaceConditions"

describe("Comparison Conditions", () => {
    it("2 is less than 5", () => {
        const compareData: IcompareData = {
            source: 0,
            data: {
                operator: Operator.LESS,
                data: "5"
            }
        }
        const condition: Iconditions = {
            type: "compareData",
            params: compareData
        }
        const res: String[] = Conditions("2", [condition])
        expect(res[0]).toBe("")
    })
    it("10 is not less than 5", () => {
        const compareData: IcompareData = {
            source: 0,
            data: {
                operator: Operator.LESS,
                data: "5"
            }
        }
        const condition: Iconditions = {
            type: "compareData",
            params: compareData
        }
        const res: String[] = Conditions("10", [condition])
        expect(res[0]).not.toBe("")
    })
    it("5 equals 5", () => {
        const compareData: IcompareData = {
            source: 0,
            data: {
                operator: Operator.EQUAL,
                data: "5"
            }
        }
        const condition: Iconditions = {
            type: "compareData",
            params: compareData
        }
        const res: String[] = Conditions("5", [condition])
        expect(res[0]).toBe("")
    })
    it("4 does not equal 5", () => {
        const compareData: IcompareData = {
            source: 0,
            data: {
                operator: Operator.EQUAL,
                data: "5"
            }
        }
        const condition: Iconditions = {
            type: "compareData",
            params: compareData
        }
        const res: String[] = Conditions("4", [condition])
        expect(res[0]).not.toBe("")
    })
    it("10 is greater than 5", () => {
        const compareData: IcompareData = {
            source: 0,
            data: {
                operator: Operator.MORE,
                data: "5"
            }
        }
        const condition: Iconditions = {
            type: "compareData",
            params: compareData
        }
        const res: String[] = Conditions("10", [condition])
        expect(res[0]).toBe("")
    })
    it("1 is not greater than 5", () => {
        const compareData: IcompareData = {
            source: 0,
            data: {
                operator: Operator.MORE,
                data: "5"
            }
        }
        const condition: Iconditions = {
            type: "compareData",
            params: compareData
        }
        const res: String[] = Conditions("1", [condition])
        expect(res[0]).not.toBe("")
    })
})

describe("Decimal point conditions", () => {
    it("2.22 has 2 decimals", () => {
        const data: IdecimalCondition = {
            decimals: "2"
        }
        const condition: Iconditions = {
            type: "decimalPosition",
            params: data
        }
        const res: String[] = Conditions("2.22", [condition])
        expect(res[0]).toBe("")
    })
    it("2.2222 does not have 2 decimals", () => {
        const data: IdecimalCondition = {
            decimals: "2"
        }
        const condition: Iconditions = {
            type: "decimalPosition",
            params: data
        }
        const res: String[] = Conditions("2.2222", [condition])
        expect(res[0]).not.toBe("")
    })
})


describe("Date format conditions", () => {
    it("240606 is in YYMMDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "YYMMDD"
        }
        const condition: Iconditions = {
            type: "dateFormat",
            params: data
        }
        const res: String[] = Conditions("240606", [condition])
        expect(res[0]).toBe("")
    })
    it("20240606 is not YYMMDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "YYMMDD"
        }
        const condition: Iconditions = {
            type: "dateFormat",
            params: data
        }
        const res: String[] = Conditions("20240606", [condition])
        expect(res[0]).not.toBe("")
    })
    it("246006 is not YYMMDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "YYMMDD"
        }
        const condition: Iconditions = {
            type: "dateFormat",
            params: data
        }
        const res: String[] = Conditions("246006", [condition])
        expect(res[0]).not.toBe("")
    })
    it("20240606 is in CCYYMMDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "CCYYMMDD"
        }
        const condition: Iconditions = {
            type: "dateFormat",
            params: data
        }
        const res: String[] = Conditions("20240606", [condition])
        expect(res[0]).toBe("")
    })
    it("20246006 is not CCYYMMDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "CCYYMMDD"
        }
        const condition: Iconditions = {
            type: "dateFormat",
            params: data
        }
        const res: String[] = Conditions("20246006", [condition])
        expect(res[0]).not.toBe("")
    })
    it("120240606 is not CCYYMMDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "CCYYMMDD"
        }
        const condition: Iconditions = {
            type: "dateFormat",
            params: data
        }
        const res: String[] = Conditions("120240606", [condition])
        expect(res[0]).not.toBe("")
    })
})

describe("Time format conditions", () => {
    it("1810 is in HHMM format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMM"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("1810", [condition])
        expect(res[0]).toBe("")
    })
    it("1861 is not HHMM format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMM"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("1861", [condition])
        expect(res[0]).not.toBe("")
    })
    it("01813 is not HHMM format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMM"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("01813", [condition])
        expect(res[0]).not.toBe("")
    })
    it("181010 is in HHMMSS format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMMSS"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("181010", [condition])
        expect(res[0]).toBe("")
    })
    it("18101010 is not HHMMSS format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMMSS"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("18101010", [condition])
        expect(res[0]).not.toBe("")
    })
    it("181061 is not HHMMSS format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMMSS"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("181061", [condition])
        expect(res[0]).not.toBe("")
    })
    it("18101099 is in HHMMSSDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMMSSDD"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("18101099", [condition])
        expect(res[0]).toBe("")
    })
    it("181010100 is not HHMMSSDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMMSSDD"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("181010100", [condition])
        expect(res[0]).not.toBe("")
    })
    it("018101099 is not HHMMSSDD format", () => {
        const data: IdateAndTimeFormat = {
            format: "HHMMSSDD"
        }
        const condition: Iconditions = {
            type: "timeFormat",
            params: data
        }
        const res: String[] = Conditions("018101099", [condition])
        expect(res[0]).not.toBe("")
    })
})

describe("Char length conditions", () => {
    it("'2e40' is length 4", () => {
        const data: IcharLength = {
            length: "4"
        }
        const condition: Iconditions = {
            type: "charLength",
            params: data
        }
        const res: String[] = Conditions("2e40", [condition])
        expect(res[0]).toBe("")
    })
    it("'2e40' is not length 2", () => {
        const data: IcharLength = {
            length: "2"
        }
        const condition: Iconditions = {
            type: "charLength",
            params: data
        }
        const res: String[] = Conditions("2e40", [condition])
        expect(res[0]).not.toBe("")
    })
    it("'2e40' is not length 6", () => {
        const data: IcharLength = {
            length: "6"
        }
        const condition: Iconditions = {
            type: "charLength",
            params: data
        }
        const res: String[] = Conditions("2e40", [condition])
        expect(res[0]).not.toBe("")
    })
})

describe("Id conditions", () => {
    it("FDP in [FDP,ID,WAW]", () => {
        const data: IcompareCodes = {
            codes: ["FDP", "ID", "WAW"]
        }
        const condition: Iconditions = {
            type: "idCodes",
            params: data
        }
        const res: String[] = Conditions("FDP", [condition])
        expect(res[0]).toBe("")
    })
    it("ERP in [FDP,ID,WAW]", () => {
        const data: IcompareCodes = {
            codes: ["FDP", "ID", "WAW"]
        }
        const condition: Iconditions = {
            type: "idCodes",
            params: data
        }
        const res: String[] = Conditions("ERP", [condition])
        expect(res[0]).not.toBe("")
    })
})