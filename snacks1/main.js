/*Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.*/

const auto = [
    {name: 'panda', marca: 'fiat', alimentazione: 'benzina' },
    {name: 'fiesta', marca: 'ford', alimentazione: 'diesel'},
    {name: 'classe a', marca: 'mercedes', alimentazione: 'benzina'},
    {name: 'golf', marca: 'volkswagen', alimentazione: 'diesel'},
    {name: '500', marca: 'fiat', alimentazione: 'elettrica'},
    {name: 'yaris cross', marca: 'toyota', alimentazione: 'elettrica'},
    {name: 'model s', marca: 'tesla', alimentazione: 'elettrica'},
    {name: 'urus', marca: 'lamborghini', alimentazione: 'benzina'},
    {name: 'renegade', marca: 'jeep', alimentazione: 'elettrica'},
    {name: 'stelvio', marca: 'alfa romeo', alimentazione: 'diesel'}
]
console.log(auto);

const autoBenzina = auto.filter(Element => {
    if (Element.alimentazione === 'benzina') {
        return true;
    }
    return false;

});


const autoDiesel = auto.filter(Element => {
    if (Element.alimentazione === 'diesel') {
        return true;
    }
    return false;

});

const otherAuto = auto.filter(Element => {
    if (Element.alimentazione !== 'benzina' && Element.alimentazione !== 'diesel') {
        return true;
    }
    return false;

});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(otherAuto);