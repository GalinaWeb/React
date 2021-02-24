
export default class SuperAnimals {
    constructor (height, weight, color){
        this.weight = weight;
        this.height = height;
        this.color = color;
    }

    characteristics () {
        return `вес: ${this.weight} рост: ${this.height} цвет: ${this.color}`
    }

    //это тоже самое, только со стрелочной функцией, тут сразу обращение к вышестоящему классу
    characteristicsArrow = () => {
        return `вес: ${this.weight} рост: ${this.height} цвет: ${this.color}`
    }

    move () {
        return 'Иду на 4 лапах'
    }
}

class Cats extends SuperAnimals {
    constructor(height, weight, color, name) {
    super(height, weight, color)
    }
    sound (){
        return 'Мяу'
    }
}

const Cat = new Cats ('3 kg', '10 sm', 'brown') 
console.log (Cat);
console.log (Cat.characteristics());
console.log (Cat.move())
console.log (Cat.sound());

 class Dogs extends SuperAnimals {
    constructor(height, weight, color) {
    super(height, weight, color)
    }
    sound (){
        return'Гав';
    }
}

const Dog = new Dogs ('15 kg', '30 sm', 'black') 
console.log (Dog.characteristics());
console.log (Dog.move())
console.log (Dog.sound());

 class Horses extends SuperAnimals {
    constructor(height, weight, color) {
    super(height, weight, color)
    }
    sound (){
        return 'Иг';
    }
}

const Horse = new Horses ('200 kg', '190 sm', 'white') 
console.log (Horse.characteristics());
console.log (Horse.move())
console.log (Horse.sound());

class Cows extends SuperAnimals {
    constructor(height, weight, color) {
    super(height, weight, color)
    }
    sound (){
        return'Му';
    }
}
const Cow = new Cows ('300 kg', '190 sm', 'white and black') 
console.log (Cow.characteristics());
console.log (Cow.move())
console.log (Cow.sound());

const capCowChar = capitalizeDecorator(Cow.characteristics.bind(Cow))
const capCowCharArr = capitalizeDecorator(Cow.characteristicsArrow)
console.log(capCowCharArr());

function capitalizeDecorator(callback) {
    return function () {
        return callback().toUpperCase()
    }
}

