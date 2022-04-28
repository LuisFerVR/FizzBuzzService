const FizzBuzzService = require('../../services/FizzBuzzService');
describe("test para FizzBuzzService", () => {
    test("test", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const res = FizzBuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(res).toBe("Sin valor");
    })
})