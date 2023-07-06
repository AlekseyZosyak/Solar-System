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

export default createStars;