console.log('dawaw');

// normal function
function printMe(name) {
    return "hello "+name;
}
console.log(printMe('Marlon'));


// arrow function
const printMeFunc = (name) => { //you can remove parenteses at the arguments but it only valid if you have only one argument
    return "hello "+name;
} // also you can remove curly braces and return word if you only returning one syntax otherwise will not be valid
console.log(printMeFunc('Hario'));



//ES6 class
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();                        //use super if your want to call properties or methods from parent class
        this.name = 'Max';
        this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();




// //ES7 class (next-gen) //this would take an error if you don't use babel
// class Human {
//     gender = 'male';

//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     name = 'Max';
//     gender = 'female';

//     printMyName = () => {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();




// Spread operator sample
    // using array for sread
    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4];
    console.log(newNumbers);

    //using object for spread
    const personspread = {
        name: 'Max'
    };
    const newPerson = {
        ...personspread,
        age: 28
    }
    console.log(newPerson);


// Rest operator sample
    //using function for rest
    const filter = (...args) => {
        return args.filter(el => el === 1);
    }
    console.log(filter(1, 2, 3));



// Destructuring
    // Array Destructuring
    const numbersdestructuring = [1, 2, 3];
    [num1, , num3] = numbersdestructuring;
    console.log(num1, num3);




//Reference and Primitive Types
    // primitive type example
    let numberprim = 1;       // example of premitive type
    let numbersecprim = numberprim;
    numberprim = 2;
    console.log(numbersecprim);
    console.log(numberprim);

    // reference type example
    const personref = {
        name: 'Max'
    };
    const secondPersonref = personref;      // too avoide reference copy you need immutable way by using spread operator e.g. const secondPersonref = { ...personref };
    personref.name = 'Manu';                // it will change the copied object if you change it's value and variable that is refere to this variable will also affected 
    console.log(secondPersonref);
    console.log(personref);


    
    
// Array function example
    const numbersarrfunc = [1, 2, 3];
    const doubleNumArray = numbersarrfunc.map((num) => {
        return num * 2;
    });
    console.log(numbersarrfunc);
    console.log(doubleNumArray);
