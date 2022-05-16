// // // Exercício 1
// const a = 10;
// const b = 12;
// const c = 7;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// // Exercício 2
// if (a>b){
//     console.log(a);
// }else {
//     console.log(b);
// }

// // Exercício 3
// if (a > b && a > c){
//     console.log(a);
// }else if (b > a && b > c){
//     console.log(b);
// }else{
//     console.log(c);
// }

// // Exercício 4
// if (a > 0){
//     console.log('positive');
// }else if (a < 0){
//     console.log('negativa');
// }else{
//     console.log('zero');
// }

// // Exericício 5 
// let anguloUm = 45
// let anguloDois = 180
// let anguloTres = 65

// let somaDosAngulos = anguloUm + anguloDois + anguloTres
// console.log(somaDosAngulos);

// if (somaDosAngulos === 180){
//     console.log('true');
// }else if (anguloUm >= 180|| anguloUm <= 0 || anguloDois >= 180 || anguloDois <=0 || anguloTres >= 180|| anguloTres <= 0){
//     console.log('erro');
// }else {
//     console.log('false');
// }

// // Exercício 6
// let chessPiece= 'cavalo'

// switch (chessPiece.toLowerCase ()){
//     case 'rei':
//         console.log('Rei -> move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance');
//         break;
//     case 'bispo':
//         console.log('Bispo -> move-se a qualquer casa ao longo de uma diagonal que ocupa');
//         break;
//     case 'cavalo':
//         console.log('cavalo -> movimenta-se sempre em "L"');
//         break;
//     default:
//         console.log('Erro');
// };

// // Exercício 7
// let notaPorcentagem = 42

// if (notaPorcentagem >= 90){
//     console.log('A');
// }else if (notaPorcentagem >=80){
//     console.log('B');
// }else if (notaPorcentagem >= 70){
//     console.log('C');
// }else if (notaPorcentagem >= 60){
//     console.log('D');
// }else if (notaPorcentagem >= 50){
//     console.log('E');
// }else{
//     console.log('F');
// }

// Exercício 8

// if (a%2 === 0 || b%2 === 0 || c%2 === 0){
//   console.log(true);
// } else{
//   console.log(false);
// }

// Exercício 9

// if (a%2 !== 0 || b%2 !== 0 || c%2 !== 0){
//   console.log(true);
// } else{
//   console.log(false);
// }

// Exercício 10

// const custo = 1500
// const venda = 6000


// if (custo >= 0 && venda >= 0){

//   const valorCustoTotal = custo + custo*0.2
//   const lucro = venda - valorCustoTotal
//   const lucroMilPeças = lucro*1000
  
//   console.log(lucroMilPeças);

// } else{

//   console.log('erro');
// }