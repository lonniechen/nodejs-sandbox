import { Person } from "./classes/Person"

export function variableSample() {
    console.log(`------------------------`)
    var varVariable = `var in function scope`
    let letVariable = `let in function scope`
    const constVariable = `const in function scope`
    console.log(varVariable)
    console.log(letVariable)
    console.log(constVariable)
    console.log(`------------------------`)
    {
        var varVariable = `var in block scope`
        let letVariable = `let in block scope`
        const constVariable = `const in block scope`
        console.log(varVariable)
        console.log(letVariable)
        console.log(constVariable)
        console.log(`------------------------`)
    }
    console.log(varVariable)
    console.log(letVariable)
    console.log(constVariable)
    console.log(`------------------------`)
}

export function closureSample() {
    let outsideCounter = 0;
    function createCounterFunction(functionCounter: number) {
        let insideCounter = 0
        return function counterFunction() {
            outsideCounter++
            insideCounter++
            console.log(`function ${functionCounter}:`, `, outside counter:`, outsideCounter, `, inside counter:`, insideCounter)
        }
    }

    let counterFunction1 = createCounterFunction(1)
    let counterFunction2 = createCounterFunction(2)

    counterFunction1()
    counterFunction2()
    counterFunction2()
    counterFunction1()
}

export function thisSample() {
    const person = new Person(`Thomas`, `Lucky`)
    const dog = person.dog
    console.log(dog.greeting())
}
