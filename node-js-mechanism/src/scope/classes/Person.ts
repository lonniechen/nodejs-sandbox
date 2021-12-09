import { Dog } from './Dog'

export class Person {
    name: string
    dogName: string
    dog: Dog

    constructor(name: string, dogName: string) {
        this.name = name
        this.dogName = dogName
        this.dog = new Dog(dogName, this.getName.bind(this)) // will get error without bind(this)
    }

    getName() {
        return this.name
    }

    greeting() {
        return `Hello, I am ` + this.getName()
    }
}
