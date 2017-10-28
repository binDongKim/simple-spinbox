import SpinButton from "../spinButton";

class SpinUpButton extends SpinButton {
	constructor() {
		super();

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
	}
}

export default SpinUpButton;
