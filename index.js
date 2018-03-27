var readline = require('readline');
var quit = function (status) {
    if (status === void 0) { status = 0; }
    console.info('Fermeture du programme...');
    process.exit(status);
};
var askNumber = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'veuillez saisir des trucs :'
});
//Demander une saisie
askNumber.prompt();
//ecouter les lignes saisies par l'utilisateurs :
askNumber.on('line', function (line) {
    if (line === 'exit') {
        quit();
    }
    else if (line.match(/-?\d+/)) {
        var input = parseInt(line);
        var arg1 = input === 0 ? '0' : input < 0 ? 'négatif' : 'positif';
        var arg2 = input % 2 === 0 ? 'pair' : 'impair';
        console.info('Le nombre saisi est %s et %s', arg1, arg1);
    }
    else {
        console.warn('La saisie n\'est pas correct, veuillez recommencer');
    }
    askNumber.prompt();
});
//Ecouter la fermeture de l'interface askNumber :
// Evenement déclenché par un CTRL+C (signal TERM)
askNumber.on('close', function () {
    quit();
});
