//! Сделать проверку на >10 элементов
//! Сделать проверку на 1 элемент
//! Добавить стилей

// import './css/styles.css';
// import { refs } from './js/refs.js';
// import { fetchCountry } from './js/fetchCountries.js';
// import { tooManyMatches, invalidRequest } from './js/notifications.js';

// var debounce = require('lodash.debounce');

// refs.input.addEventListener('input', debounce(onInputTyping, 500));

// function onInputTyping() {
//   if (refs.input.value) {
//     return function onSearch() {
//       const input = refs.input.value;

//       fetchCountry(input).then(renderCountriesOrCard);
//     };
//   }
//   refs.countries.innerHTML = '';
// }
import './css/styles.css';
import { refs } from './js/refs.js';
import { fetchCountry } from './js/fetchCountries.js';
import { tooManyMatches } from './js/notifications.js';

import countryTpl from './templates/country.hbs';
import countryListTpl from './templates/countryList.hbs';

var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onInputTyping, 500));

function onInputTyping() {
  if (refs.input.value) {
    const input = refs.input.value;

    fetchCountry(input).then(renderCountriesOrCard);
  }
  refs.countries.innerHTML = '';
}

function renderCountriesOrCard(country) {
  if (country.length > 10) {
    tooManyMatches();
  } else {
    const markup = countryTpl(country);
    refs.countries.innerHTML = markup;
  }
  // const markupList = countryListTpl(country);
}
