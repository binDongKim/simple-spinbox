import dom from "../dom";

class NumberInput {
	constructor() {
		this.root = dom.root;
		this.numberInput = document.createElement("input");

		this.setProperties();
	}

	setProperties() {
		this.numberInput.setAttribute("type", "text");
		this.numberInput.setAttribute("name", "numberInput");
		this.numberInput.setAttribute("value", 200);
		this.numberInput.setAttribute("class", "number-input");
		this.numberInput.setAttribute("id", "numberInput");
	}

	render() {
		this.root.appendChild(this.numberInput);
	}
}

export default NumberInput;
