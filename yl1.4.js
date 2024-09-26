const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Sisestage oma nimi: ', (nimi) => {
    rl.question('Sisestage lubatud kiirus (km/h): ', (lubatud) => {
        rl.question('Sisestage tegelik kiirus (km/h): ', (tegelik) => {
            let trahv;
            if(tegelik-lubatud>0){
                trahv = (tegelik-lubatud)*3
                if(trahv>=190){
                    console.log(nimi+", kiiruse ületamise eest on teie trahv "+trahv+" eurot.")
                    rl.close()
                }
                else
                console.log(nimi+", kiiruse ületamise eest on teie trahv "+trahv+" eurot.");
            }
            else if (tegelik-lubatud<=0){
                console.log(nimi + ", te ei ületanud kiirust :)");
                rl.close()
            }
        rl.close()
        })
    })
});
