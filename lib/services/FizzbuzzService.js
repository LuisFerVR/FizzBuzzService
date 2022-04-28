class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ"
            return explorer;
        } else {
            explorer.trick = explorer.score;
        } 
        if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ"
            return explorer;
        } else {
            explorer.trick = explorer.score;
        }
        if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
            explorer.trick = "FIZZBUZZ"
        }else{
            explorer.score = "Sin valor"
        }
    }
}

module.exports = FizzBuzzService;