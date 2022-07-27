const menu = document.querySelector('.menu-icon') // create a variable for the menu icon
const menunav = document.querySelector('.menu-navegation') // create a variable for the menu navigation

console.log(menu) // check if the variable is correct
console.log(menunav) // check if the variable is correct

menu.addEventListener('click', ()=>{ // add an event listener to the menu icon
    menunav.classList.toggle('spread') // add a class to the menu navigation
})

window.addEventListener('click', e=>{ // add an event listener to the window
    if(menunav.classList.contains('spread') && e.target != menu && e.target != menunav){ // if the menu navigation has the class spread and the target of the event is not the menu icon
        menunav.classList.remove('spread') // remove the class from the menu navigation
    }
})