import dom from "../dom";

class SpinButton {
	constructor(eventEmitter, attributeObj) {
		this.eventEmitter = eventEmitter;
		this.root = dom.root;
		this.spinButton = document.createElement("button");
		this.attributeObj = attributeObj;

		this.init();
	}

	init() {
		for (const attr in this.attributeObj) {
			this.spinButton.setAttribute(attr, this.attributeObj[attr]);
		}
	}

	iconize(iconClass) {
		this.spinButtonIcon = document.createElement("i");
		this.spinButtonIcon.className = iconClass;
		this.spinButton.appendChild(this.spinButtonIcon);
	}

	render() {
		this.root.appendChild(this.spinButton);
	}
}

export default SpinButton;
