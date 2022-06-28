const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
  return array.reduce((acc, name) => {
    return acc + name.toUpperCase().split('').reduce((accum, letter) => {
      if (letter === 'A') {
        accum += 1;
      }
      return accum
    }, 0)
  }, 0)
}

console.log(containsA(names));