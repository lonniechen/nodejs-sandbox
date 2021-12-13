import { createHash } from 'crypto'

export class AsynchronousService {

    private readonly hash = createHash('sha256')
    private readonly numberOfHashUpdates = 10e6

    constructor() { }

    async blockEventLoop() {
        for (let iter = 0; iter < this.numberOfHashUpdates; iter++) {
            this.updateHash()
        }
        return `block event loop`
    }

    async asyncBlockEventLoop() {
        for (let iter = 0; iter < this.numberOfHashUpdates; iter++) {
            await this.updatehashAsync();
        }
        return `async block event loop`
    }

    async blockEventLoopWithABreath() {
        for (let iter = 0; iter < this.numberOfHashUpdates; iter++) {
            this.updateHash()
            await this.takeABreath(0);
        }
        return `block event loop with breath`
    }

    updateHash() {
        this.hash.update(this.randomString(5));
    }

    async updatehashAsync() {
        this.hash.update(this.randomString(5));
    };

    randomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async takeABreath(delay) {
        // async function itself is a micro task, hence can jump into current tick
        const promise = new Promise(
            (resolve) => {
                // setTimeout is a macro task, will get into next tick
                setTimeout(
                    () => resolve('success'),
                    delay
                )
            }
        );
        return promise
    }

}