import createCardPlanet from "./components/card-planet";

function createCardPlanets(arry) {
    arry.forEach(element => {
        new createCardPlanet(element.name, element.id, element.href, element.temperature, element.distance, element.moons, element.radius, element.info)
    });
}
export default createCardPlanets;