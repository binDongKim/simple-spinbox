class SpinButton {
	constructor(buttonType) {
		this.buttonType = buttonType;
		this.root = document.getElementById("root");

		this.init();
	}

	/**
	 * Build a button DOM
	 */
	init() {
		this.spinButton = document.createElement("button");
		this.spinButtonIcon = document.createElement("i");

		this.addClassProperty(this.buttonType);
	}

	/**
	 * Add class property to the each tag
	 */
	addClassProperty(buttonType) {
		const spinButtonClassList = this.spinButton.classList;
		const spinButtonIconClassList = this.spinButtonIcon.classList;

		spinButtonClassList.add("button");
		spinButtonIconClassList.add("fa");

		if (buttonType === "numberUp") {
			spinButtonClassList.add("number-up-btn");
			spinButtonIconClassList.add("fa-caret-up");
		} else {
			spinButtonClassList.add("number-down-btn");
			spinButtonIconClassList.add("fa-caret-down");
		}
	}

	render() {
		this.spinButton.appendChild(this.spinButtonIcon);
		this.root.appendChild(this.spinButton);
	}
}

export default SpinButton;
