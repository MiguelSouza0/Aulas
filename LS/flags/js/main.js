import flags from './model/flags.js';

const principal = document.querySelector("main")

for(const flag of flags){
    principal.innerHTML += `<div class="flag col-2 my-2 text-center">
    <img src="${flag.image}" alt="${flag.name}">
    <p>${flag.name}</p>
    </div>`
}
