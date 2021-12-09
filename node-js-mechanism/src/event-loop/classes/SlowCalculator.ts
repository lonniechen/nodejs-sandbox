export class SlowCalculator {

    async multiplyBy10(number: number) {
        console.log(`\x1b[36m`, '[SlowCalculator]', `\x1b[0m`, `input:`, number);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (number < 10) {
                    console.log(`\x1b[36m`, '[SlowCalculator]', `\x1b[0m`, `multiply by 10:`, number)
                    resolve(number * 10)
                } else {
                    reject()
                }
            }, 1000 * number)
        })
    }

}
