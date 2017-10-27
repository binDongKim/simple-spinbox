import assert from "assert";

describe("Array 테스트", () => {
	it("값이 없을때는 -1을 리턴함", () => {
		assert.equal(0, [1, 2, 3].indexOf(5));
		assert.equal(1, [1, 2, 3].indexOf(2));
	});
});
