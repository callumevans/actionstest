const { myFunction } = require("./muhfile");

describe("Test", () => {
    it("Should do some testing", () => {
        const result = myFunction(10, 5);

        if (result !== 15) {
            throw new Error(`Expected ${result} to equal 15`);
        }
    })
});
