// 'use strict'
//
// const a: number = 10;
// let b: boolean;
// b = 1 == 1;
// let s: string;
// s = 'qqqqq';
//
// let y:any;
//
// let f = () => {
//     console.log(s, b, a);
// }
// f()
//
// let qq:number[]; //массив

// import {MyParams} from "./myInterface";
//
// const f = (p:MyParams) => `${p.fn} ${p.ln} ${p.age}`;
// console.log(f({ln:'qqq', fn:'ffff', age:30}));

class Person {
    static PI: number = 3.1415;

    static getSquare(radius: number): number {
        return Person.PI * radius * radius;
    }

    private _id: number;
    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    public fn: string;
    private ln: string;
    protected age: number;

    constructor(fn: string, ln: string, age?: number) {
        this.fn = fn;
        this.ln = ln;
        this.age = age || 20;
    }

    toString() {
        return this.fn + ' ' + this.fn + ' ' + this.age;
    }
}

console.log(Person.getSquare(4));
let person = new Person('Ivan', 'Ivanov', 30);

interface IUser {
    getFullName(): string;
}

class User extends Person implements IUser {
    private password: string;

    constructor(password: string) {
        super('', '');
        this.password = password;
    }

    getFullName(): string {
        return 'Пользователь ' + this.toString();
    }
}

abstract class U {
    public static MESSAGE: string = 'Пользователь';
}

interface FullNameBuilder {
    (fn: string, ln: string): string;
}

const lnFn: FullNameBuilder = (firstName, lastName) => firstName + ' ' + lastName;
console.log(lnFn('Ivan', 'Ivanov'));

interface PersonArray {
    [index: number]: Person;
}

const a: PersonArray = [new Person('Ivan', 'Ivanov'),];

interface Dictionary {
    [index: string]: string;
}

const colors:Dictionary={}
colors['red'] = '#FF0000';
colors['blue'] = '#00FF00';
colors['green'] = '#0000FF';
console.log(colors['red']);