const reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzBuzzService = require("../../lib/services/FizzBuzzService");

class ExploreController {
    static getExplorersByMission(mission){
        const explorers = reader.readJsonFile("explorers.json");
        const explorersfilt = ExplorerService.filterByMission(explorers, "node");
        return explorersfilt;
    }
}

module.exports = ExploreController;