const ExplorerService = require('../../services/ExplorerService');

describe('Test para ExplorerService',() =>{
    test('Requerimiento 1, calcular a todos los explorers en node',() =>{
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.lenght).toBe(1);
    })
})