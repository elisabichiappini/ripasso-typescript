// //definizione utente
// interface Utente {
//     nome:String;
//     eta:Number;
//     attivo: Boolean;
// }
// //alias per funzione
// type SalutaFn = (utente: Utente) => string;
// //implementiamo la funzione
// const saluta: SalutaFn = (utente) => {
//     return `Ciao ${utente.nome}, hai ${utente.eta} anni!`;
// }
// //mostriamo in dom il risultato
// const utente1: Utente = {
//     nome: 'Elisa',
//     eta: 35,
//     attivo: true,
// };
// const title = document.getElementById('title');
// if(title) {
//     title.textContent = saluta(utente1);
// }
// function stampaId(id: string | number) {
//     if(typeof id === "string") {
//         console.log("ID in formato testo:", id.toUpperCase());
//     } else {
//         console.log("ID numerico", id);
//     }
// }
// console.log(stampaId(112));
// console.log(stampaId('abcsdfs2'));
// console.log(stampaId('s2'));
// console.log(stampaId(23552));
// interface Contatto {
//   email: string;
// }
// interface Profilo {
//   nome: string;
//   eta: number;
// }
// type UtenteCompleto = Contatto & Profilo;
// const utente: UtenteCompleto = {
//   nome: "Luca",
//   eta: 25,
//   email: "luca@mail.com"
// };
// console.log(utente);
// type Risposta = string | null;
// function stampaMessaggio(risposta: Risposta) {
//   if (risposta) {
//     console.log("Risposta:", risposta);
//   } else {
//     console.log("Nessuna risposta ricevuta");
//   }
// };
// stampaMessaggio('ciao');
const text = document.getElementById("title");
console.log(text.textContent);
export {};
//# sourceMappingURL=main.js.map