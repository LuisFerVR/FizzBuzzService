const ExplorerService = require("../../lib/services/ExplorerService");
 
describe("Tests para ExplorerService", () => {
    test("Requerimiento 2: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }),
    test("Requerimiento 3: Obtener la lista de usuarios de github de los explorers que están en node", () => {
        const explorers = [{mission: "node"}];
        const ExplorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(ExplorersUsernames).toStrictEqual(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));
    });
});

/* // Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node"); */