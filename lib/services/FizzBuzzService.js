class FizzBuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.score % 3 === 0  && explorer.score % 5 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if(explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        } else if(explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(explorerNumber){
        if(explorerNumber % 3 === 0  && explorerNumber % 5 === 0){
            return [{"score": explorerNumber,"trick": "FIZZBUZZ"}];
        } else if(explorerNumber % 3 === 0) {
            return [{"score": explorerNumber,"trick": "FIZZ"}];
        } else if(explorerNumber % 5 === 0) {
            return [{"score": explorerNumber,"trick": "BUZZ"}];
        }else{
            return [{"score": explorerNumber,"trick": explorerNumber}];
        }
    }
}

module.exports = FizzBuzzService;
