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



class CardPlanet {
    constructor(name, classList, href, temperature, distance, moons, radius, info) {
        this.name = name;
        this.classList = classList;
        this.href = href;
        this.temperature = temperature;
        this.distance = distance;
        this.moons = moons;
        this.radius = radius;
        this.info = info;
    }

    renderCard() {
        
        const element = document.createElement('div');
        element.classList.add(this.classList)
        element.innerHTML = `
            <button class="card__button" data-btn-previous><</button>
                <div class="planets-block">
                    <div class="planets__icon">
                        <svg class="icon">
                            <use href="./images/planet/symbol-defs.svg#icon-${this.href}">
                            </use>
                        </svg>
                    </div>
                        <button data-btn-close>X</button>
                    <div class="text">
                        <h2>${this.name}</h2>
                        <div>Surface Temperature: ${this.temperature}°C</div>
                        <div>Radius: ${this.radius} km</div>
                        <div>Distance to Sun: ${this.distance} km</div>
                        <div>Moons: ${this.moons} </div>
                        <div>${this.info}</div>
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
        const item = document.querySelector('.super');
        console.log(121);
        item.classList.remove('blur');
    }
}


function createCardPlanet(name, id, href, temperature, distance, moons, radius, info) {
    this.name = name;
    this.id = id;
    this.href = href;
    this.temperature = temperature;
    this.distance = distance;
    this.moons = moons;
    this.radius = radius;
    this.info = info;

    const wrapp = document.querySelector('.planets');
    wrapp.addEventListener('click', (event) => {
        if (event.target && event.target.id === `${this.id}`) {
            const planet = new CardPlanet(`${this.name}`, 'card', this.href, this.temperature, this.distance, this.moons, this.radius, this.info);
            
            planet.renderCard();
            planet.delete();
        }
    });
}















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardPlanet);

/***/ }),

/***/ "./js/components/data.js":
/*!*******************************!*\
  !*** ./js/components/data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = [
    {
        name: "Mercury",
        id: "mercury",
        href: "Mercury",
        temperature: "-180 to 430",
        distance: "57.910.000",
        moons: "0",
        radius: "2.440",
        info: "Mercury is closest to the sun. But it’s so hard to study because it’s closest to the sun. This is because it’s so hot. For example, the side facing the sun reaches temperatures of 430°C. Mercury is covered with impact craters. Astronomers name craters on [planet Mercury](https://earthhow.com/planet-mercury-facts/) with the names of famous musicians, artists, and writers like Beethoven, Shakespeare, and van Gogh. It’s tiny with a radius of only 2,440 km making it the smallest planet in the solar system. If you combined about 18 Mercury-sized planets, it would be the equivalent size to Earth. Mercury has a comet-like tail that extends as far as 2.5 million kilometers long. Scientists have figured out that it’s sodium sputtering from its surface. One day on Mercury is 59 Earth days. Because Mercury was formed close to the sun which is hot, it’s mostly iron."
    },
    {
        name: "Venus",
        id: "venus",
        href: "Venus",
        temperature: "460",
        distance: "108.200.000",
        moons: "0",
        radius: "6.052",
        info: "Venus is the Roman Goddess next to Mercury. Because of its glowing appearance (surface temperature of 460°C), the Romans named Venus after the Roman Goddess of Love. Astronomers name most Venusian mountains and volcanoes as female figures including Cleopatra, Mona Lisa, and Curie. Astronomers call [planet Venus](https://earthhow.com/planet-venus-facts/) “Earth’s twin” because of similarities in size and gravity. Fascinatingly, they’re also made of similar material on the surface. Despite all the positives, we have little desire to visit Venus. First, it’s scorching hot. Second, atmospheric pressure is intense. Lastly, it rains sulfuric acid. But the closest we’ve ever been to Venus were simple flybys, orbits, and landings on the Venusian planet. No one has ever stepped foot on its surface."
    },
    {
        name: "Earth",
        id: "earth",
        href: "Earth",
        temperature: "-88 to 58",
        distance: "149.600.000",
        moons: "1",
        radius: "6,371",
        info: "Earth needs no introduction. Because Earth receives a hearty portion of the sun’s rays and its liquid water, it’s the reason why we exist today. Earth started like a red marble and fiery hot. 4.5 billion years ago, we were blasted in a violent time during a [heavy bombardment stage](https://earthhow.com/late-heavy-bombardment-stage/). But over lots and lots of time, Earth cooled down. It was [plate tectonics](https://earthhow.com/plate-tectonics-types-divergent-convergent-transform-plates/) that forged the planet. Earth was one [supercontinent known as Pangaea](https://earthhow.com/pangaea-supercontinent/). Actually, multiple times through the [supercontinent cycle](https://earthhow.com/supercontinent-cycle/). Then, plate tectonics tore land apart again. Gradually, continents rifted away as part of [continental drift](https://earthhow.com/continental-drift-plate-tectonics/). Life probably [originated in water](https://earthhow.com/origin-of-water-comets-volcanoes-outgassing/). Then, it evolved from oceans to land. And today, we struggle with climate change and overpopulation. There’s so much to learn about our planet and this [list of 100 Earth facts](https://earthhow.com/earth-facts/) just scratches the surface."
    },
    {
        name: "Mars",
        id: "mars",
        href: "Mars",
        temperature: "-125 to 20",
        distance: "227.900.000",
        moons: "2",
        radius: "3.390",
        info: "Mars is the red planet next to Earth. It’s been one of the greatest frontiers for discovery. Since the early 1960s, spacecrafts have whizzed by and even [landed on Mars](https://mars.nasa.gov/) opening our curiosity. Mars has Earth-like environments like dust storms, deserts, sand dunes, and ice caps. But much of [planet Mars](https://earthhow.com/planet-mars-facts/) is blanketed by red dust so they share little resemblance. Similar to Earth, Mars has a [summer, spring, autumn, and winter](https://earthhow.com/why-do-we-have-seasons/). This is because Mars rotates on a tilted axis. While [Earth’s inclination to equator is 23.5°](https://earthhow.com/earth-tilt/), Mars is about 25.1°C. The most exciting fact about Mars is that it may have liquid water. At its south pole, a permanently ice-filled crater is the greatest evidence that liquid water lies beneath the planet."
    },
    {
        name: "Jupiter",
        id: "jupiter",
        href: "Jupiter",
        temperature: "-145",
        distance: "778,500,000",
        moons: "79",
        radius: "69.911",
        info: "Jupiter is colossal in size. It's so big that if you combined all the other planets, moons, and asteroids in our solar system in a ball, it still wouldn't be half the size of Jupiter. At about 1000 times larger in volume compared to Earth, [planet Jupiter](https://earthhow.com/planet-jupiter-facts/) is the largest planet in our solar system. In fact, if Jupiter was 50 times larger than it is now, it would be a star on its own. Because of its tremendous size, it's contending with the sun in a so-called gravity tug-of-war. It puts Mercury, Venus, Mars, Earth and an asteroid belt smack dab in the middle. Interestingly, Jupiter has a permanent cyclone that's been there ever since we've observed it. It also has the biggest Aurora Borealis and 79 moons. Four of Jupiter's large moons are particularly exciting because of their interesting geology. These moons are Ganymede, Callisto, Io, and Europa."
    },
    {
        name: "Saturn",
        id: "saturn",
        href: "Saturn",
        temperature: "-178",
        distance: "1.434.000.000",
        moons: "53",
        radius: "58.232",
        info: "The most prominent feature of Saturn is its iconic rings. It’s believed that its rings are made of liquid ice which formed from remnants of comets, asteroids, and other space debris. There are 62 moons that orbit [planet Saturn](https://earthhow.com/planet-saturn-facts/). These moons are commonly named after Greek or Roman gods, such as Titan. Saturn’s atmosphere is filled with methane and ammonia. The ammonia crystals on Saturn swirl around the planet coloring it with a gold tint. Even though Saturn is the second-largest planet, it is the lightest planet in the solar system. If you were to put it into a giant bathtub."
    },
    {
        name: "Uranus",
        id: "uranus",
        href: "Uranus",
        temperature: "-224",
        distance: "2.871.000.000",
        moons: "27",
        radius: "25.362",
        info: "Uranus is the coldest in the solar system. Other than Voyager 2’s flyby in 1986, what we know of Uranus is all by telescope. From these photos, we learned that [planet Uranus](https://earthhow.com/planet-uranus-facts/) has 9 bright rings. We also learned that it has an unusual tilt at 98 degrees on its side. Because of its unusual tilt, one of its hemispheres is pointing at the sun. This means that seasons are roughly 21 years long. Uranus has a bluish glow because of methane gas in its atmosphere. Methane gas is known to absorb red light and strongly reflect blue. Uranus has 27 moons and astronomers name them based on characters from William Shakespeare and Alexander Pope. For example, its 5 major moons include Umbriel, Miranda, Ariel, Titania, and Oberon."
    },
    {
        name: "Neptune",
        id: "neptune",
        href: "Neptune",
        temperature: "-231",
        distance: "4.498.000.000",
        moons: "14",
        radius: "1.737",
        info: "Neptune is about 4.495 billion kilometers from the sun making it the farthest planet from the sun. This is about 30 astronomical units (AU) away from Earth. Neptune has a tilted axis at about 29 degrees. Because of its tilt, it has seasons like Earth. Further to this, [planet Neptune](https://earthhow.com/planet-neptune-facts/) has the strongest winds of all other planets. Neptune resembles Uranus with a similar size, composition, and temperature. Interestingly, Pluto is part of Neptune’s orbit. Not so long ago, Pluto was considered a planet on its own. But now Pluto has been demoted to a dwarf planet because we’ve learned more about planet Neptune’s orbit."
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


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

/***/ }),

/***/ "./js/data-processing.js":
/*!*******************************!*\
  !*** ./js/data-processing.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_card_planet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card-planet */ "./js/components/card-planet.js");


function createCardPlanets(arry) {
    arry.forEach(element => {
        new _components_card_planet__WEBPACK_IMPORTED_MODULE_0__["default"](element.name, element.id, element.href, element.temperature, element.distance, element.moons, element.radius, element.info)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardPlanets);

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
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/data */ "./js/components/data.js");
/* harmony import */ var _data_processing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-processing */ "./js/data-processing.js");






(0,_components_star__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_components_road_planet__WEBPACK_IMPORTED_MODULE_1__["default"])(8);
(0,_data_processing__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_data__WEBPACK_IMPORTED_MODULE_2__["default"]);


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map