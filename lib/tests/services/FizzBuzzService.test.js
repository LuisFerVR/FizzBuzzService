const FizzBuzzService = require('../../services/FizzBuzzService');
describe("test para FizzBuzzService", () => {
    test("test 1", () => {
        const explorer1 = {name: "Explorer1", score:1}
        const res1 = FizzBuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(res1).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
    }),
    test('test 2', () =>{
        const explorer3 = {name: "Explorer3", score: 3}
        const res2 = FizzBuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(res2).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"})
    }),
    test('test 3', () =>{
        const explorer5 = {name: "Explorer5", score: 5}
        const res3 = FizzBuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(res3).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"})
    }),
    test('test 4', () =>{
        const explorer15 = {name: "Explorer15", score: 15}
        const res4 = FizzBuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(res4).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"})
    })
})