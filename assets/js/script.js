const menuButton = document.querySelector('#menu-icon')
const sideBar = document.querySelector('#sidebar')
const main = document.querySelector('#main')
const MainContent = document.querySelector('#main-content')
const allIconDetails = document.querySelectorAll('.icon-details')

menuButton.addEventListener('click', ()=>{
    // sideBar.classList.toggle('hide')
    allIconDetails.forEach(iconDetails => iconDetails.classList.toggle('hide'))
    MainContent.classList.toggle('change')
})