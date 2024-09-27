const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})
rl.question('Sisestage kirja suurus megabaitides: ', (size) => {
    rl.question('Sisestage teema pealkiri ', (name) => {
        rl.question('Kirjaga kaasas fail? (Jah/Ei) ', (onFail) => {
            if(name.length === 0){
                console.log('Kiri on spamm.');
                rl.close()
            }
            else if(onFail.toLowerCase() === 'jah' && parseFloat(size) >= 1){
                console.log('Kiri on spamm.');
                rl.close() 
            }
            else
                console.log('Kiri ei ole spamm :)');
            rl.close();
        })
    })
});