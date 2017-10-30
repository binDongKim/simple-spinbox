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
		this.eventEmitter.on("RELEASE_UPBUTTON", this.stopNumberUp.bind(this));
		this.eventEmitter.on("KEEP_NUMBER_UP", this.keepNumberUp.bind(this));
		this.eventEmitter.on("RELEASE_DOWNBUTTON", this.stopNumberDown.bind(this));
		this.eventEmitter.on("KEEP_NUMBER_DOWN", this.keepNumberDown.bind(this));
	}

	render() {
		this.root.appendChild(this.numberInput);
		this.addListener();
	}

	addListener() {
		this.numberInput.addEventListener("blur", this.eventEmitter.validate.bind(this.eventEmitter));
	}

	keepNumberUp() {
		this.intervalId = setInterval(this.numberUp, 100);
	}

	stopNumberUp() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	keepNumberDown() {
		this.intervalId = setInterval(this.numberDown, 100);
	}

	stopNumberDown() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
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
		// 1. 사용자가 입력한 String에서 Number만 추출한다.
		const number = Number(this.numberInput.value.replace(/\D/g, ""));

		// 2. 그 숫자는 100-300 범위안에 있어야한다. 범위를 벗어났을땐 최소 100, 최대 300으로 autoreplace.
		if (number < 100 || number > 300) {
			this.numberInput.value = number < 100 ? 100 : 300;
		} else {
			this.numberInput.value = number;
		}
	}
}

export default NumberInput;
