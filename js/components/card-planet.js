import planetRoad from "./road-planet";

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





export default createCardPlanet;