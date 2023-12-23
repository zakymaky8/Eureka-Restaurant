import { home } from "./home";
import { createMenu } from "./menu";
import { createReservationTab } from "./reservations";
import { createContactTab } from "./contact";

const content = document.querySelector('#content');

function createIntialLoadPage() {
    content.innerHTML = `
        <header class="header">
            <h1>Eureka Restaurant</h1>
            <nav class="nav">
                <ul class="nav-items">
                    <li id="home">Home</li>
                    <li id="menu">Menu</li>
                    <li id="reservations">Reseravations</li>
                    <li id="contact">Contact</li>
                </ul>
            </nav>
        </header>
        <div id="placeholder"><div>
    `;
    const placeholder = document.querySelector('#placeholder');
    placeholder.appendChild(home());
    
// footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p></p><a href="https://github.com/zakymaky8/Eureka-Restaurant">Developer: Zekaryas M.</a></p>
    `
    content.appendChild(footer)
}

createIntialLoadPage()

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const resTab = document.querySelector('#reservations');
const contactTab = document.querySelector('#contact');
homeTab.style.background = 'rgb(206, 190, 11)'

function createBackground(navItem) {
    navItem.style.background = 'rgb(206, 190, 11)'
}
function removeBackground(one, two, three) {
    one.style.background = 'none'
    two.style.background = 'none'
    three.style.background = 'none'
}
// event listeners

homeTab.addEventListener('click', ()=>{
    placeholder.innerHTML = '';
    placeholder.appendChild(home())
    createBackground(homeTab)
    removeBackground(menuTab, resTab, contactTab)
})

menuTab.addEventListener('click', ()=>{
    placeholder.innerHTML = '';
    placeholder.appendChild(createMenu())
    createBackground(menuTab)
    removeBackground(homeTab, resTab, contactTab)
})

resTab.addEventListener('click', ()=>{
    placeholder.innerHTML = '';
    placeholder.appendChild(createReservationTab())
    createBackground(resTab)
    removeBackground(menuTab, homeTab, contactTab)
    const submitBtn = document.querySelector('input[type="submit"]')
    submitBtn.addEventListener('click', (e)=>{alert('Bravo! Your reservation is saved!');})
})

contactTab.addEventListener('click', ()=>{
    placeholder.innerHTML = '';
    placeholder.appendChild(createContactTab())
    createBackground(contactTab)
    removeBackground(menuTab, resTab, homeTab)
})