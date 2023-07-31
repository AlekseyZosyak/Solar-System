import planetRoad from "./road-planet";

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















export default createCardPlanet;