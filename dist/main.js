// //definizione utente
// interface Utente {
export {};
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
// const text = document.getElementById("title") as HTMLElement;
// console.log(text.textContent);
// function identita<T>(valore: T): T {
//   return valore;
// }
// console.log(identita<string>("Ciao"));
// console.log(identita<number>(123));
// function primoElemento<T>(array: T[]): T | undefined {
//   return array[2];
// }
// console.log(primoElemento([1, 2, 3]));
// console.log(primoElemento(["a", "b", "c"]));
// interface OggettoConNome {
//   nome: string;
// }
// function stampaNome<T extends OggettoConNome>(obj: T) {
//   console.log(obj.nome.toUpperCase());
// }
// stampaNome({ nome: "Mario", eta: 30 });
// interface Utente {
//   nome: string;
//   email: string;
// }
// type ParzialeUtente = {
//   [K in keyof Utente]?: Utente[K];
// };
// const utenteParziale: ParzialeUtente = { nome: "Luca" };
// console.log(utenteParziale);
//# sourceMappingURL=main.js.map