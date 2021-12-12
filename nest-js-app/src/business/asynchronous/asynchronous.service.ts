import { createHash } from 'crypto'

export class AsynchronousService {

    constructor() { }

    async blockEventLoop() {
        let hash = createHash('sha256');
        const numberOfHasUpdates = 10e6;

        for (let iter = 0; iter < numberOfHasUpdates; iter++) {
            hash.update(this.randomString(5));
        }
        return `Finished doing long task`
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
}