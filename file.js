// let NewElement = document.createElement('Section');

// document.querySelector("#pai").appendChild(NewElement);

// let NewElementSon = document.createElement('p'); 

// document.querySelector("#elementoOndeVoceEsta").appendChild(NewElementSon);

// let NewSon = document.createElement('title');

// document.querySelector('#primeiroFilhoDoFilho').appendChild(NewSon);

let a = document.querySelector('#pai').children;

for (index = 0; index < a.length; index += 1){

  if(a[index] !== document.querySelector('#elementoOndeVoceEsta')){
    document.querySelector('#pai').removeChild(a[index]);
  }

}


        let mainFather = document.querySelectorAll('.main-content');
        console.log(mainFather);