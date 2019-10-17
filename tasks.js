// setTimeout()  wait a few milliseconds
const util = require("util");
//util.promisify() handle callback functions such as promises or async-await
const sleep = util.promisify(setTimeout);

module.exports = {

    async taskOne() {
        await sleep(3000);
        return 'one value';
    },

    async taskTwo() {
        await sleep(2000);
        return 'two values'
    }

}