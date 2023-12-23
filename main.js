/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactTab: () => (/* binding */ createContactTab)
/* harmony export */ });
function createContactTab() {
    const contact = document.createElement('main');
    contact.className = 'contact';
    contact.innerHTML = `
    <div class="con-info">
        <address class="address">
            🏠 123 Main Street, Sidist Kilo <br>
            📞 +25191234563 <br>
            📪 fakeemail@gmail.com
        </address>
        <img src="./Assets/maploc.png" alt="location on map" style="width: 80%">
        <div id="newsletter">
            <input type="email" name="email" id="email" placeholder="your email for newsletter">
            <input type="button" value="Subscribe">
        </div>
        <div class="icons">
            <a href="https://www.facebook.com/profile.php?id=61553305680220"><img src="./Assets/fb.png" alt="facebook link"></a>
            <a href="https://www.instagram.com/zekaryasmekuaninit/"><img src="./Assets/insta.png" alt="instagram link"></a>
            <a href="https://twitter.com/z_zekaryas"><img src="./Assets/twiter.png" alt="twitter link"></a>
        </div>
    </div>
    `
    return contact
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
function home() {
    const main = document.createElement('main');
    main.innerHTML = `
        <section class="welcome">
            <h2>Discover Delight at Eureka's table</h2>
        </section>
        <section class="about">
            <div class="we">
                <h2>We</h2><br>
                <p> We offer sense of family. We have a belief that good meals
                are not just about what's on the plate but the memories created
                around it. <strong> Welcome to Eureka's Table, where every visit
                is an exploration of taste and the joy of dining.</strong>
                 </p>
            </div>
            <div class="when-to">
                <h2>When to</h2><br>
            <pre>
Sunday: 8am - 8pm

Monday: 6am - 6pm

Tuesday: 6am - 6pm

Wednesday: 6am - 6pm

Thursday: 6am - 10pm

Friday: 6am - 10pm
    
Saturday: 8am - 10pm
</pre>
            </div>
            <div class="where-to">
                <h2>Where</h2><br>
                <pre>
456 Spice Avenue
Addis Ababa,
Gulele SUbcity
District 12345
Sidist Kilo University,
Ethiopia
</pre>
                <img style="width: 70px; border-radius: 50%" src="./Assets/loc.jpg" alt="location">
            </div>
        </section>
    `
    return main
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
    const menu = document.createElement('main');
    menu.className = 'menu'
    menu.innerHTML = `
    <div class="menu-list">
        <div class="menu-item">
            <img src="./Assets/chicken-street.webp" alt="Easy Chicken Street Tacos">
            <h2>Easy Chicken Street Tacos</h2>
            <p>Flavorful seasoned chicken, nestled in soft tortillas, topped with vibrant salsa and cilantro. A quick and delightful street-style treat!</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/Moussaka.jpg" alt="Moussaka">
            <h2>Moussaka</h2>
            <p>Delicious moussaka featuring layers of eggplant baked with seasoned ground beef, topped with creamy béchamel sauce—a classic Greek delight!</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/ChickenTagine.webp" alt="Chicken Tagine">
            <h2>Chicken Tagine</h2>
            <p>Savor the exotic blend of spices in our Chicken Tagine — tender chicken slow-cooked with apricots and almonds for a Moroccan delight.</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/Pot-Pork-Ramen.webp" alt="Easy Instant Pot Pork Ramen Stir Fry">
            <h2>Easy Instant Pot Pork Ramen Stir Fry</h2>
            <p>Savor simplicity with our Easy Instant Pot Pork Ramen Stir Fry—succulent pork, vibrant veggies, and flavorful noodles create a quick and satisfying delight.</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/Butternut.webp" alt="Butternut Squash Caprese Salad">
            <h2>Butternut Squash Caprese Salad</h2>
            <p>Delight in our Butternut Squash Caprese Salad, a symphony of flavors featuring sweet butternut squash, fresh tomatoes, mozzarella, and basil.</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/feijoada.webp" alt="Feijoada">
            <h2>Feijoada</h2>
            <p>Savor Brazilian Feijoada — a hearty black bean stew with savory meats, capturing authentic flavors and traditions.</p>
        </div>
    </div>
    `
    return menu;
}


/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createReservationTab: () => (/* binding */ createReservationTab)
/* harmony export */ });
function createReservationTab() {
    const reservation = document.createElement('main');
    reservation.className = 'reservation'
    reservation.innerHTML = `
    <h1 id="heading">Reseravations</h1>
    <form action="https://formspree.io/f/xjvnbjzl" id="form" method="POST">
        <div id="part1">
            <div>
                <label for="customer-name">Name: </label>
                <input type="text" name="Customer Name: " id="customer-name">
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="Customer Email: " name="email" id="email">
            </div>
            <div>
                <label for="date">Pick Date: </label>
                <input type="date" name="Time Picked: " id="date">
            </div>
            <div>
                <label for="guest">No_ of Guests: </label>
                <input type="number" name="guest no_" id="guest">
            </div>
        </div>
        <hr>
        <div  id="part2">
            <div>
                <div><label for=""> Special Requests: </label></div>
                <textarea name="Special Requests: " cols="25" rows="7"></textarea>
            </div>
            <div>
                <label for="times">See Available Times: </label>
                <select name="" id="times">
                    <option disabled>Sunday: 8am - 8pm</option>
                    <option disabled>Monday: 6am - 6pm</option>
                    <option disabled>Tuesday: 6am - 6pm</option>
                    <option disabled>Wednesday: 6am - 6pm</option>
                    <option disabled>Thursday: 6am - 10pm</option>
                    <option disabled>Friday: 6am - 10pm</option>
                    <option disabled>Saturday: 8am - 10pm</option>
                </select><br>
                <input type="submit" value="Submit">
            </div>
        </div>
    </form>
    `

    return reservation;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reservations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservations */ "./src/reservations.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





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
    placeholder.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.home)());
    
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
    placeholder.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.home)())
    createBackground(homeTab)
    removeBackground(menuTab, resTab, contactTab)
})

menuTab.addEventListener('click', ()=>{
    placeholder.innerHTML = '';
    placeholder.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)())
    createBackground(menuTab)
    removeBackground(homeTab, resTab, contactTab)
})

resTab.addEventListener('click', ()=>{
    placeholder.innerHTML = '';
    placeholder.appendChild((0,_reservations__WEBPACK_IMPORTED_MODULE_2__.createReservationTab)())
    createBackground(resTab)
    removeBackground(menuTab, homeTab, contactTab)
    const submitBtn = document.querySelector('input[type="submit"]')
    // submitBtn.addEventListener('click', (e)=>{alert('Bravo! Your reservation is saved!');})
})

contactTab.addEventListener('click', ()=>{
    placeholder.innerHTML = '';
    placeholder.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContactTab)())
    createBackground(contactTab)
    removeBackground(menuTab, resTab, homeTab)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ007QUFDa0I7QUFDVDs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUFJO0FBQ2hDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVU7QUFDdEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDRCQUE0QixtRUFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDRDQUE0QztBQUM3RixDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsMERBQWdCO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC8uL3NyYy9yZXNlcnZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0VGFiKCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbi1pbmZvXCI+XG4gICAgICAgIDxhZGRyZXNzIGNsYXNzPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAg8J+PoCAxMjMgTWFpbiBTdHJlZXQsIFNpZGlzdCBLaWxvIDxicj5cbiAgICAgICAgICAgIPCfk54gKzI1MTkxMjM0NTYzIDxicj5cbiAgICAgICAgICAgIPCfk6ogZmFrZWVtYWlsQGdtYWlsLmNvbVxuICAgICAgICA8L2FkZHJlc3M+XG4gICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvbWFwbG9jLnBuZ1wiIGFsdD1cImxvY2F0aW9uIG9uIG1hcFwiIHN0eWxlPVwid2lkdGg6IDgwJVwiPlxuICAgICAgICA8ZGl2IGlkPVwibmV3c2xldHRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdXIgZW1haWwgZm9yIG5ld3NsZXR0ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJzY3JpYmVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wcm9maWxlLnBocD9pZD02MTU1MzMwNTY4MDIyMFwiPjxpbWcgc3JjPVwiLi9Bc3NldHMvZmIucG5nXCIgYWx0PVwiZmFjZWJvb2sgbGlua1wiPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3pla2FyeWFzbWVrdWFuaW5pdC9cIj48aW1nIHNyYz1cIi4vQXNzZXRzL2luc3RhLnBuZ1wiIGFsdD1cImluc3RhZ3JhbSBsaW5rXCI+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vel96ZWthcnlhc1wiPjxpbWcgc3JjPVwiLi9Bc3NldHMvdHdpdGVyLnBuZ1wiIGFsdD1cInR3aXR0ZXIgbGlua1wiPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiBjb250YWN0XG59XG5leHBvcnQgeyBjcmVhdGVDb250YWN0VGFiIH0iLCJmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGgyPkRpc2NvdmVyIERlbGlnaHQgYXQgRXVyZWthJ3MgdGFibGU8L2gyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5XZTwvaDI+PGJyPlxuICAgICAgICAgICAgICAgIDxwPiBXZSBvZmZlciBzZW5zZSBvZiBmYW1pbHkuIFdlIGhhdmUgYSBiZWxpZWYgdGhhdCBnb29kIG1lYWxzXG4gICAgICAgICAgICAgICAgYXJlIG5vdCBqdXN0IGFib3V0IHdoYXQncyBvbiB0aGUgcGxhdGUgYnV0IHRoZSBtZW1vcmllcyBjcmVhdGVkXG4gICAgICAgICAgICAgICAgYXJvdW5kIGl0LiA8c3Ryb25nPiBXZWxjb21lIHRvIEV1cmVrYSdzIFRhYmxlLCB3aGVyZSBldmVyeSB2aXNpdFxuICAgICAgICAgICAgICAgIGlzIGFuIGV4cGxvcmF0aW9uIG9mIHRhc3RlIGFuZCB0aGUgam95IG9mIGRpbmluZy48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hlbi10b1wiPlxuICAgICAgICAgICAgICAgIDxoMj5XaGVuIHRvPC9oMj48YnI+XG4gICAgICAgICAgICA8cHJlPlxuU3VuZGF5OiA4YW0gLSA4cG1cblxuTW9uZGF5OiA2YW0gLSA2cG1cblxuVHVlc2RheTogNmFtIC0gNnBtXG5cbldlZG5lc2RheTogNmFtIC0gNnBtXG5cblRodXJzZGF5OiA2YW0gLSAxMHBtXG5cbkZyaWRheTogNmFtIC0gMTBwbVxuICAgIFxuU2F0dXJkYXk6IDhhbSAtIDEwcG1cbjwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hlcmUtdG9cIj5cbiAgICAgICAgICAgICAgICA8aDI+V2hlcmU8L2gyPjxicj5cbiAgICAgICAgICAgICAgICA8cHJlPlxuNDU2IFNwaWNlIEF2ZW51ZVxuQWRkaXMgQWJhYmEsXG5HdWxlbGUgU1ViY2l0eVxuRGlzdHJpY3QgMTIzNDVcblNpZGlzdCBLaWxvIFVuaXZlcnNpdHksXG5FdGhpb3BpYVxuPC9wcmU+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOiA3MHB4OyBib3JkZXItcmFkaXVzOiA1MCVcIiBzcmM9XCIuL0Fzc2V0cy9sb2MuanBnXCIgYWx0PVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxuICAgIHJldHVybiBtYWluXG59XG5leHBvcnQgeyBob21lIH07IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnXG4gICAgbWVudS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vQXNzZXRzL2NoaWNrZW4tc3RyZWV0LndlYnBcIiBhbHQ9XCJFYXN5IENoaWNrZW4gU3RyZWV0IFRhY29zXCI+XG4gICAgICAgICAgICA8aDI+RWFzeSBDaGlja2VuIFN0cmVldCBUYWNvczwvaDI+XG4gICAgICAgICAgICA8cD5GbGF2b3JmdWwgc2Vhc29uZWQgY2hpY2tlbiwgbmVzdGxlZCBpbiBzb2Z0IHRvcnRpbGxhcywgdG9wcGVkIHdpdGggdmlicmFudCBzYWxzYSBhbmQgY2lsYW50cm8uIEEgcXVpY2sgYW5kIGRlbGlnaHRmdWwgc3RyZWV0LXN0eWxlIHRyZWF0ITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvTW91c3Nha2EuanBnXCIgYWx0PVwiTW91c3Nha2FcIj5cbiAgICAgICAgICAgIDxoMj5Nb3Vzc2FrYTwvaDI+XG4gICAgICAgICAgICA8cD5EZWxpY2lvdXMgbW91c3Nha2EgZmVhdHVyaW5nIGxheWVycyBvZiBlZ2dwbGFudCBiYWtlZCB3aXRoIHNlYXNvbmVkIGdyb3VuZCBiZWVmLCB0b3BwZWQgd2l0aCBjcmVhbXkgYsOpY2hhbWVsIHNhdWNl4oCUYSBjbGFzc2ljIEdyZWVrIGRlbGlnaHQhPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL0Fzc2V0cy9DaGlja2VuVGFnaW5lLndlYnBcIiBhbHQ9XCJDaGlja2VuIFRhZ2luZVwiPlxuICAgICAgICAgICAgPGgyPkNoaWNrZW4gVGFnaW5lPC9oMj5cbiAgICAgICAgICAgIDxwPlNhdm9yIHRoZSBleG90aWMgYmxlbmQgb2Ygc3BpY2VzIGluIG91ciBDaGlja2VuIFRhZ2luZSDigJQgdGVuZGVyIGNoaWNrZW4gc2xvdy1jb29rZWQgd2l0aCBhcHJpY290cyBhbmQgYWxtb25kcyBmb3IgYSBNb3JvY2NhbiBkZWxpZ2h0LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvUG90LVBvcmstUmFtZW4ud2VicFwiIGFsdD1cIkVhc3kgSW5zdGFudCBQb3QgUG9yayBSYW1lbiBTdGlyIEZyeVwiPlxuICAgICAgICAgICAgPGgyPkVhc3kgSW5zdGFudCBQb3QgUG9yayBSYW1lbiBTdGlyIEZyeTwvaDI+XG4gICAgICAgICAgICA8cD5TYXZvciBzaW1wbGljaXR5IHdpdGggb3VyIEVhc3kgSW5zdGFudCBQb3QgUG9yayBSYW1lbiBTdGlyIEZyeeKAlHN1Y2N1bGVudCBwb3JrLCB2aWJyYW50IHZlZ2dpZXMsIGFuZCBmbGF2b3JmdWwgbm9vZGxlcyBjcmVhdGUgYSBxdWljayBhbmQgc2F0aXNmeWluZyBkZWxpZ2h0LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvQnV0dGVybnV0LndlYnBcIiBhbHQ9XCJCdXR0ZXJudXQgU3F1YXNoIENhcHJlc2UgU2FsYWRcIj5cbiAgICAgICAgICAgIDxoMj5CdXR0ZXJudXQgU3F1YXNoIENhcHJlc2UgU2FsYWQ8L2gyPlxuICAgICAgICAgICAgPHA+RGVsaWdodCBpbiBvdXIgQnV0dGVybnV0IFNxdWFzaCBDYXByZXNlIFNhbGFkLCBhIHN5bXBob255IG9mIGZsYXZvcnMgZmVhdHVyaW5nIHN3ZWV0IGJ1dHRlcm51dCBzcXVhc2gsIGZyZXNoIHRvbWF0b2VzLCBtb3p6YXJlbGxhLCBhbmQgYmFzaWwuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL0Fzc2V0cy9mZWlqb2FkYS53ZWJwXCIgYWx0PVwiRmVpam9hZGFcIj5cbiAgICAgICAgICAgIDxoMj5GZWlqb2FkYTwvaDI+XG4gICAgICAgICAgICA8cD5TYXZvciBCcmF6aWxpYW4gRmVpam9hZGEg4oCUIGEgaGVhcnR5IGJsYWNrIGJlYW4gc3RldyB3aXRoIHNhdm9yeSBtZWF0cywgY2FwdHVyaW5nIGF1dGhlbnRpYyBmbGF2b3JzIGFuZCB0cmFkaXRpb25zLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiBtZW51O1xufVxuZXhwb3J0IHtjcmVhdGVNZW51fSIsImZ1bmN0aW9uIGNyZWF0ZVJlc2VydmF0aW9uVGFiKCkge1xuICAgIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIHJlc2VydmF0aW9uLmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbidcbiAgICByZXNlcnZhdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGgxIGlkPVwiaGVhZGluZ1wiPlJlc2VyYXZhdGlvbnM8L2gxPlxuICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2YveGp2bmJqemxcIiBpZD1cImZvcm1cIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJwYXJ0MVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3VzdG9tZXItbmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIkN1c3RvbWVyIE5hbWU6IFwiIGlkPVwiY3VzdG9tZXItbmFtZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiQ3VzdG9tZXIgRW1haWw6IFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPlBpY2sgRGF0ZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiVGltZSBQaWNrZWQ6IFwiIGlkPVwiZGF0ZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJndWVzdFwiPk5vXyBvZiBHdWVzdHM6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZ3Vlc3Qgbm9fXCIgaWQ9XCJndWVzdFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHI+XG4gICAgICAgIDxkaXYgIGlkPVwicGFydDJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48bGFiZWwgZm9yPVwiXCI+IFNwZWNpYWwgUmVxdWVzdHM6IDwvbGFiZWw+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJTcGVjaWFsIFJlcXVlc3RzOiBcIiBjb2xzPVwiMjVcIiByb3dzPVwiN1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpbWVzXCI+U2VlIEF2YWlsYWJsZSBUaW1lczogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInRpbWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U3VuZGF5OiA4YW0gLSA4cG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5Nb25kYXk6IDZhbSAtIDZwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlR1ZXNkYXk6IDZhbSAtIDZwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPldlZG5lc2RheTogNmFtIC0gNnBtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+VGh1cnNkYXk6IDZhbSAtIDEwcG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5GcmlkYXk6IDZhbSAtIDEwcG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TYXR1cmRheTogOGFtIC0gMTBwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0Pjxicj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIGBcblxuICAgIHJldHVybiByZXNlcnZhdGlvbjtcbn1cbmV4cG9ydCB7IGNyZWF0ZVJlc2VydmF0aW9uVGFiIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVzZXJ2YXRpb25UYWIgfSBmcm9tIFwiLi9yZXNlcnZhdGlvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RUYWIgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVJbnRpYWxMb2FkUGFnZSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGgxPkV1cmVrYSBSZXN0YXVyYW50PC9oMT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaG9tZVwiPkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51XCI+TWVudTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInJlc2VydmF0aW9uc1wiPlJlc2VyYXZhdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBpZD1cInBsYWNlaG9sZGVyXCI+PGRpdj5cbiAgICBgO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlaG9sZGVyJyk7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbiAgICBcbi8vIGZvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPjwvcD48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3pha3ltYWt5OC9FdXJla2EtUmVzdGF1cmFudFwiPkRldmVsb3BlcjogWmVrYXJ5YXMgTS48L2E+PC9wPlxuICAgIGBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuY3JlYXRlSW50aWFsTG9hZFBhZ2UoKVxuXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuY29uc3QgcmVzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmF0aW9ucycpO1xuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5ob21lVGFiLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDIwNiwgMTkwLCAxMSknXG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmQobmF2SXRlbSkge1xuICAgIG5hdkl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjA2LCAxOTAsIDExKSdcbn1cbmZ1bmN0aW9uIHJlbW92ZUJhY2tncm91bmQob25lLCB0d28sIHRocmVlKSB7XG4gICAgb25lLnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSdcbiAgICB0d28uc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJ1xuICAgIHRocmVlLnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSdcbn1cbi8vIGV2ZW50IGxpc3RlbmVyc1xuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChob21lKCkpXG4gICAgY3JlYXRlQmFja2dyb3VuZChob21lVGFiKVxuICAgIHJlbW92ZUJhY2tncm91bmQobWVudVRhYiwgcmVzVGFiLCBjb250YWN0VGFiKVxufSlcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKVxuICAgIGNyZWF0ZUJhY2tncm91bmQobWVudVRhYilcbiAgICByZW1vdmVCYWNrZ3JvdW5kKGhvbWVUYWIsIHJlc1RhYiwgY29udGFjdFRhYilcbn0pXG5cbnJlc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVzZXJ2YXRpb25UYWIoKSlcbiAgICBjcmVhdGVCYWNrZ3JvdW5kKHJlc1RhYilcbiAgICByZW1vdmVCYWNrZ3JvdW5kKG1lbnVUYWIsIGhvbWVUYWIsIGNvbnRhY3RUYWIpXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgLy8gc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57YWxlcnQoJ0JyYXZvISBZb3VyIHJlc2VydmF0aW9uIGlzIHNhdmVkIScpO30pXG59KVxuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0VGFiKCkpXG4gICAgY3JlYXRlQmFja2dyb3VuZChjb250YWN0VGFiKVxuICAgIHJlbW92ZUJhY2tncm91bmQobWVudVRhYiwgcmVzVGFiLCBob21lVGFiKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=