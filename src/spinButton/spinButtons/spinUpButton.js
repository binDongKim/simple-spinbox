import SpinButton from "../spinButton";

class SpinUpButton extends SpinButton {
	constructor(eventEmitter) {
		super(eventEmitter);

		this.init();
	}

	init() {
		this.addClassProperty();
	}

	addClassProperty() {
		this.spinButton.classList.add("button", "number-up-btn");
		this.spinButtonIcon.classList.add("fa", "fa-caret-up");
	}

	render() {
		super.render();
		this.addListener();
	}

	addListener() {
		this.spinButton.addEventListener("click", this.eventEmitter.numberUp.bind(this.eventEmitter));
	}
}

export default SpinUpButton;
