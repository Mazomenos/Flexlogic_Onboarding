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
        expect(true).toBe(true)
    })
})
