import createStars from "./components/star";
import planetRoad from "./components/road-planet";
import createCardPlanet from "./components/card-planet";
import getResource from "./components/requests";


createStars();
planetRoad(8);


getResource('http://localhost:3000/planets')
    .then(data => {
        data.forEach(item => {
        //   console.log(item.info)
            new createCardPlanet(item.name, item.id, item.href, item.temperature, item.distance, item.moons, item.radius, item.info);
        });
    })














// new createCardPlanet('mercury', 'mercury', './images/planet/symbol-defs.svg#icon-Mercury');
// new createCardPlanet('venus', 'venus', './images/planet/symbol-defs.svg#icon-Venus');
// new createCardPlanet('earch', 'earch', './images/planet/symbol-defs.svg#icon-Earch');
// new createCardPlanet('mars', 'mars', './images/planet/symbol-defs.svg#icon-Mars');
// new createCardPlanet('jupiter', 'jupiter', './images/planet/symbol-defs.svg#icon-Jupiter');
// new createCardPlanet('saturn', 'saturn', './images/planet/symbol-defs.svg#icon-Saturn');
// new createCardPlanet('uranus', 'uranus', './images/planet/symbol-defs.svg#icon-Uranus');
// new createCardPlanet('neptune', 'neptune', './images/planet/symbol-defs.svg#icon-Neptune');






    


