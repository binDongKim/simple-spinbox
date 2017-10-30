import SpinButton from "../spinButton";

class SpinUpButton extends SpinButton {
	constructor(eventEmitter, attributeObj) {
		super(eventEmitter, attributeObj);

		this.iconize();
	}

	iconize() {
		super.iconize("fa fa-caret-up");
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
