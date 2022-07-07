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

// 8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?

it('Testa função getPokemonDetails ', (done) => {
  getPokemonDetails(undefined, (err, nul) => {
    try {
      expect.assertions(2)
      expect(err).toBe(new Error('Não temos esse pokémon para você :('));
      expect(nul).toBeNull()
      done();
    } catch (erro) {
      done(erro);
    }
  });
});