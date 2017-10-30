import dom from "../dom";

class NumberInput {
	constructor(eventEmitter, attributeObj) {
		this.eventEmitter = eventEmitter;
		this.root = dom.root;
		this.numberInput = document.createElement("input");
		this.attributeObj = attributeObj;

		this.init();
		this.attachEventEmitter();
	}

	init() {
		for (const attr in this.attributeObj) {
			this.numberInput.setAttribute(attr, this.attributeObj[attr]);
		}
	}

	attachEventEmitter() {
		this.eventEmitter.on("NUMBER_UP", this.numberUp.bind(this));
		this.eventEmitter.on("NUMBER_DOWN", this.numberDown.bind(this));
		this.eventEmitter.on("VALIDATE", this.validate.bind(this));
	}

	render() {
		this.root.appendChild(this.numberInput);
		this.addListener();
	}

	addListener() {
		this.numberInput.addEventListener("blur", this.eventEmitter.validate.bind(this.eventEmitter));
	}

	numberUp() {
		const number = Number(this.numberInput.value);

		if (number < 300) {
			this.numberInput.value = number + 1;
		}
	}

	numberDown() {
		const number = Number(this.numberInput.value);

		if (number > 100) {
			this.numberInput.value = number - 1;
		}
	}

	validate() {
		// 1. 숫자는 100-300 범위안에 있어야한다. 범위를 벗어났을땐 최소 100, 최대 300으로 autoreplace
		const number = Number(this.numberInput.value);

		if (number < 100 || number > 300) {
			this.numberInput.value = number < 100 ? 100 : 300;
		}
	}
}

export default NumberInput;
