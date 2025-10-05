//definizione utente
interface Utente {

    nome:String;
    eta:Number;
    attivo: Boolean;
}

//alias per funzione

type SalutaFn = (utente: Utente) => string;

//implementiamo la funzione
const saluta: SalutaFn = (utente) => {
    return `Ciao ${utente.nome}, hai ${utente.eta} anni!`;
}

//mostriamo in dom il risultato
const utente1: Utente = {
    nome: 'Elisa',
    eta: 35,
    attivo: true,
};

const title = document.getElementById('title');
if(title) {
    title.textContent = saluta(utente1);
}