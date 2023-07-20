import createStars from "./components/star";
import planetRoad from "./components/road-planet";
import createCardPlanet from "./components/card-planet";

createStars();
planetRoad(8);

new createCardPlanet('mercury', 'mercury', './images/planet/symbol-defs.svg#icon-Mercury');
new createCardPlanet('venus', 'venus', './images/planet/symbol-defs.svg#icon-Venus');
new createCardPlanet('earch', 'earch', './images/planet/symbol-defs.svg#icon-Earch');
new createCardPlanet('mars', './images/planet/symbol-defs.svg#icon-Mars');
new createCardPlanet('jupiter', './images/planet/symbol-defs.svg#icon-Jupiter');
new createCardPlanet('saturn', './images/planet/symbol-defs.svg#icon-Saturn');
new createCardPlanet('uranus', './images/planet/symbol-defs.svg#icon-Uranus');
new createCardPlanet('neptune', './images/planet/symbol-defs.svg#icon-Neptune');












