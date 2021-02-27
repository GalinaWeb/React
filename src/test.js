
export default class SomeClass {
    constructor(arg1, arg2, arg3) {
        this.arg1 = arg1
        this.arg2 = arg2
        this.arg3 = arg3
    }
    
    greatings = () => {
        return `${this.arg1} ${this.arg2} ${this.arg3}`
    }

    capitalize(...args) {
        //*return `${this.arg1} ${this.arg2} ${this.arg3}`.toUpperCase()*/
        //*этот тоже самое*/
        console.log(args);
        return this.greatings().concat(args.join('')).toUpperCase()
    }

}

const ClassInstance = new SomeClass ('Hello', 'dear', 'John')
const ClassInstance2 = new SomeClass ('Hello', 'dear', 'Mary')
console.log(`${ClassInstance.arg1} ${ClassInstance.arg2} ${ClassInstance.arg3}`);
console.log(ClassInstance.greatings())
console.log(ClassInstance2.capitalize())

  
function reverse(callback = () => 'reverse', context, ...args) {
    return callback(... args).split('').reverse().join('')
    //return callback.apply(context, args).split('').reverse().join('')
}

function bind(func, context) {
    return (...args) => {
        return func.apply(context, args)
    }
}

////console.log(reverse(ClassInstance.greatings));
//console.log(reverse(ClassInstance.capitalize.bind(ClassInstance)));
//console.log(reverse(ClassInstance.capitalize, ClassInstance, ['!', '!', '!']));
console.log(reverse(bind(ClassInstance.capitalize), ClassInstance));
