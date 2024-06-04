import { Min, Max } from "src/libs/validation/elements/minMax"

describe('Test', () => {
    it('Min 2', () => {
        const res = Min("20", 2)

        expect(res).toBe("")
    })
})