//implementiamo la funzione
const saluta = (utente) => {
    return `Ciao ${utente.nome}, hai ${utente.eta} anni!`;
};
//mostriamo in dom il risultato
const utente1 = {
    nome: 'Elisa',
    eta: 35,
    attivo: true,
};
const title = document.getElementById('title');
if (title) {
    title.textContent = saluta(utente1);
}
function stampaId(id) {
    if (typeof id === "string") {
        console.log("ID in formato testo:", id.toUpperCase());
    }
    else {
        console.log("ID numerico", id);
    }
}
console.log(stampaId(112));
console.log(stampaId('abcsdfs2'));
console.log(stampaId('s2'));
console.log(stampaId(23552));
const utente = {
    nome: "Luca",
    eta: 25,
    email: "luca@mail.com"
};
console.log(utente);
function stampaMessaggio(risposta) {
    if (risposta) {
        console.log("Risposta:", risposta);
    }
    else {
        console.log("Nessuna risposta ricevuta");
    }
}
;
stampaMessaggio('ciao');
const text = document.getElementById("title");
console.log(text.textContent);
export {};
//# sourceMappingURL=main.js.map