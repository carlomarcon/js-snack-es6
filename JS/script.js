// 1 ESERCIZIO

// const arrayBike = [
//   {
//     nome: "Super",
//     peso: 20,
//   },
//   {
//     nome: "great",
//     peso: 10,
//   },
//   {
//     nome: "fast",
//     peso: 5,
//   },
// ];

// for (const key in arrayBike) {
//   console.log(key);
// }
// const Div = document.querySelector("div");
// let BiciLeggera = arrayBike[0].peso;

// arrayBike.forEach((elem) => {
//   if (elem.peso < BiciLeggera) {
//     BiciLeggera = elem.peso;
//   } else;
// });
// console.log(BiciLeggera);
// generate(BiciLeggera);

// function generate(Bici) {
//   Div.append(Bici);
// }
// 2 ESERCIZIO

// const Div = document.querySelector("div");

// const SquadreDiCalcio = [
//   {
//     Nome: "Juventus",
//     PuntiFatti: 0,
//     FalliSubiti: 0,
//   },
//   {
//     Nome: "Napoli",
//     PuntiFatti: 0,
//     FalliSubiti: 0,
//   },
//   {
//     Nome: "Milan",
//     PuntiFatti: 0,
//     FalliSubiti: 0,
//   },
//   {
//     Nome: "Inter",
//     PuntiFatti: 0,
//     FalliSubiti: 0,
//   },
// ];

// // const newElement = document.createElement("h1");
// // Div.append(newElement);

// let PuntiFatti = "";
// let FalliSubiti = "";

// SquadreDiCalcio.forEach((element) => {
//   PuntiFatti = element.PuntiFatti = GenerateNumber(0, 20);
//   FalliSubiti = element.FalliSubiti = GenerateNumber(1, 10);
//   Div.innerHTML += `La squadra: ${element.Nome}, Punti fatti: ${PuntiFatti}  Falli Subiti: ${FalliSubiti} <br/>`;
// });

// function GenerateNumber(min, max) {
//   let randomNumber = Math.floor(Math.random() * (max - min) + min);

//   return randomNumber;
// }

// ESERCIZIO BONUS

const numbersArray = [1, 3, 7, 2, 5];

function getSubArray(numbersArray, a, b) {
  const newArray = [];
  numbersArray.forEach((elem, index, array) => {
    if (index >= a && index <= b) {
      newArray.push(elem);
    }
  });

  if (a > b) {
    console.warn("A minore di B !!");
  }
  return newArray;
}

console.log(getSubArray(numbersArray, 4, 0));
