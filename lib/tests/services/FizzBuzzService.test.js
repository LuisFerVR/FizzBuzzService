const FizzBuzzService = require('../../services/FizzBuzzService');
describe("test para FizzBuzzService", () => {
    test("test", () => {
        const explorer1 = {name: "Explorer1", score:1}
        const explorerres = FizzBuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorerres).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
    })
})