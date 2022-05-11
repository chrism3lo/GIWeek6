let coins = [1, 5, 10, 25];
let amount = 60;

function coinmaker (coins, amount){
    let coinsAmnt = 0;
    let bigggestCoin;
    let explanation = [];

    while (amount > 0){
        bigggestCoin = Math.max(...coins)
        if (bigggestCoin > amount){
            coins = removeLargest(coins);
            if (!coins.length) return -1;
        
        } else {
            amount -= bigggestCoin;
            explanation.push(bigggestCoin);
            coinsAmnt++;
        }
    }
    console.log(...explanation);
    return coinsAmnt;
}

function removeLargest(coins){
    let bigggestCoin = Math.max(...coins)
    bigggestCoin = coins.filter(coins => coins !== bigggestCoin)
    return bigggestCoin;
}

console.log(coinmaker(coins, amount));
