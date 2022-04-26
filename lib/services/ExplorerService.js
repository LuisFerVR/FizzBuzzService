class ExplorerServices{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const usernames = explorers.filter((explorer) => explorer.githubUsername === githubUsername);
        return usernames;
    }
}
module.exports = ExplorerServices;