define(["knockout", "models/denomination", "ojs/ojinputtext"], function(ko, Denomination){

    var bills = [
        new Denomination(1000),
        new Denomination(500),
        new Denomination(200),
        new Denomination(100),
        new Denomination(50),
        new Denomination(20)
    ];

    var coins = [
        new Denomination(50),
        new Denomination(20),
        new Denomination(10),
        new Denomination(5),
        new Denomination(2),
        new Denomination(1),
        new Denomination(0.5),
        new Denomination(0.2),
        new Denomination(0.1),
        new Denomination(0.05)
    ];

    var total = ko.computed(function(){

        var billsSum = 0;

        ko.utils.arrayForEach(bills, function(denomination){
            billsSum += (Number(denomination.value)*Number(denomination.quantity()));
        });

        var coinsSum = 0;

        ko.utils.arrayForEach(coins, function(denomination){
            coinsSum += (Number(denomination.value)*Number(denomination.quantity()));
        });

        return Number(billsSum) + Number(coinsSum);
    });

    return {
        bills: bills,
        coins: coins,
        total:total
    };
});
