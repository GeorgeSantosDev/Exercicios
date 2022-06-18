// Part 2
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const whoAsked = order.order.delivery.deliveryPerson;
  const toWho = order.name;
  const phone = order.phoneNumber;
  const address = Object.values(order.address);

  console.log(`Olá ${whoAsked}, entrega para: ${toWho}, Telefone: ${phone}, ${address[0]}, Nº:${address[1]}, APTO:  ${address[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const whoAsked = order.order.delivery.deliveryPerson;
  const pizzaFlavor = Object.keys(order.order.pizza);
  const drink = Object.values(order.order.drinks.coke);
  const pay = order.payment.total;

  console.log(`Olá ${whoAsked}, o total do seu pedido de ${pizzaFlavor[0]}, ${pizzaFlavor[1]} e ${drink[0]} é R$${pay},00.`)

}

orderModifier(order);

// Part 3 

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (object, key, value) => {
  object[key] = value; 
}

addTurn (lesson2, 'turno', 'noturno');

const keyList = (object) =>  Object.keys(object);

const objectSize = (object) => Object.keys(object).length;

const valuesList = (object) =>  Object.values(object);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const numberOfStudents = (object) => {
  const size = Object.keys(object); 
  let students = 0;

  for (let key of size){
    students += object[key].numeroEstudantes 
  }
  console.log(students);
}

numberOfStudents(allLessons);

const keyValue = (obj, position) => Object.values(obj)[position];

const verifyPair = (obj, key, value) => {
  const objectKeys = Object.keys(obj);
  const objectValues = Object.values(obj);
  let index = '';

  if(objectKeys.includes(key)){
    index = objectKeys.indexOf(key);
  }

  if(objectValues[index] === value){
    return true;
  } else {
    return false;
  }
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))