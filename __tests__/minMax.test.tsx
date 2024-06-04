import { Min, Max } from "@/libs/validation/elements/minMax"

describe('MinMax: 2 - 10', () => {
    it('Below Min 2', () => {
        const input = "2"
        const minRes = Min(input, 2, "")
        const maxRes = Max(input, 10)
        expect(minRes).toBe("Valor debe ser minimo 2")
        expect(maxRes).toBe("")
    })
    it('Min 2', () => {
        const input = "20"
        const minRes = Min(input, 2, "")
        const maxRes = Max(input, 10)
        expect(minRes).toBe("")
        expect(maxRes).toBe("")
    })
    it('Mid Value', () => {
        const input = "202030"
        const minRes = Min(input, 2, "")
        const maxRes = Max(input, 10)
        expect(minRes).toBe("")
        expect(maxRes).toBe("")
    })
    it('Max 10', () => {
        const input = "2020306610"
        const minRes = Min(input, 2, "")
        const maxRes = Max(input, 10)
        expect(minRes).toBe("")
        expect(maxRes).toBe("")
    })
    it('Above Max 10', () => {
        const input = "2020306610X"
        const minRes = Min(input, 2, "")
        const maxRes = Max(input, 10)
        expect(minRes).toBe("")
        expect(maxRes).toBe("Valor debe ser maximo 10")
    })
})