const cardElement = document.getElementById('userCard');
const profileImageElement = document.getElementById('profileImage');
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');
const cityElement = document.getElementById('city');
const countryElement = document.getElementById('country');

fetch('https://randomuser.me/api/?nat=BR')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    profileImageElement.src = user.picture.large;
    nameElement.textContent = user.name.title + ' ' + user.name.first;
    emailElement.textContent = 'Email: ' + user.email;
    phoneElement.textContent = 'Telefone: ' + user.phone;
    cityElement.textContent = 'Cidade: ' + user.location.city;
    countryElement.textContent = 'País: ' + user.location.country;
  })

function carregarHTML() {
  window.location.href = 'index.html';
}

function valida(nome) {
  const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \'-]+$/;
  return nomeRegex.test(nome);
}

module.exports = {valida}