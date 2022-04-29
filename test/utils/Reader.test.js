const  reader = require("../../lib/utils/Reader");
describe("test para Reader",() => {
    test("1) recibir lista de explorers", () => {
        const explorers = reader.readJsonFile("explorers.json");
        expect(explorers.length).toBe(15);
    });
});