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
    <form action="#" id="form">
        <div id="part1">
            <div>
                <label for="customer-name">Name: </label>
                <input type="text" name="customer-name" id="customer-name">
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="email" name="email" id="email">
            </div>
            <div>
                <label for="date">Pick Date: </label>
                <input type="date" name="time" id="date">
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
                <textarea name="request" cols="25" rows="7"></textarea>
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
    submitBtn.addEventListener('click', (e)=>{alert('Bravo! Your reservation is saved!'); e.preventDefault()})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ2hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ007QUFDa0I7QUFDVDs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUFJO0FBQ2hDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVU7QUFDdEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDRCQUE0QixtRUFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDRDQUE0QyxtQkFBbUI7QUFDN0csQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsNEJBQTRCLDBEQUFnQjtBQUM1QztBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvLi9zcmMvcmVzZXJ2YXRpb25zLmpzIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ldXJla2EtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V1cmVrYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXVyZWthLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFRhYigpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb24taW5mb1wiPlxuICAgICAgICA8YWRkcmVzcyBjbGFzcz1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgIPCfj6AgMTIzIE1haW4gU3RyZWV0LCBTaWRpc3QgS2lsbyA8YnI+XG4gICAgICAgICAgICDwn5OeICsyNTE5MTIzNDU2MyA8YnI+XG4gICAgICAgICAgICDwn5OqIGZha2VlbWFpbEBnbWFpbC5jb21cbiAgICAgICAgPC9hZGRyZXNzPlxuICAgICAgICA8aW1nIHNyYz1cIi4vQXNzZXRzL21hcGxvYy5wbmdcIiBhbHQ9XCJsb2NhdGlvbiBvbiBtYXBcIiBzdHlsZT1cIndpZHRoOiA4MCVcIj5cbiAgICAgICAgPGRpdiBpZD1cIm5ld3NsZXR0ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ5b3VyIGVtYWlsIGZvciBuZXdzbGV0dGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiU3Vic2NyaWJlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcHJvZmlsZS5waHA/aWQ9NjE1NTMzMDU2ODAyMjBcIj48aW1nIHNyYz1cIi4vQXNzZXRzL2ZiLnBuZ1wiIGFsdD1cImZhY2Vib29rIGxpbmtcIj48L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS96ZWthcnlhc21la3VhbmluaXQvXCI+PGltZyBzcmM9XCIuL0Fzc2V0cy9pbnN0YS5wbmdcIiBhbHQ9XCJpbnN0YWdyYW0gbGlua1wiPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3pfemVrYXJ5YXNcIj48aW1nIHNyYz1cIi4vQXNzZXRzL3R3aXRlci5wbmdcIiBhbHQ9XCJ0d2l0dGVyIGxpbmtcIj48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICByZXR1cm4gY29udGFjdFxufVxuZXhwb3J0IHsgY3JlYXRlQ29udGFjdFRhYiB9IiwiZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIndlbGNvbWVcIj5cbiAgICAgICAgICAgIDxoMj5EaXNjb3ZlciBEZWxpZ2h0IGF0IEV1cmVrYSdzIHRhYmxlPC9oMj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VcIj5cbiAgICAgICAgICAgICAgICA8aDI+V2U8L2gyPjxicj5cbiAgICAgICAgICAgICAgICA8cD4gV2Ugb2ZmZXIgc2Vuc2Ugb2YgZmFtaWx5LiBXZSBoYXZlIGEgYmVsaWVmIHRoYXQgZ29vZCBtZWFsc1xuICAgICAgICAgICAgICAgIGFyZSBub3QganVzdCBhYm91dCB3aGF0J3Mgb24gdGhlIHBsYXRlIGJ1dCB0aGUgbWVtb3JpZXMgY3JlYXRlZFxuICAgICAgICAgICAgICAgIGFyb3VuZCBpdC4gPHN0cm9uZz4gV2VsY29tZSB0byBFdXJla2EncyBUYWJsZSwgd2hlcmUgZXZlcnkgdmlzaXRcbiAgICAgICAgICAgICAgICBpcyBhbiBleHBsb3JhdGlvbiBvZiB0YXN0ZSBhbmQgdGhlIGpveSBvZiBkaW5pbmcuPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndoZW4tdG9cIj5cbiAgICAgICAgICAgICAgICA8aDI+V2hlbiB0bzwvaDI+PGJyPlxuICAgICAgICAgICAgPHByZT5cblN1bmRheTogOGFtIC0gOHBtXG5cbk1vbmRheTogNmFtIC0gNnBtXG5cblR1ZXNkYXk6IDZhbSAtIDZwbVxuXG5XZWRuZXNkYXk6IDZhbSAtIDZwbVxuXG5UaHVyc2RheTogNmFtIC0gMTBwbVxuXG5GcmlkYXk6IDZhbSAtIDEwcG1cbiAgICBcblNhdHVyZGF5OiA4YW0gLSAxMHBtXG48L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndoZXJlLXRvXCI+XG4gICAgICAgICAgICAgICAgPGgyPldoZXJlPC9oMj48YnI+XG4gICAgICAgICAgICAgICAgPHByZT5cbjQ1NiBTcGljZSBBdmVudWVcbkFkZGlzIEFiYWJhLFxuR3VsZWxlIFNVYmNpdHlcbkRpc3RyaWN0IDEyMzQ1XG5TaWRpc3QgS2lsbyBVbml2ZXJzaXR5LFxuRXRoaW9waWFcbjwvcHJlPlxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDogNzBweDsgYm9yZGVyLXJhZGl1czogNTAlXCIgc3JjPVwiLi9Bc3NldHMvbG9jLmpwZ1wiIGFsdD1cImxvY2F0aW9uXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbiAgICByZXR1cm4gbWFpblxufVxuZXhwb3J0IHsgaG9tZSB9OyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9ICdtZW51J1xuICAgIG1lbnUuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL0Fzc2V0cy9jaGlja2VuLXN0cmVldC53ZWJwXCIgYWx0PVwiRWFzeSBDaGlja2VuIFN0cmVldCBUYWNvc1wiPlxuICAgICAgICAgICAgPGgyPkVhc3kgQ2hpY2tlbiBTdHJlZXQgVGFjb3M8L2gyPlxuICAgICAgICAgICAgPHA+Rmxhdm9yZnVsIHNlYXNvbmVkIGNoaWNrZW4sIG5lc3RsZWQgaW4gc29mdCB0b3J0aWxsYXMsIHRvcHBlZCB3aXRoIHZpYnJhbnQgc2Fsc2EgYW5kIGNpbGFudHJvLiBBIHF1aWNrIGFuZCBkZWxpZ2h0ZnVsIHN0cmVldC1zdHlsZSB0cmVhdCE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vQXNzZXRzL01vdXNzYWthLmpwZ1wiIGFsdD1cIk1vdXNzYWthXCI+XG4gICAgICAgICAgICA8aDI+TW91c3Nha2E8L2gyPlxuICAgICAgICAgICAgPHA+RGVsaWNpb3VzIG1vdXNzYWthIGZlYXR1cmluZyBsYXllcnMgb2YgZWdncGxhbnQgYmFrZWQgd2l0aCBzZWFzb25lZCBncm91bmQgYmVlZiwgdG9wcGVkIHdpdGggY3JlYW15IGLDqWNoYW1lbCBzYXVjZeKAlGEgY2xhc3NpYyBHcmVlayBkZWxpZ2h0ITwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvQ2hpY2tlblRhZ2luZS53ZWJwXCIgYWx0PVwiQ2hpY2tlbiBUYWdpbmVcIj5cbiAgICAgICAgICAgIDxoMj5DaGlja2VuIFRhZ2luZTwvaDI+XG4gICAgICAgICAgICA8cD5TYXZvciB0aGUgZXhvdGljIGJsZW5kIG9mIHNwaWNlcyBpbiBvdXIgQ2hpY2tlbiBUYWdpbmUg4oCUIHRlbmRlciBjaGlja2VuIHNsb3ctY29va2VkIHdpdGggYXByaWNvdHMgYW5kIGFsbW9uZHMgZm9yIGEgTW9yb2NjYW4gZGVsaWdodC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vQXNzZXRzL1BvdC1Qb3JrLVJhbWVuLndlYnBcIiBhbHQ9XCJFYXN5IEluc3RhbnQgUG90IFBvcmsgUmFtZW4gU3RpciBGcnlcIj5cbiAgICAgICAgICAgIDxoMj5FYXN5IEluc3RhbnQgUG90IFBvcmsgUmFtZW4gU3RpciBGcnk8L2gyPlxuICAgICAgICAgICAgPHA+U2F2b3Igc2ltcGxpY2l0eSB3aXRoIG91ciBFYXN5IEluc3RhbnQgUG90IFBvcmsgUmFtZW4gU3RpciBGcnnigJRzdWNjdWxlbnQgcG9yaywgdmlicmFudCB2ZWdnaWVzLCBhbmQgZmxhdm9yZnVsIG5vb2RsZXMgY3JlYXRlIGEgcXVpY2sgYW5kIHNhdGlzZnlpbmcgZGVsaWdodC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vQXNzZXRzL0J1dHRlcm51dC53ZWJwXCIgYWx0PVwiQnV0dGVybnV0IFNxdWFzaCBDYXByZXNlIFNhbGFkXCI+XG4gICAgICAgICAgICA8aDI+QnV0dGVybnV0IFNxdWFzaCBDYXByZXNlIFNhbGFkPC9oMj5cbiAgICAgICAgICAgIDxwPkRlbGlnaHQgaW4gb3VyIEJ1dHRlcm51dCBTcXVhc2ggQ2FwcmVzZSBTYWxhZCwgYSBzeW1waG9ueSBvZiBmbGF2b3JzIGZlYXR1cmluZyBzd2VldCBidXR0ZXJudXQgc3F1YXNoLCBmcmVzaCB0b21hdG9lcywgbW96emFyZWxsYSwgYW5kIGJhc2lsLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9Bc3NldHMvZmVpam9hZGEud2VicFwiIGFsdD1cIkZlaWpvYWRhXCI+XG4gICAgICAgICAgICA8aDI+RmVpam9hZGE8L2gyPlxuICAgICAgICAgICAgPHA+U2F2b3IgQnJhemlsaWFuIEZlaWpvYWRhIOKAlCBhIGhlYXJ0eSBibGFjayBiZWFuIHN0ZXcgd2l0aCBzYXZvcnkgbWVhdHMsIGNhcHR1cmluZyBhdXRoZW50aWMgZmxhdm9ycyBhbmQgdHJhZGl0aW9ucy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICByZXR1cm4gbWVudTtcbn1cbmV4cG9ydCB7Y3JlYXRlTWVudX0iLCJmdW5jdGlvbiBjcmVhdGVSZXNlcnZhdGlvblRhYigpIHtcbiAgICBjb25zdCByZXNlcnZhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICByZXNlcnZhdGlvbi5jbGFzc05hbWUgPSAncmVzZXJ2YXRpb24nXG4gICAgcmVzZXJ2YXRpb24uaW5uZXJIVE1MID0gYFxuICAgIDxoMSBpZD1cImhlYWRpbmdcIj5SZXNlcmF2YXRpb25zPC9oMT5cbiAgICA8Zm9ybSBhY3Rpb249XCIjXCIgaWQ9XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJwYXJ0MVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY3VzdG9tZXItbmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN1c3RvbWVyLW5hbWVcIiBpZD1cImN1c3RvbWVyLW5hbWVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+UGljayBEYXRlOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJ0aW1lXCIgaWQ9XCJkYXRlXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImd1ZXN0XCI+Tm9fIG9mIEd1ZXN0czogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJndWVzdCBub19cIiBpZD1cImd1ZXN0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj5cbiAgICAgICAgPGRpdiAgaWQ9XCJwYXJ0MlwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxsYWJlbCBmb3I9XCJcIj4gU3BlY2lhbCBSZXF1ZXN0czogPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInJlcXVlc3RcIiBjb2xzPVwiMjVcIiByb3dzPVwiN1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpbWVzXCI+U2VlIEF2YWlsYWJsZSBUaW1lczogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInRpbWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+U3VuZGF5OiA4YW0gLSA4cG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5Nb25kYXk6IDZhbSAtIDZwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPlR1ZXNkYXk6IDZhbSAtIDZwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkPldlZG5lc2RheTogNmFtIC0gNnBtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+VGh1cnNkYXk6IDZhbSAtIDEwcG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5GcmlkYXk6IDZhbSAtIDEwcG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZD5TYXR1cmRheTogOGFtIC0gMTBwbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0Pjxicj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIGBcblxuICAgIHJldHVybiByZXNlcnZhdGlvbjtcbn1cbmV4cG9ydCB7IGNyZWF0ZVJlc2VydmF0aW9uVGFiIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVzZXJ2YXRpb25UYWIgfSBmcm9tIFwiLi9yZXNlcnZhdGlvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RUYWIgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVJbnRpYWxMb2FkUGFnZSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGgxPkV1cmVrYSBSZXN0YXVyYW50PC9oMT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwiaG9tZVwiPkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJtZW51XCI+TWVudTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD1cInJlc2VydmF0aW9uc1wiPlJlc2VyYXZhdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBpZD1cInBsYWNlaG9sZGVyXCI+PGRpdj5cbiAgICBgO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlaG9sZGVyJyk7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbiAgICBcbi8vIGZvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxwPjwvcD48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3pha3ltYWt5OC9FdXJla2EtUmVzdGF1cmFudFwiPkRldmVsb3BlcjogWmVrYXJ5YXMgTS48L2E+PC9wPlxuICAgIGBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcilcbn1cblxuY3JlYXRlSW50aWFsTG9hZFBhZ2UoKVxuXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuY29uc3QgcmVzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmF0aW9ucycpO1xuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5ob21lVGFiLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDIwNiwgMTkwLCAxMSknXG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmQobmF2SXRlbSkge1xuICAgIG5hdkl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjA2LCAxOTAsIDExKSdcbn1cbmZ1bmN0aW9uIHJlbW92ZUJhY2tncm91bmQob25lLCB0d28sIHRocmVlKSB7XG4gICAgb25lLnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSdcbiAgICB0d28uc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJ1xuICAgIHRocmVlLnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSdcbn1cbi8vIGV2ZW50IGxpc3RlbmVyc1xuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnJztcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChob21lKCkpXG4gICAgY3JlYXRlQmFja2dyb3VuZChob21lVGFiKVxuICAgIHJlbW92ZUJhY2tncm91bmQobWVudVRhYiwgcmVzVGFiLCBjb250YWN0VGFiKVxufSlcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKVxuICAgIGNyZWF0ZUJhY2tncm91bmQobWVudVRhYilcbiAgICByZW1vdmVCYWNrZ3JvdW5kKGhvbWVUYWIsIHJlc1RhYiwgY29udGFjdFRhYilcbn0pXG5cbnJlc1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVzZXJ2YXRpb25UYWIoKSlcbiAgICBjcmVhdGVCYWNrZ3JvdW5kKHJlc1RhYilcbiAgICByZW1vdmVCYWNrZ3JvdW5kKG1lbnVUYWIsIGhvbWVUYWIsIGNvbnRhY3RUYWIpXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57YWxlcnQoJ0JyYXZvISBZb3VyIHJlc2VydmF0aW9uIGlzIHNhdmVkIScpOyBlLnByZXZlbnREZWZhdWx0KCl9KVxufSlcblxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFRhYigpKVxuICAgIGNyZWF0ZUJhY2tncm91bmQoY29udGFjdFRhYilcbiAgICByZW1vdmVCYWNrZ3JvdW5kKG1lbnVUYWIsIHJlc1RhYiwgaG9tZVRhYilcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9