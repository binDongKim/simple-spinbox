import SpinButton from "../spinButton";

class SpinDownButton extends SpinButton {
	constructor(eventEmitter, attributeObj) {
		super(eventEmitter, attributeObj);

		this.iconize();
	}

	iconize() {
		super.iconize("fa fa-caret-down");
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
