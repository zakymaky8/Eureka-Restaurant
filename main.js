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
    <form action="https://formspree.io/f/xqkrzwnz" id="form">
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
    submitBtn.addEventListener('click', (e)=>{alert('Bravo! Your reservation is saved!');})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ007QUFDa0I7QUFDVDs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUFJO0FBQ2hDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVU7QUFDdEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDRCQUE0QixtRUFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDRDQUE0QztBQUMxRixDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsMERBQWdCO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC8uL3NyYy9yZXNlcnZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0VGFiKCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbi1pbmZvXCI+XG4gICAgICAgIDxhZGRyZXNzIGNsYXNzPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAg8J+PoCAxMjMgTWFpbiBTdHJlZXQsIFNpZGlzdCBLaWxvIDxicj5cbiAgICAgICAgICAgIPCfk54gKzI1MTkxMjM0NTYzIDxicj5cbiAgICAgICAgICAgIPCfk6ogZmFrZWVtYWlsQGdtYWlsLmNvbVxuICAgICAgICA8L2FkZHJlc3M+XG4gICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvbWFwbG9jLnBuZ1wiIGFsdD1cImxvY2F0aW9uIG9uIG1hcFwiIHN0eWxlPVwid2lkdGg6IDgwJVwiPlxuICAgICAgICA8ZGl2IGlkPVwibmV3c2xldHRlclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cInlvdXIgZW1haWwgZm9yIG5ld3NsZXR0ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJzY3JpYmVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wcm9maWxlLnBocD9pZD02MTU1MzMwNTY4MDIyMFwiPjxpbWcgc3JjPVwiLi9Bc3NldHMvZmIucG5nXCIgYWx0PVwiZmFjZWJvb2sgbGlua1wiPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3pla2FyeWFzbWVrdWFuaW5pdC9cIj48aW1nIHNyYz1cIi4vQXNzZXRzL2luc3RhLnBuZ1wiIGFsdD1cImluc3RhZ3JhbSBsaW5rXCI+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vel96ZWthcnlhc1wiPjxpbWcgc3JjPVwiLi9Bc3NldHMvdHdpdGVyLnBuZ1wiIGFsdD1cInR3aXR0ZXIgbGlua1wiPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiBjb250YWN0XG59XG5leHBvcnQgeyBjcmVhdGVDb250YWN0VGFiIH0iLCJmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGgyPkRpc2NvdmVyIERlbGlnaHQgYXQgRXVyZWthJ3MgdGFibGU8L2gyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5XZTwvaDI+PGJyPlxuICAgICAgICAgICAgICAgIDxwPiBXZSBvZmZlciBzZW5zZSBvZiBmYW1pbHkuIFdlIGhhdmUgYSBiZWxpZWYgdGhhdCBnb29kIG1lYWxzXG4gICAgICAgICAgICAgICAgYXJlIG5vdCBqdXN0IGFib3V0IHdoYXQncyBvbiB0aGUgcGxhdGUgYnV0IHRoZSBtZW1vcmllcyBjcmVhdGVkXG4gICAgICAgICAgICAgICAgYXJvdW5kIGl0LiA8c3Ryb25nPiBXZWxjb21lIHRvIEV1cmVrYSdzIFRhYmxlLCB3aGVyZSBldmVyeSB2aXNpdFxuICAgICAgICAgICAgICAgIGlzIGFuIGV4cGxvcmF0aW9uIG9mIHRhc3RlIGFuZCB0aGUgam95IG9mIGRpbmluZy48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hlbi10b1wiPlxuICAgICAgICAgICAgICAgIDxoMj5XaGVuIHRvPC9oMj48YnI+XG4gICAgICAgICAgICA8cHJlPlxuU3VuZGF5OiA4YW0gLSA4cG1cblxuTW9uZGF5OiA2YW0gLSA2cG1cblxuVHVlc2RheTogNmFtIC0gNnBtXG5cbldlZG5lc2RheTogNmFtIC0gNnBtXG5cblRodXJzZGF5OiA2YW0gLSAxMHBtXG5cbkZyaWRheTogNmFtIC0gMTBwbVxuICAgIFxuU2F0dXJkYXk6IDhhbSAtIDEwcG1cbjwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hlcmUtdG9cIj5cbiAgICAgICAgICAgICAgICA8aDI+V2hlcmU8L2gyPjxicj5cbiAgICAgICAgICAgICAgICA8cHJlPlxuNDU2IFNwaWNlIEF2ZW51ZVxuQWRkaXMgQWJhYmEsXG5HdWxlbGUgU1ViY2l0eVxuRGlzdHJpY3QgMTIzNDVcblNpZGlzdCBLaWxvIFVuaXZlcnNpdHksXG5FdGhpb3BpYVxuPC9wcmU+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOiA3MHB4OyBib3JkZXItcmFkaXVzOiA1MCVcIiBzcmM9XCIuL0Fzc2V0cy9sb2MuanBnXCIgYWx0PVwibG9jYXRpb25cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxuICAgIHJldHVybiBtYWluXG59XG5leHBvcnQgeyBob21lIH07IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnXG4gICAgbWVudS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vQXNzZXRzL2NoaWNrZW4tc3RyZWV0LndlYnBcIiBhbHQ9XCJFYXN5IENoaWNrZW4gU3RyZWV0IFRhY29zXCI+XG4gICAgICAgICAgICA8aDI+RWFzeSBDaGlja2VuIFN0cmVldCBUYWNvczwvaDI+XG4gICAgICAgICAgICA8cD5GbGF2b3JmdWwgc2Vhc29uZWQgY2hpY2tlbiwgbmVzdGxlZCBpbiBzb2Z0IHRvcnRpbGxhcywgdG9wcGVkIHdpdGggdmlicmFudCBzYWxzYSBhbmQgY2lsYW50cm8uIEEgcXVpY2sgYW5kIGRlbGlnaHRmdWwgc3RyZWV0LXN0eWxlIHRyZWF0ITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvTW91c3Nha2EuanBnXCIgYWx0PVwiTW91c3Nha2FcIj5cbiAgICAgICAgICAgIDxoMj5Nb3Vzc2FrYTwvaDI+XG4gICAgICAgICAgICA8cD5EZWxpY2lvdXMgbW91c3Nha2EgZmVhdHVyaW5nIGxheWVycyBvZiBlZ2dwbGFudCBiYWtlZCB3aXRoIHNlYXNvbmVkIGdyb3VuZCBiZWVmLCB0b3BwZWQgd2l0aCBjcmVhbXkgYsOpY2hhbWVsIHNhdWNl4oCUYSBjbGFzc2ljIEdyZWVrIGRlbGlnaHQhPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL0Fzc2V0cy9DaGlja2VuVGFnaW5lLndlYnBcIiBhbHQ9XCJDaGlja2VuIFRhZ2luZVwiPlxuICAgICAgICAgICAgPGgyPkNoaWNrZW4gVGFnaW5lPC9oMj5cbiAgICAgICAgICAgIDxwPlNhdm9yIHRoZSBleG90aWMgYmxlbmQgb2Ygc3BpY2VzIGluIG91ciBDaGlja2VuIFRhZ2luZSDigJQgdGVuZGVyIGNoaWNrZW4gc2xvdy1jb29rZWQgd2l0aCBhcHJpY290cyBhbmQgYWxtb25kcyBmb3IgYSBNb3JvY2NhbiBkZWxpZ2h0LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvUG90LVBvcmstUmFtZW4ud2VicFwiIGFsdD1cIkVhc3kgSW5zdGFudCBQb3QgUG9yayBSYW1lbiBTdGlyIEZyeVwiPlxuICAgICAgICAgICAgPGgyPkVhc3kgSW5zdGFudCBQb3QgUG9yayBSYW1lbiBTdGlyIEZyeTwvaDI+XG4gICAgICAgICAgICA8cD5TYXZvciBzaW1wbGljaXR5IHdpdGggb3VyIEVhc3kgSW5zdGFudCBQb3QgUG9yayBSYW1lbiBTdGlyIEZyeeKAlHN1Y2N1bGVudCBwb3JrLCB2aWJyYW50IHZlZ2dpZXMsIGFuZCBmbGF2b3JmdWwgbm9vZGxlcyBjcmVhdGUgYSBxdWljayBhbmQgc2F0aXNmeWluZyBkZWxpZ2h0LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvQnV0dGVybnV0LndlYnBcIiBhbHQ9XCJCdXR0ZXJudXQgU3F1YXNoIENhcHJlc2UgU2FsYWRcIj5cbiAgICAgICAgICAgIDxoMj5CdXR0ZXJudXQgU3F1YXNoIENhcHJlc2UgU2FsYWQ8L2gyPlxuICAgICAgICAgICAgPHA+RGVsaWdodCBpbiBvdXIgQnV0dGVybnV0IFNxdWFzaCBDYXByZXNlIFNhbGFkLCBhIHN5bXBob255IG9mIGZsYXZvcnMgZmVhdHVyaW5nIHN3ZWV0IGJ1dHRlcm51dCBzcXVhc2gsIGZyZXNoIHRvbWF0b2VzLCBtb3p6YXJlbGxhLCBhbmQgYmFzaWwuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL0Fzc2V0cy9mZWlqb2FkYS53ZWJwXCIgYWx0PVwiRmVpam9hZGFcIj5cbiAgICAgICAgICAgIDxoMj5GZWlqb2FkYTwvaDI+XG4gICAgICAgICAgICA8cD5TYXZvciBCcmF6aWxpYW4gRmVpam9hZGEg4oCUIGEgaGVhcnR5IGJsYWNrIGJlYW4gc3RldyB3aXRoIHNhdm9yeSBtZWF0cywgY2FwdHVyaW5nIGF1dGhlbnRpYyBmbGF2b3JzIGFuZCB0cmFkaXRpb25zLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIHJldHVybiBtZW51O1xufVxuZXhwb3J0IHtjcmVhdGVNZW51fSIsImZ1bmN0aW9uIGNyZWF0ZVJlc2VydmF0aW9uVGFiKCkge1xuICAgIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIHJlc2VydmF0aW9uLmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbidcbiAgICByZXNlcnZhdGlvbi5pbm5lckhUTUwgPSBgXG4gICAgPGgxIGlkPVwiaGVhZGluZ1wiPlJlc2VyYXZhdGlvbnM8L2gxPlxuICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2YveHFrcnp3bnpcIiBpZD1cImZvcm1cIj5cbiAgICAgICAgPGRpdiBpZD1cInBhcnQxXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjdXN0b21lci1uYW1lXCI+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiQ3VzdG9tZXIgTmFtZTogXCIgaWQ9XCJjdXN0b21lci1uYW1lXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJDdXN0b21lciBFbWFpbDogXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+UGljayBEYXRlOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJUaW1lIFBpY2tlZDogXCIgaWQ9XCJkYXRlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImd1ZXN0XCI+Tm9fIG9mIEd1ZXN0czogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJndWVzdCBub19cIiBpZD1cImd1ZXN0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGRpdiAgaWQ9XCJwYXJ0MlwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxsYWJlbCBmb3I9XCJcIj4gU3BlY2lhbCBSZXF1ZXN0czogPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIlNwZWNpYWwgUmVxdWVzdHM6IFwiIGNvbHM9XCIyNVwiIHJvd3M9XCI3XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGltZXNcIj5TZWUgQXZhaWxhYmxlIFRpbWVzOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwidGltZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TdW5kYXk6IDhhbSAtIDhwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPk1vbmRheTogNmFtIC0gNnBtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+VHVlc2RheTogNmFtIC0gNnBtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+V2VkbmVzZGF5OiA2YW0gLSA2cG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5UaHVyc2RheTogNmFtIC0gMTBwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPkZyaWRheTogNmFtIC0gMTBwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlNhdHVyZGF5OiA4YW0gLSAxMHBtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+PGJyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgYFxuXG4gICAgcmV0dXJuIHJlc2VydmF0aW9uO1xufVxuZXhwb3J0IHsgY3JlYXRlUmVzZXJ2YXRpb25UYWIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVSZXNlcnZhdGlvblRhYiB9IGZyb20gXCIuL3Jlc2VydmF0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFRhYiB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUludGlhbExvYWRQYWdlKCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDE+RXVyZWthIFJlc3RhdXJhbnQ8L2gxPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdlwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdi1pdGVtc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJob21lXCI+SG9tZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cIm1lbnVcIj5NZW51PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwicmVzZXJ2YXRpb25zXCI+UmVzZXJhdmF0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cImNvbnRhY3RcIj5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPVwicGxhY2Vob2xkZXJcIj48ZGl2PlxuICAgIGA7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2Vob2xkZXInKTtcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChob21lKCkpO1xuICAgIFxuLy8gZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+PC9wPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vemFreW1ha3k4L0V1cmVrYS1SZXN0YXVyYW50XCI+RGV2ZWxvcGVyOiBaZWthcnlhcyBNLjwvYT48L3A+XG4gICAgYFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxufVxuXG5jcmVhdGVJbnRpYWxMb2FkUGFnZSgpXG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5jb25zdCByZXNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2YXRpb25zJyk7XG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbmhvbWVUYWIuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjA2LCAxOTAsIDExKSdcblxuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZChuYXZJdGVtKSB7XG4gICAgbmF2SXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyMDYsIDE5MCwgMTEpJ1xufVxuZnVuY3Rpb24gcmVtb3ZlQmFja2dyb3VuZChvbmUsIHR3bywgdGhyZWUpIHtcbiAgICBvbmUuc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJ1xuICAgIHR3by5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnXG4gICAgdGhyZWUuc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJ1xufVxuLy8gZXZlbnQgbGlzdGVuZXJzXG5cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGhvbWUoKSlcbiAgICBjcmVhdGVCYWNrZ3JvdW5kKGhvbWVUYWIpXG4gICAgcmVtb3ZlQmFja2dyb3VuZChtZW51VGFiLCByZXNUYWIsIGNvbnRhY3RUYWIpXG59KVxuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpXG4gICAgY3JlYXRlQmFja2dyb3VuZChtZW51VGFiKVxuICAgIHJlbW92ZUJhY2tncm91bmQoaG9tZVRhYiwgcmVzVGFiLCBjb250YWN0VGFiKVxufSlcblxucmVzVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChjcmVhdGVSZXNlcnZhdGlvblRhYigpKVxuICAgIGNyZWF0ZUJhY2tncm91bmQocmVzVGFiKVxuICAgIHJlbW92ZUJhY2tncm91bmQobWVudVRhYiwgaG9tZVRhYiwgY29udGFjdFRhYilcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJylcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PnthbGVydCgnQnJhdm8hIFlvdXIgcmVzZXJ2YXRpb24gaXMgc2F2ZWQhJyk7fSlcbn0pXG5cbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RUYWIoKSlcbiAgICBjcmVhdGVCYWNrZ3JvdW5kKGNvbnRhY3RUYWIpXG4gICAgcmVtb3ZlQmFja2dyb3VuZChtZW51VGFiLCByZXNUYWIsIGhvbWVUYWIpXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==