import { Types } from "@/libs/validation/elements/types"

const delimeters = ["*", ">", "~"]

describe("AN Types", () => {
    it("1adf is AN", () => {
        const res = Types("1adf", "AN", delimeters)
        expect(res).toBe("")
    })
    it("1*daf is not AN", () => {
        const res = Types("1*daf", "AN", delimeters)
        expect(res).not.toBe("")
    })
})

describe("N Types", () => {
    it("12032 is N", () => {
        const res = Types("12032", "N0", delimeters)
        expect(res).toBe("")
    })
    it("1203af is not N", () => {
        const res = Types("1203af", "N0", delimeters)
        expect(res).not.toBe("")
    })
    it("1203.30044 is not N", () => {
        const res = Types("1203.30044", "N0", delimeters)
        expect(res).not.toBe("")
    })
})

describe("R Types", () => {
    it("120.32 is R", () => {
        const res = Types("120.32", "R", delimeters)
        expect(res).toBe("")
    })
    it("12aa3 is not R", () => {
        const res = Types("12aa2", "R", delimeters)
        expect(res).not.toBe("")
    })
})

describe("ID types", () => {
    it("adflADD1038 is ID", () => {
        const res = Types("adflADD1038", "ID", delimeters)
        expect(res).toBe("")
    })
    it("a..dfl//AD++D1038 is not ID", () => {
        const res = Types("a..dfl//AD++D1038", "ID", delimeters)
        expect(res).not.toBe("")
    })
    it("aa bb is not ID", () => {
        const res = Types("aa bb", "ID", delimeters)
        expect(res).not.toBe("")
    })
    it("   aaaa is not ID", () => {
        const res = Types("   aaaaa", "ID", delimeters)
        expect(res).not.toBe("")
    })
    it("'' is not ID", () => {
        const res = Types("", "ID", delimeters)
        expect(res).not.toBe("")
    })
})

describe("DTM types", () => {
    it("1717544733 is DTM", () => {
        const res = Types("1717544733", "DT", delimeters)
        expect(res).toBe("")
    })
    it("-1717544733 is not DTM", () => {
        const res = Types("-1717544733", "DT", delimeters)
        expect(res).not.toBe("")
    })
    it("17175AA733 is not DTM", () => {
        const res = Types("17175AA733", "DT", delimeters)
        expect(res).not.toBe("")
    })
})

describe("B types", () => {
    it("1000010 is B", () => {
        const res = Types("1000010", "B", delimeters)
        expect(res).toBe("")
    })
    it("4F is B", () => {
        const res = Types("4F", "B", delimeters)
        expect(res).toBe("")
    })
    it("ty is not B", () => {
        const res = Types("ty", "B", delimeters)
        expect(res).not.toBe("")
    })
    it("'' is not B", () => {
        const res = Types("ty", "B", delimeters)
        expect(res).not.toBe("")
    })
})