// Exercicio de fixação de objetos 

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,
//   },
// };

// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos!' );

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes!')

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');s.silver + ' medalhas de pratas.silver + ' medalhas de prata');

// Exercicio de fixação for/in for/of

// // let names = {
// //   person1: 'João',
// //   person2: 'Maria',
// //   person3: 'Jorge',
// // };

// // for(let answer in names){
// //   console.log('Olá ' + names[answer]);
// // };

// // let car = {
// //   model: 'A3 Sedan',
// //   manufacturer: 'Audi',
// //   year: 2020
// // };

// // for(let specification in car){
// //   console.log(specification, car[specification]);
// // };

// // Exercicio 1

// // let info = {
// //   personagem: 'Margarida',
// //   origem: 'Pato Donald',
// //   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// // };

// // // console.log('Bem-vinda, ' + info['personagem']);

// // // // Exercicio 2

// // info['recorrente'] = 'Sim';
// // // console.log(info);


// // Exercicio 3 

// // for( let key in info){
// //   console.log(key);
// // }

// // Exercicio 4

// // for (let value in info){
// //   console.log(info[value]);
// // }

// // Exercicio 5

// // let infoTio = {
// //   personagem: 'Tio Patinhas',
// //   origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
// //   nota: 'O último MacPatinhas',
// //   recorrente: 'Sim'
// // };

// // for (let properties in info, infoTio) {
  
// //     console.log(info[properties] + ' e ' + infoTio[properties]);
// // //   }
// // // Exercicio 6 

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// // console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

// // Exercicio 7

// leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   },
// );

// //   console.log(leitor['livrosFavoritos'][1]);

// // Exercicio 8

// console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');

// Exercicio 5 Funções 

// function detectorPalindromos (word) {
 
// function identifyTheMostRepeat (Array){
//   for()
// }

//Duas formas de resolver o exercício

let array =  [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(maisRepetido(array))