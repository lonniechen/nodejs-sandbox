import { SlowCalculator } from "./classes/SlowCalculator"
const slowCalculator = new SlowCalculator()

export async function promiseSample() {
    console.log(`start`)
    const result = slowCalculator.multiplyBy10(0)
    console.log(`result is ${result}`)
    console.log(`end`)
    /**
     * rationale
     */
}

export async function blockingCallstackSample() {
    console.log(`start`)
    const result = slowCalculator.multiplyBy10(0)
    console.log(`result is ${result}`)
    console.log(`end`)
    while (true) {
        /**
         * this loop will keep callstack non-empty
         * 
         * therefore the items in callback queue will never be pulled to callstack and cannot be executed
         */
    }
}

export async function awaitSample() {
    console.log(`start`)
    const result = slowCalculator.multiplyBy10(0)
    console.log(`result is ${result}`)
    const awaitResult = await result
    console.log(`await result is ${awaitResult}`)
    console.log(`end`)
    while (true) {

    }
}

export async function multiplePromisesSample() {
    console.log(`start`)
    slowCalculator.multiplyBy10(3)
    await slowCalculator.multiplyBy10(2)
    slowCalculator.multiplyBy10(1)
    slowCalculator.multiplyBy10(0)
    console.log(`end`)
    /**
     * assumes each step of code will take 1 ms to execute
     * 
     * 0ms    : start
     * 1ms    : put setTimeout(..., 5000) in event queue
     * 2ms    : put setTimeout(4000) in event queue
     * 3ms    : put setTimeout(3000) in event queue
     * 4ms    : await detected, start to execute the event queue in sequence
     * 5ms    : execute setTimeout(5000), target to console.log at 5004ms
     * 6ms    : execute setTimeout(4000), target to console.log at 4005ms
     * 7ms    : execute setTimeout(3000), target to console.log at 3007ms; wait for 3000ms until setTimeout(3000) finishes
     * 3007ms : take a break: 3 seconds
     * 3008ms : put setTimeout(2000) in event queue
     * 3009ms : put setTimeout(1000) in event queue
     * 3010ms : put setTimeout(0) in event queue
     * 3011ms : end
     * 3012ms : start to execute the event queue in sequence
     * 3013ms : execute setTimeout(2000), target to console.log at 5015ms
     * 3014ms : execute setTimeout(1000), target to console.log at 4014ms
     * 3015ms : execute setTimeout(0), console.log immediately
     * 3015ms : take a break: 0 seconds
     * 4005ms : take a break: 4 seconds
     * 4014ms : take a break: 1 seconds
     * 5004ms : take a break: 5 seconds
     * 5015ms : take a break: 2 seconds
     * 
     */
}

async function nestedPromise(number: number) {
    console.log(`[nest] input: ${number}`)
    slowCalculator.multiplyBy10(number)
    return slowCalculator.multiplyBy10(number - 1)
}

export async function nestedPromiseSample() {
    console.log(`start`)
    await nestedPromise(3)
    nestedPromise(1)
    console.log(`end`)
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