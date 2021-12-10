import { SlowCalculator } from "../event-loop/classes/SlowCalculator"
const slowCalculator = new SlowCalculator()

const numberArray = [5, 4, 3, 2, 1]

export async function reduceSample(flag: boolean) {
    numberArray.reduce(async (accumulator, number) => {
        /**
         * output sequence will be different with awaiting accumulator
         */
        if (flag) {
            await accumulator // accumulator is the return from previous iteration; when callback is async function, it can be awaited
        }
        const result = await slowCalculator.multiplyBy10(number)
        console.log(`result: `, result)
        return Promise.resolve()
    }, Promise.resolve())
}

export async function forEachSample() {
    numberArray.forEach(async (number) => {
        const result = await slowCalculator.multiplyBy10(number)
        console.log(`result: `, result)
    })
}

export async function forOfSample() {
    for (const number of numberArray) {
        const result = await slowCalculator.multiplyBy10(number)
        console.log(`result: `, result)
    }
}