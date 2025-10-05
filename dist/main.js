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
export {};
//# sourceMappingURL=main.js.map