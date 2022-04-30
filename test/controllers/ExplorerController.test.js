const ExploreController = require("../../lib/controllers/ExplorerController");
describe("test para clase ExplorerController", () => {
    test("metodo 1", () => {
        const filtrado = ExploreController.getExplorersByMission("node");
        expect(filtrado.length).toBe(10);
    }),
    test("metodo 2", () => {
        const listUserNamesFilterr = ExploreController.getExplorersUsernamesByMission("node");
        expect(listUserNamesFilterr.length).toBe(10);
    }),
    test("metodo 3", () => {
        const listCantExplorers = ExploreController.getExplorersAmonutByMission("node");
        expect(listCantExplorers).toBe(10);
    }),
    test("metodo 4:validación por score", () => {
        const example1 = [{"score": 3,"trick":"FIZZ" }];
        const validation = ExploreController.getValidation(3);
        expect(validation).toStrictEqual(example1);
    });
});