const reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");

class ExploreController {
    static getExplorersByMission(mission){
        const explorers = reader.readJsonFile("explorers.json");
        const explorersfilt = ExplorerService.filterByMission(explorers, mission);
        return explorersfilt;
    }
    static getExplorersUsernamesByMission(mission){

    }
}

module.exports = ExploreController;