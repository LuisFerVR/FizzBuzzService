const FizzBusService = require('../../services/FizzBuzzService');
describe("test para FizzBuzzService", () => {
    test("test", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        explorer1 = FizzBuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1).toBe("Sin valor");
    })
})