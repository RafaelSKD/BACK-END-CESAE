// //ex01 p17
// let myLuckyNumber = 7;
// let myName = "Rafael";
// let mySecondName = "Costa";

// //ex02 p28 
// const MESSAGE = "   TASTE THE RAINBOW! ";
// let whisper = MESSAGE.trim().toLowerCase();

// //ex03 p30
// const WORD = "skateboard";
// let facialHair = WORD.slice(5).replace("o", "e");

// //exauxiliar
// //let userName = prompt("ex04\nDigite seu nome: ");
// //console.log(`\n\nex.aux\nOlá ${userName}, tudo bem?`);

// //ex04 p35  === comentado para nao abrir o alert e promps ===
// let firstName = "Rafael"//prompt("Digite o seu primeiro nome: ");
// let lastName = "Costa"//prompt("Digite o seu ultimo nome: ");
// //alert(`Olá ${firstName} ${lastName}`);

// // ex05 p39
// // ex05 .1
// // let diaDaSemana = prompt("Digite o dia da semana: ");
// // diaDaSemana = diaDaSemana.toLowerCase();
// // if (diaDaSemana == "sexta")
// //     console.log("Yay! sobrevivemos a mais uma semana");
// // else
// //     console.log("Aguenta mais um pouco");
// // ex05 .2
// // let password = prompt("Digite uma password: ");
// // if (password.length < 6) 
// //     alert("Password muito curta!");
// // else
// //     alert("Password ok!");
// // ex05 .3
// // let diaDaSemana = prompt("Digite o dia da semana: ");
// // diaDaSemana = diaDaSemana.toLowerCase();

// // switch (diaDaSemana) {
// //     case "segunda":
// //         alert("Falta 4 dias para sexta!");
// //         break;
// //     case "terca":
// //         alert("Falta 3 dias para sexta!");
// //         break;
// //     case "quarta":
// //         alert("Falta 2 dias para sexta!");
// //         break;
// //     case "quinta":
// //         alert("Amanha é sexta!");
// //         break;
// //     case "sexta":
// //         alert("Yay! sobrevivemos a mais uma semana");
// //         break;
// //     case "sábado":
// //         alert("Sabado para relxar!");
// //         break;
// //     case "domingo":
// //         alert("Hoje é domingo! amanha é segunda! :(");
// //         break;
// //     default:
// //         alert("Dia inválido!");
// // }


// //Apresentacao
// console.log(`\nex01\n${myName} ${mySecondName}\n${myLuckyNumber}
//     \n\nex02\nantes: ${MESSAGE}\ndepois: ${whisper}
//     \n\nex03\nantes: ${WORD}\ndepois: ${facialHair}
//     \n\nex04\nAlert: Ola, ${firstName} ${lastName}!
//     \n\n`); 


// // testes
// let day1 = 'segunda-feira';
// let day2 = 'terça-feira';
// let day3 = 'quarta-feira';

// let oursuperarray = [day1, day2, day3];
// console.log(oursuperarray[0][3]); 


// // exemplo professora

// let shoppintList = ["batatas"];
// console.log(shoppintList);
// let item = prompt("Digite o nome do item que deseja adicionar a lista: ");
// shoppintList.push(item);
// console.log(shoppintList);


// // ex06 p43

// let arrayPlanets = ["Mercúrio", "Vênus", "Terra", "Mart", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão"];

// console.log(arrayPlanets);

// arrayPlanets[3] = "Marte";

// console.log(arrayPlanets);

// arrayPlanets.pop();

// console.log(arrayPlanets);

// let newPlanet = "Krypton";

// arrayPlanets.unshift(newPlanet);

// console.log(arrayPlanets);

// let index = arrayPlanets.indexOf("Vênus");

// if (index !== -1) {
//   arrayPlanets.splice(index, 1);
// }

// console.log(arrayPlanets);

// // // ex07 p55

// let str = "Da ba dee da ba daa";

// for (let i = 1; i <= 6; i++) {
//     console.log(str + " " + i);
// }

// let num = [25, 20, 15, 10, 5];

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// // ex08 p58
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// const outputDiv = document.getElementById("output");

// for (let i = 0; i < people.length; i++) {
//     outputDiv.innerHTML += people[i] + "<br>";
// }

// outputDiv.innerHTML +="<br>";

// for (let i = 0; i < people.length; i++) {
//     outputDiv.innerHTML += people[i].toUpperCase() + "<br>";
// }

// // for(let element of people){
// //     console.log(element.toUpperCase());
// // }

// // ex09 p62
//  function myShoppingList(){
// let groceriesList = ["batatas", "cenouras", "cebolas", "tomates", "alface"];

// console.log("Antes:");
// for (let i of groceriesList) {
//     console.log(i);
// }

// console.log("\n");

// while (true) {
//     let item = prompt("Digite o nome do item que deseja adicionar à lista: ");

//     if (item.toLocaleLowerCase().trim() === "fim") {
//         break;
//     }

//     if (item === "apagar") {
//         if (groceriesList.length > 0) {
//             let item = prompt("Digite o nome do item que deseja apagar");
//             groceriesList.splice(groceriesList.indexOf(item), 1);
//         }
//         continue;
//     }

//     groceriesList.push(item);
// }

// console.log("\nDepois:");
// for (let i of groceriesList) {
//     console.log(i);
// }
// }
// // ex10 p47

// const airplaneSeats = [
//     ["Ruth", "Anthony", "Stevie"],
//     ["Amelia", "Pedro", "Maya"],
//     ["Xavier", "Ananya", "Luis"],
//     ["Luke", null, "Deniz"],
//     ["Rin", "Sakura", "Francisco"]
// ];

// airplaneSeats[3][1] = "Rafael";

// for (let i of airplaneSeats) {
//     console.log(i);}

// // ex11 p50

// let product = {
//     name: "Caneta BIC",
//     inStock: true,
//     price: 1.99,
//     color: ["vermelho","azul", "verde"],
// }

// console.log(product.price + " " + product.color[2]);

// product.price = 2.55;

// console.log(product.price + " " + product.color[2]);

// //ex 12 p86

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'},
// {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'},
// {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// const firstNames = fullNames.map(fullNames => fullNames.first);


// // const firstNames = fullNames.map(function(fullName) {
// //     return fullName.first;
// // });

// firstNames.forEach(function(firstName) {
//     console.log(`O nome da personagem é: ${firstName}`);
// });

// fullNames.forEach(function(fullName) {
//     console.log(`O primeiro nome da personagem é: ${fullName.first} ${fullName.last}`);
// });

// fullNames.forEach(function(fullName) {
//     console.log(`O nome completo da personagem é: ${fullName.first}`);
// });

// // ex13 p88

// const greet = name => `Hey, ${name}!`;

// fullNames.forEach(fullName => {console.log(greet(`${fullName.first} ${fullName.last}`));});


// // ex14 p94

// const validUsernames = (["mark", "staceysmom1978", "q29832128238983", "carrie98", "MoanaFan"]);

// const valid = validUsernames.filter(username => username.length < 10);

// const validUsernames = (usernames) => usernames.filter(username => username.length < 10);

// // ex15 p97

// const allEvens = array => (array.every(number => number % 2 === 0));

// // ex16 p100