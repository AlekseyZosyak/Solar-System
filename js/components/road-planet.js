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
export default planetRoad;
