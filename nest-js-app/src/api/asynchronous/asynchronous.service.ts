import { createHash } from 'crypto'

export class AsynchronousService {

    constructor() { }

    async blockEventLoop() {
        const hash = createHash('sha256');
        const numberOfHasUpdates = 10e6;

        for (let iter = 0; iter < numberOfHasUpdates; iter++) {
            hash.update(this.randomString(5));
        }
        return `block event loop`
    }

    async asyncBlockEventLoop() {
        const hash = createHash('sha256');
        const numberOfHasUpdates = 10e6;

        const updatehashAsync = async () => {
            hash.update(this.randomString(5));
        };

        for (let iter = 0; iter < numberOfHasUpdates; iter++) {
            await updatehashAsync();
        }
        return `async block event loop`
    }

    async blockEventLoopWithBreath() {
        const hash = createHash('sha256');
        const numberOfHasUpdates = 10e4;

        for (let iter = 0; iter < numberOfHasUpdates; iter++) {
            hash.update(this.randomString(5));
            await this.breathSpace(0);
        }
        return `block event loop with breath`
    }

    randomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async breathSpace(delay) {
        const promise = new Promise(
            (resolve) => {
                setTimeout(
                    () => resolve('success'),
                    delay
                )
            }
        );
        return promise
    }

}