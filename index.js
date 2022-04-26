const Reader = require('./lib/utils/Reader');
const ExplorerServices = require('./lib/services/ExplorerService')

const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers);

console.log(ExplorerServices.filterByMission(explorers,"node"));