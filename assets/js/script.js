const menuButton = document.querySelector('#menu-icon')
const sideBar = document.querySelector('#sidebar')
const main = document.querySelector('#main')

menuButton.addEventListener('click', ()=>{
    sideBar.classList.toggle('hide')
    main.classList.toggle('full-width')
})