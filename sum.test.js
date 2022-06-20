const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee} = require('./sum.js');

describe('Test sum function', () => {
  it('Test if sum(4,5) returns 9', () => {
    expect(sum(4,5)).toBe(9); 
  })
  it('Test if sum(0,0) returns 0', () => {
    expect(sum(0,0)).toBe(0);
  })
  it('Test if sum(4,"5") throws an error', () => {
    expect(() => {sum(4,'5')}).toThrow(); 
  })
  it('Test if sum(4,"5") throws an error message  "parameters must be numbers"', () => {
    expect(() => {sum(4,'5')}).toThrowError(new Error( "parameters must be numbers")); 
  })
})

describe('Test myRemove function', () => {
  it('Test if myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('Test if myRemove([1, 2, 3, 4], 3) not returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('Test if myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe ('Test myFizzBuzz function', () => {
  it('returns "fizzbuzz" when myFizzBuzz(15) ', () => {
    expect( myFizzBuzz(15)).toMatch('fizzbuzz')
  })
  it('returns "fizz" when myFizzBuzz(21) ', () => {
    expect( myFizzBuzz(21)).toMatch('fizz')
  })
  it('returns "buzz" when myFizzBuzz(25) ', () => {
    expect( myFizzBuzz(25)).toMatch('buzz')
  })
  it('returns "32" when myFizzBuzz(32) ', () => {
    expect( myFizzBuzz(32)).toBe(32)
  })
  it('returns "false" when myFizzBuzz() ', () => {
    expect( myFizzBuzz()).toBeFalsy()
  })
})

describe ('Test encode and decode functions', () => {
  it('Test if encode is defined', () => {
    expect(encode).toBeDefined();
  })
  it('Test if encode is a function', () => {
    expect(typeof encode).toEqual('function');
  })
  it('Test if decode is a function', () => {
    expect(decode).toBeDefined();
  })
  it('Test if decode is a function', () => {
    expect(typeof decode).toEqual('function');
  })
  it('Test if vogals a, e, i, o, u are replaced by 1, 2, 3, 4, 5 respectively in encode function', () => {
    expect(encode('aleluia o Deus')).toMatch('1l2l531 4 D25s');
  })
  it('Test if vogals a, e, i, o, u are replaced by 1, 2, 3, 4, 5 respectively in decode function', () => {
    expect(decode('1l2l531 4 D25s')).toMatch('aleluia o Deus');
  })
  it('Test if consonants are not replaced by numbers encode function', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toMatch('bcdfghjklmnpqrstvwxyz');
  })
  it('Test if numbers > 5 are not replaced by letters decode function', () => {
    expect(decode('6789')).toMatch('6789');
  })
  it('Test if the number of elements in the parameter string is same of encode returns', () => {
    expect(encode('teste').length).toEqual(5);
  })
  it('Test if the number of elements in the parameter string is same of decode returns', () => {
    expect(decode('1m1d1').length).toEqual(5);
  })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Test the function searchEmployee', () => {
  it('Test if searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Test if  searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
})