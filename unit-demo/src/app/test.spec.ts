describe('Simple test suite', () => {
    it("Test addition", () => {
        expect(1 + 2).toBe(3)
    })
    it("Test addition", () => {
        expect(1 + 2).not.toBe(4)
    })
})

// describe("A Test suite with setup and teardown", function () {
//     var obj = {};
//     beforeEach(function () {
//         obj.prop1 = true;
//         // obj.fooBar - undefined !
//     });
//     afterEach(function () {
//         obj = {};
//     });
//     it("has one property, for sure", function () {
//         expect(obj.prop1).toBeTruthy(); // is true, indeed
//     });
//     it("has undefined property", function () {
//         expect(obj.fooBar).toBeUndefined();
//     });
// });