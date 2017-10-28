import dom from "../dom";

class NumberInput {
	constructor(eventEmitter) {
		this.eventEmitter = eventEmitter;
		this.root = dom.root;
		this.numberInput = document.createElement("input");

		this.setProperties();
		this.attachEventEmitter();
	}

	setProperties() {
		this.numberInput.setAttribute("type", "text");
		this.numberInput.setAttribute("name", "numberInput");
		this.numberInput.setAttribute("value", 200);
		this.numberInput.setAttribute("class", "number-input");
		this.numberInput.setAttribute("id", "numberInput");
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

		this.numberInput.value = number + 1;
	}

	numberDown() {
		const number = Number(this.numberInput.value);

		this.numberInput.value = number - 1;
	}
}

export default NumberInput;
