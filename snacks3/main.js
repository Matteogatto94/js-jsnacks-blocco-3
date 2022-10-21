/*Snack 3 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe. 
Crea un nuovo array con la lista dei mammiferi.*/

const animali = [
    {name: 'leone', classe: 'mammifero'},
    {name: 'gatto', classe: 'felino'},
    {name: 'tigre', classe: 'felino'},
    {name: 'scimmia', classe: 'mammifero'}
]

console.log(animali);

const mammiferi = animali.filter(Element => {
    if (Element.classe === 'mammifero') {
        return true;
    }
    return false;

});

console.log(mammiferi);