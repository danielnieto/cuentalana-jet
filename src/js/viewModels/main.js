define(["knockout"], function(ko){

    const bills = {
        "1000": 0,
        "500": 0,
        "200": 0,
        "100": 0,
        "50": 0,
        "20": 0,
    };

    const coins = {
        "50": 0,
        "20": 0,
        "10": 0,
        "5": 0,
        "2": 0,
        "1": 0,
        ".5": 0,
        ".2": 0,
        ".1": 0,
        ".05": 0
    };

    let total = ko.pureComputed(function(){

        let billsSum = (bills["1000"]*1000) + (bills["500"]*500) + (bills["200"]*200) + (bills["100"]*100) + (bills["50"]*50) + (bills["20"]*20);

        let coinsSum = (coins["50"]*50) + (coins["20"]*20) + (coins["10"]*10) + (coins["5"]*5) + (coins["2"]*2) + (coins["1"]*1) + (coins[".5"]*.5) + (coins[".2"]*.2) + (coins[".1"]*.1) + (coins[".05"]*.05);

        return billsSum + coinsSum;
    });

    return {
        total:total
    };
});
