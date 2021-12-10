import { SlowCalculator } from "./classes/SlowCalculator"
const slowCalculator = new SlowCalculator()

export async function promiseSample() {
    console.log(`start`)
    const result = slowCalculator.multiplyBy10(0)
    console.log(`result is ${result}`)
    console.log(`end`)
    /**
     * 
     * a youtube video on the eventloop:
     * https://www.youtube.com/watch?v=8aGhZQkoFbQ
     * 
     */
}

export async function blockingCallstackSample() {
    console.log(`start`)
    const result = slowCalculator.multiplyBy10(0)
    console.log(`result is ${result}`)
    console.log(`end`)
    while (true) {
        /**
         * 
         * this loop will keep callstack non-empty
         * therefore the items in callback queue will never be pulled to callstack and cannot be executed
         * 
         */
    }
}

export async function awaitSample() {
    console.log(`start`)
    const result = slowCalculator.multiplyBy10(0)
    console.log(`result is ${result}`)
    const awaitResult = await result // detect await, stop pushing codes to callstack; start processing callback queue until the awaited event is completed
    console.log(`await result is ${awaitResult}`)
    console.log(`end`)
    while (true) { }
}

export async function multiplePromisesSample() {
    console.log(`start`)
    slowCalculator.multiplyBy10(3)
    await slowCalculator.multiplyBy10(2)
    slowCalculator.multiplyBy10(1)
    slowCalculator.multiplyBy10(0)
    console.log(`end`)
}

export async function phaseSample() {
    console.log(`start`)
    const result = slowCalculator.multiplyBy10(0)
    console.log(`result is ${result}`)
    new Promise((resolve) => {
        resolve(`this is of higher priority`)
    }).then((message) => {
        console.log(message)
    })
    console.log(`end`)
    /**
     * 
     * some readings:
     * https://stackoverflow.com/questions/46375711/what-is-the-relationship-between-event-loop-and-promise
     * https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context
     * https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
     * 
     */
}

export async function promiseAllSample() {
    console.log(`start`)
    const numberArray = [5, 4, 3, 2, 1]
    const promises = numberArray.map(async (number) => {
        return slowCalculator.multiplyBy10(number)
    })
    console.log(promises)
    const result = await Promise.all(promises)
    console.log(result)
    console.log(`end`)
}