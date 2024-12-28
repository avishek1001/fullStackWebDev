const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const inputLang = process.argv[2];

const francCode = franc(inputLang);

const langOut = langs.where("3", francCode);

try{
    console.log(langOut['name'].random);
} catch {
    console.log('Not Detectable');
}

