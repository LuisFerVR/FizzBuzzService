const ExploreController = require("../../lib/controllers/ExplorerController");
describe("test para clase ExplorerController", () => {
    test("metodo 1", () => {
        const filtrado = ExploreController.getExplorersByMission("node");
        expect(filtrado.length).toBe(10);
    });
});