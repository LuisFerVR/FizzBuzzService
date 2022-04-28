class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ"
            return explorer;
        } else {
            explorer.trick = explorer.score;
        } 
    }
}

module.exports = FizzBuzzService;