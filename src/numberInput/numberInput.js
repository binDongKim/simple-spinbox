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
	}

	render() {
		this.root.appendChild(this.numberInput);
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
}

export default NumberInput;
