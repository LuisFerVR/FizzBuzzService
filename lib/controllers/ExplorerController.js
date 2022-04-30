const reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzBuzzService = require("../services/FizzBuzzService");
class ExploreController {
    static getExplorersByMission(mission){
        const explorers = reader.readJsonFile("explorers.json");
        const explorersfilt = ExplorerService.filterByMission(explorers, mission);
        return explorersfilt;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = reader.readJsonFile("explorers.json");
        const listUserNamesFilter = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return listUserNamesFilter;
    }
    static getExplorersAmonutByMission(mission){
        const explorers = reader.readJsonFile("explorers.json");
        const cantExplorers = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return cantExplorers;
    }
    static getValidation(score){
        const vali = FizzBuzzService.applyValidationInNumber(score);
        return vali;
    }
}
module.exports = ExploreController;