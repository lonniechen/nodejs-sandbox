import { Person } from "./classes/Person"

export function thisSample() {
    const person = new Person(`Thomas`, `Lucky`)
    const dog = person.dog
    console.log(dog.greeting())
}