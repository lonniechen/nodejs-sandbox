export class Dog {
    name: string
    masterName: string

    constructor(name: string, getMasterName: Function) {
        this.name = name
        this.masterName = getMasterName()
    }

    getName() {
        return this.name
    }

    greeting() {
        return `My name is ${this.getName()}, my master is ${this.masterName}`
    }
}
