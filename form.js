const agreeImage = document.querySelector('#image');

document.querySelector('#send').addEventListener('click', function (event) {
  if (agreeImage.checked === false) {
    event.preventDefault();
  }
})

