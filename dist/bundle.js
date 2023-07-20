/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/card-planet.js":
/*!**************************************!*\
  !*** ./js/components/card-planet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _road_planet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./road-planet */ "./js/components/road-planet.js");


class CardPlanet {
    constructor(name, classList, href) {
        this.name = name;
        this.classList = classList;
        this.href = href;
    }

    renderCard() {
        const element = document.createElement('div');
        element.classList.add(this.classList)
        element.innerHTML = `
            <button class="card__button" data-btn-previous><</button>
                <div class="planets-block">
                    <div class="planets__icon">
                        <svg class="icon">
                            <use href="${this.href}">
                            </use>
                        </svg>
                    </div>
                        <button data-btn-close>X</button>
                    <div class="text">
                        <h2>${this.name}</h2>
                        <div>Surface Temperature: 460°C</div>
                        <div>Radius: 6,052 km</div>
                        <div>Distance to Sun: 108,200,000 km</div>
                        <div>Moons: 0</div>
                    </div>
                </div>  
            <button class="card__button" data-btn-next>></button>`
        document.body.append(element);

        let item = document.querySelector('.super');
        item.classList.add('blur');
    }

    delete() {
        const btn = document.querySelector('button[data-btn-close]');
        btn.addEventListener('click', () => {
            const element = document.querySelector('.card');
            element.remove();
            const item = document.querySelector('.super');
            item.classList.remove('blur');
        })
    }

    tabsControl() {
        // const cardBtnNext = document.querySelector('button[data-btn-next]');
        // const cardBtnPrevious = document.querySelector('button[data-btn-previose]');
        const item = document.querySelector('.super');
        console.log(121);
        item.classList.remove('blur');
    }
}


function createCardPlanet(name, id, href) {
    this.name = name;
    this.id = id;
    this.href = href;

    const wrapp = document.querySelector('.planets');
    wrapp.addEventListener('click', (event) => {
        if (event.target && event.target.id === `${this.id}`) {
            const planet = new CardPlanet(`${this.name}`, 'card', `${this.href}`);
            planet.renderCard('mars');
            planet.delete();
        }
    });
}












// function createCardPlanet() {

//     const wrapp = document.querySelector('.planets');
//     wrapp.addEventListener('click', (event) => {

//         if (event.target && event.target.id === 'mercury') {
//             const mercury = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Mercury");
//             mercury.renderCard();
//             mercury.delete();
//         }
//         if (event.target && event.target.id === 'venus') {
//             const venus = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Venus");
//             venus.renderCard();
//             venus.delete();
//         }
//         if (event.target && event.target.id === 'earch') {
//             const earch = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Earch");
//             earch.renderCard();
//             earch.delete();
//         }
//         if (event.target && event.target.id === 'mars') {
//             const mars = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Mars");
//             mars.renderCard();
//             mars.delete();
//         } 
//         if (event.target && event.target.id === 'jupiter') {
//             const jupiter = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Jupiter");
//             jupiter.renderCard();
//             jupiter.delete();
//         } 
//         if (event.target && event.target.id === 'saturn') {
//             const saturn = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Saturn");
//             saturn.renderCard();
//             saturn.delete();
//         } 
//         if (event.target && event.target.id === 'uranus') {
//             const uranus = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Uranus");
//             uranus.renderCard();
//             uranus.delete();
//         } 
//         if (event.target && event.target.id === 'neptune') {
//             const neptune = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Neptune");
//             neptune.renderCard();
//             neptune.delete();
//         }
//     });




// const mercury = document.querySelector('.planet__mercury');
// mercury.addEventListener('click', () => {
//     const mercury = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Mercury");
//     mercury.renderCard();
//     mercury.delete();
// });

// const venus = document.querySelector('.planet__venus');
// venus.addEventListener('click', () => {
//     const venus = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Venus");
//     venus.renderCard();
//     venus.delete();
// });

// const earch = document.querySelector('.planet__earch');
// earch.addEventListener('click', () => {
//     const earch = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Earch");
//     earch.renderCard();
//     earch.delete();
// });

// const mars = document.querySelector('.planet__mars');
// mars.addEventListener('click', () => {
//     const mars = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Mars");
//     mars.renderCard();
//     mars.delete();
// });

// const jupiter = document.querySelector('.planet__jupiter');
// jupiter.addEventListener('click', () => {
//     const jupiter = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Jupiter");
//     jupiter.renderCard();
//     jupiter.delete();
// });

// const saturn = document.querySelector('.planet__saturn');
// saturn.addEventListener('click', () => {
//     const saturn = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Saturn");
//     saturn.renderCard();
//     saturn.delete();
// });

// const uranus = document.querySelector('.planet__uranus');
// uranus.addEventListener('click', () => {
//     const uranus = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Uranus");
//     uranus.renderCard();
//     uranus.delete();
// });

// const neptune = document.querySelector('.planet__neptune');
// neptune.addEventListener('click', () => {
//     const neptune = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Neptune");
//     neptune.renderCard();
//     neptune.delete();
// });

// const sun = document.querySelector('.planet__sun');
// sun.addEventListener('click', () => {
//     const sun = new CardPlanet('card', "./images/planet/symbol-defs.svg#icon-Sun");
//     sun.renderCard();
//     sun.delete();
// });





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardPlanet);

/***/ }),

/***/ "./js/components/road-planet.js":
/*!**************************************!*\
  !*** ./js/components/road-planet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function planetRoad(quantity) {

    const body = document.querySelector('.planets');
    let width = 400;
    let height = 400;

    for (let i = 0; i < quantity; i++) {

        const planetRoad = document.createElement('div');
        planetRoad.classList = 'cross';
        if (i < 1) {
            width += 100;
            height += 100;
        } else if (i < 2) {
            width += 150;
            height += 150;
        } else if (i < 4) {
            width += 200;
            height += 200;
        } else if (i < 7) {
            width += 300;
            height += 300;
        } else if (i <= 8) {
            width += 300;
            height += 300;
        }
        planetRoad.style.width = `${width}px`;
        planetRoad.style.height = `${height}px`;
        body.append(planetRoad);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (planetRoad);


/***/ }),

/***/ "./js/components/star.js":
/*!*******************************!*\
  !*** ./js/components/star.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Star {
    constructor(quantity, classList, sizeMin, sizeMax) {
        this.quantity = quantity;
        this.classList = classList;
        this.sizeMin = sizeMin;
        this.sizeMax = sizeMax;
    }
    render() {
        const body = document.querySelector('.super');
        
        for (let i = 0; i < this.quantity; ++i) {
            const star = document.createElement('div');
                star.classList = this.classList;
                star.style.left = `${Math.random() * body.offsetWidth}px`;
                star.style.top = `${Math.random() * body.offsetHeight}px`;
            const starSize = `${(this.sizeMin + Math.ceil(this.sizeMax * Math.random()))}px`;
                star.style.width = starSize;
                star.style.height = starSize;
                body.append(star);
        }
    }
}

function createStars() {
    const starSmoll = new Star(250, `${'star'} ${'star__smoll'}`, 0.1, 0.1)
    starSmoll.render();
    const starMid = new Star(25, `${'star'} ${'star__big'}`, 1, 2)
    starMid.render();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStars);

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
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/star */ "./js/components/star.js");
/* harmony import */ var _components_road_planet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/road-planet */ "./js/components/road-planet.js");
/* harmony import */ var _components_card_planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card-planet */ "./js/components/card-planet.js");




(0,_components_star__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_components_road_planet__WEBPACK_IMPORTED_MODULE_1__["default"])(8);

new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('mercury', 'mercury', './images/planet/symbol-defs.svg#icon-Mercury');
new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('venus', 'venus', './images/planet/symbol-defs.svg#icon-Venus');
new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('earch', 'earch', './images/planet/symbol-defs.svg#icon-Earch');
new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('mars', './images/planet/symbol-defs.svg#icon-Mars');
new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('jupiter', './images/planet/symbol-defs.svg#icon-Jupiter');
new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('saturn', './images/planet/symbol-defs.svg#icon-Saturn');
new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('uranus', './images/planet/symbol-defs.svg#icon-Uranus');
new _components_card_planet__WEBPACK_IMPORTED_MODULE_2__["default"]('neptune', './images/planet/symbol-defs.svg#icon-Neptune');













})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map