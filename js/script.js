import createStars from "./components/star";
import planetRoad from "./components/road-planet";
import createCardPlanet from "./components/card-planet";

createStars();
planetRoad(8);
createCardPlanet();






/// Planets block --->


// class CardPlanet {
//     constructor(classList, href,) {
//         this.classList = classList;
//         this.href = href;
//     }

//     renderCard() {
//         const element = document.createElement('div');
//         element.classList.add(this.classList)
//         element.innerHTML = `
//             <button class="card__button" data-btn-previous><</button>
//                 <div class="planets-block">
//                     <div class="planets__icon">
//                         <svg class="icon">
//                             <use href="${this.href}">
//                             </use>
//                         </svg>
//                     </div>
//                         <button data-btn-close>X</button>
//                     <div class="text">
//                         <h2>Mercury</h2>
//                         <div>Surface Temperature: 460°C</div>
//                         <div>Radius: 6,052 km</div>
//                         <div>Distance to Sun: 108,200,000 km</div>
//                         <div>Moons: 0</div>
//                     </div>
//                 </div>  
//             <button class="card__button" data-btn-next>></button>`
//         document.body.append(element);

//         let item = document.querySelector('.super');
//         item.classList.add('blur');
       
//     }

//     delete() {
//         const btn = document.querySelector('button[data-btn-close]');
//         btn.addEventListener('click', () => {
//             const element = document.querySelector('.card');
//             element.remove();
//             const item = document.querySelector('.super');
//             item.classList.remove('blur');
//         })
       
//     }

//     tabsControl() {
//         // const cardBtnNext = document.querySelector('button[data-btn-next]');
//         // const cardBtnPrevious = document.querySelector('button[data-btn-previose]');
//         const item = document.querySelector('.super');
//         console.log(121);
//         item.classList.remove('blur');
       
//     }
// }





