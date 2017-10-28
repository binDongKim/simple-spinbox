import SpinButton from "../spinButton";

class SpinDownButton extends SpinButton {
	constructor(eventEmitter) {
		super(eventEmitter);

		this.init();
	}

	init() {
		this.addClassProperty();
	}

	addClassProperty() {
		this.spinButton.classList.add("button", "number-down-btn");
		this.spinButtonIcon.classList.add("fa", "fa-caret-down");
	}

	render() {
		super.render();
		this.addListener();
	}

	addListener() {
		this.spinButton.addEventListener("click", this.eventEmitter.numberDown.bind(this.eventEmitter));
	}
}

export default SpinDownButton;
