import dom from "../dom";

class SpinButton {
	constructor() {
		this.root = dom.root;
		this.spinButton = document.createElement("button");
		this.spinButtonIcon = document.createElement("i");

		// this.init();
	}

	// init() {
	// 	this.addClassProperty();
	// }
	//
	// addClassProperty() {
	// 	this.spinButton.classList.add("button");
	// 	this.spinButtonIcon.classList.add("fa");
	//
	// 	console.log(this.spinButton);
	// 	console.log(this.spinButtonIcon);
	// 	// if (buttonType === "numberUp") {
	// 	// 	spinButtonClassList.add("number-up-btn");
	// 	// 	spinButtonIconClassList.add("fa-caret-up");
	// 	// } else {
	// 	// 	spinButtonClassList.add("number-down-btn");
	// 	// 	spinButtonIconClassList.add("fa-caret-down");
	// 	// }
	// }

	render() {
		this.spinButton.appendChild(this.spinButtonIcon);
		this.root.appendChild(this.spinButton);
	}
}

export default SpinButton;
