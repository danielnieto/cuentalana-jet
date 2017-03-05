define(["knockout"], function(ko){

    function Denomination(value, quantity){
        this.value = value;
        this.quantity = ko.observable(quantity || 0);
    }

    return Denomination;
});
