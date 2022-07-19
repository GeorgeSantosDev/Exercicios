import React, { Component } from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const contents = conteudos.map(({conteudo, bloco, status}) => <div><h4>O conteúdo é: {conteudo}</h4>
<p>Status: {status}</p>
<p>Bloco: {bloco}</p></div>)

class Content extends Component {
  render() {
    return (
      <ul>{contents}</ul>
    )
  }
}

export default Content 