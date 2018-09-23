// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) return {error : "You are rich, my friend! We don't have so much coins for exchange"};
    let coins = [["H", 50], ["Q", 25], ["D", 10], ["N", 5], ["P", 1]];
    let result = {};
    for (let i = 0; i < coins.length; i++) {
       if (currency >= coins[i][1]) { 
            let amount = Math.floor(currency / coins[i][1]);
            result[coins[i][0]] = amount;
            currency -= amount * coins[i][1];
        }
    }
    return result;
}
