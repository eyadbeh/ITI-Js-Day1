class Engine {
    static #count = 0;

    constructor(source) {
        if (new.target === Engine) {
            throw new Error("Cannot instantiate abstract class Engine directly.");
        }
        this.source = source;
        Engine.#count++;
    }

    static getCount() {
        return Engine.#count;
    }
}

class Car extends Engine {
    constructor(top, left, source) {
        super(source);
        this.top = top;
        this.left = left;

        this.carElement = document.createElement("img");
        this.carElement.src = this.source;
        this.carElement.style.position = "absolute";
        this.carElement.style.top = `${this.top}px`;
        this.carElement.style.left = `${this.left}px`;
        this.carElement.style.width = "100px";
        this.carElement.style.height = "50px";

        document.body.appendChild(this.carElement);
    }

    set Top(value) {
        this.top = value;
        this.carElement.style.top = `${this.top}px`;
    }

    set Left(value) {
        this.left = value;
        this.carElement.style.left = `${this.left}px`;
    }

    moveLeft() {
        this.left -= 10;
        if (this.left < 0) this.left = 0;
        this.carElement.style.left = `${this.left}px`;
    }

    moveRight() {
        this.left += 10;
        let maxWidth = window.innerWidth - this.carElement.offsetWidth;
        if (this.left > maxWidth) this.left = maxWidth;
        this.carElement.style.left = `${this.left}px`;
    }

    changeStyle(styles) {
        for (let key in styles) {
            this.carElement.style[key] = styles[key];
        }
    }

    moveCar(direction = "right") {
        let currentDirection = direction;
    
        const move = () => {
            if (currentDirection === "right") {
                this.moveRight();
                if (this.left >= window.innerWidth - this.carElement.offsetWidth) {
                    currentDirection = "left";
                }
            } else {
                this.moveLeft();
                if (this.left <= 0) {
                    currentDirection = "right";
                }
            }
        };
    
        this.movementInterval = setInterval(move, 20);
    }
    
}

let car = new Car(100, 100, "images/1.jpg");

car.changeStyle({ border: "2px solid red", borderRadius: "10px" });

car.moveCar("right");
