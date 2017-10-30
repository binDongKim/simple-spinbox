import assert from "assert";
import NumberInput from "../src/numberInput/numberInput";

describe("증가/감소 버튼 기능", () => {
	const numberInput = new NumberInput(undefined, {"type": "text", "value": 250});

	// before(() => {
	// 	numberInput = new NumberInput(undefined, {"type": "text", "value": 250});
	// });

	it("증가버튼 클릭시, +1", () => {
		const beforeValue = numberInput.numberInput.value;

		numberInput.number();
		const afterValue = numberInput.numberInput.value;

		assert.equal(beforeValue + 1, afterValue);
	});

	it("최대치 300", () => {

	});

	it("감소버튼 클릭시, -1", () => {

	});

	it("최소치 100", () => {

	});

	it("계속 누르고 있을시, 최초에 누른 시점에 0.5초 후부터 0.1초마다 1씩 증감", () => {

	});
});

describe("사용자 숫자 입력 기능", () => {
	it("사용자가 값을 입력한 후 blur시 숫자 외 글자는 모두 지워짐", () => {

	});

	it("입력한 숫자가 100~300 범위를 벗어나면, blur시 100미만은 100으로, 300초과는 300으로 설정", () => {

	});
});
