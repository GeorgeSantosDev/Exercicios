// const { default: fetch } = require("node-fetch");

const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCrypto = async () => {
  const coins = await fetch(API_URL)
  const coinsArray = await coins.json()

  return coinsArray.data;
};

const listCripto = async () => {
  const allCoins = await fetchCrypto();

  allCoins.map(({ id, symbol, priceUsd }) => `${id} (${symbol}): ${priceUsd}`).forEach((coin) => {
    const li = document.createElement('li');
    li.innerText = coin;
    document.querySelector('#cripto-list').appendChild(li);
  })
};

const list10Cripto = async () => {
  const allCoins = await fetchCrypto();

  const coinsTop10 = allCoins.map(({ id, symbol, priceUsd }) => `${id} (${symbol}): ${Number(priceUsd).toFixed(2)}`);
  coinsTop10.forEach((coin, i) => {
    if (i < 10) {
      const li = document.createElement('li');
      li.innerText = coin;
      document.querySelector('#cripto-list').appendChild(li);
    }
  })
}

window.onload = list10Cripto;

// id symbol priceUsd