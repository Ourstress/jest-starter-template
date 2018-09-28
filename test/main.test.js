const {add,subtract,createdArray,pusher, popper} = require("../src/main");

// declare helloArray first before using beforeEach()
let helloArray 
beforeEach(() => {
  helloArray = [1,2,3,4,5]
});


describe("add", function(){
it.skip("should be add the 2 parameters together", () => {
  expect(add(1, 1)).toEqual(2);
});

it.skip("should return 4 for 2+2",() => {
  expect(add(2,2)).toEqual(4)
})
})
test("should be able to do substraction",() => {
  expect(subtract(2,10)).toEqual(8)
})
test("array has length of 5",() => {
  expect(createdArray).toHaveLength(5)
}
)
it("array should have length of 6 when element added", () => {
  expect(pusher(helloArray,2)).toHaveLength(6)
}
)
it("array should have a length of 4 after element popped",() => {
  expect(popper([1,2,3,4,5])).toHaveLength(4)
}
)
test