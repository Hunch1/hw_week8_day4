// 1. Given the data below, define a type alias for representing users.
type Student = {
    name: string,
    age: number, 
    company?: string 
}


let users: Student[] = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type dayOfWeek = {
    Monday:string,
    Tuesday: string,
    Wednesday: string,
    Thursday: string,
    Friday: string,
    Saturday: string,
    Sunday: string 
};

let today: dayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
};

console.log(today.Monday);
// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string
    ) {}
    

    printName = (): string => {
        return  `Hello my name is ${this.firstName} ${this.lastName}`;
    }
}
const student = new Person('Alexander', 'Ventura')
console.log(student.printName())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class newPerson {
    // renamed to newPerson
    constructor(
        public firstName: string, 
        public lastName: string
    ) {}
}

class Employee extends Person {
    // The Employee class extends the Person class and adds a salary property
    constructor(
        // new constructor to take three inputs
        firstName: string,
        lastName: string,
        public salary: number
    ) {
        super(firstName, lastName);
        // The constructor initializes the salary property and then calls 
        // the constructor of the base class (Person) using super(firstName, lastName) to initialize the inherited properties.
    }
}

const newEmployee = new Employee('Alex', 'Ventura', 10000)
console.log(newEmployee)

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

// Interface for representing the address
// objects of the Address
interface Address {
    street: string
    city: string
    zipCode: number
};

// Interface for representing the new employee
interface newEmployee {
    name: string
    salary: number
    address: Address
    // address is using the Address interface 
};


let employee: newEmployee = {
    // now follows the structure of the new employee interface
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

