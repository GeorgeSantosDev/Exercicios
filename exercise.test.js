const { uppercase, getPokemonDetails } = require('./exercise.js')

// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// it('Testa a função callback de uppercase', (done) => {
//   uppercase('teste', (string) => {
//     try {
//       expect(string).toMatch('TESTE')
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const filter = (pokemon) => pokemon.name === 'Articuno';
    const callback = (erro, message) => (erro) ? erro : message;

    expect(getPokemonDetails(filter, callback)).toEqual(new Error('Não temos esse pokémon para você :('));
    done();
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    const filter = (pokemon) => pokemon.name === 'Charmander';
    const callback = (erro, message) => (erro) ? console.log(erro) : console.log(message);

    expect(getPokemonDetails(filter, callback)).toBe('Olá, seu pokémon é o Charmander, o tipo dele é fire e a habilidade principal dele é ember');
    done();
  });
});
