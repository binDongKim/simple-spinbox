import SpinButton from "../spinButton";

class SpinDownButton extends SpinButton {
	constructor() {
		super();

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
	}
}

export default SpinDownButton;
