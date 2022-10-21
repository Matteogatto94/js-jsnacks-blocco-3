/*Snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]*/

const names = ['ANDREA', 'luigi', 'tommaso', 'GIULIA', 'ferdinando', 'MATTEO']
console.log(names);

const formattedNames = names.map(function(testo){
    const firstLetter = testo.charAt(0).toUpperCase()
    const allNames = testo.slice(1).toLowerCase()

    return firstLetter + allNames
})

console.log(formattedNames);