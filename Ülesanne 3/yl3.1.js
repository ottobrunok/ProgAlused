const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})
rl.question('Sisestage mitu korda äratada: ', (mituKorda) => {
    for (let index = mituKorda; index > 0; index--) {
        console.log('Tõuse ja sära!');
    }
    rl.close();
});