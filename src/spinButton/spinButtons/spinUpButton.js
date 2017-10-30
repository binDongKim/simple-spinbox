import SpinButton from "../spinButton";

class SpinUpButton extends SpinButton {
	constructor(eventEmitter, attributeObj) {
		super(eventEmitter, attributeObj);

		this.iconize();
		this.attachEventEmitter();
	}

	iconize() {
		super.iconize("fa fa-caret-up");
	}

	attachEventEmitter() {
		this.eventEmitter.on("DETECT_HOLD_UP", this.detectHoldUp.bind(this));
		this.eventEmitter.on("RELEASE_UPBUTTON", this.releaseUpButton.bind(this));
	}

	render() {
		super.render();
		this.addListener();
	}

	addListener() {
		this.spinButton.addEventListener("mousedown", this.eventEmitter.detectHoldUp.bind(this.eventEmitter));
		this.spinButton.addEventListener("mouseup", this.eventEmitter.releaseUpButton.bind(this.eventEmitter));
	}

	detectHoldUp() {
		this.holdStarter = null;
		this.holdActive = false; // 사용자가 버튼을 누르고있는지 여부
		const holdDelay = 500; // 누르고있는지 여부를 판단할 시간텀(0.5초)

		this.holdStarter = setTimeout(() => {
			this.holdStarter = null;
			this.holdActive = true;

			this.keepNumberUp();
		}, holdDelay);
	}

	keepNumberUp() {
		this.eventEmitter.keepNumberUp();
	}

	releaseUpButton() {
		if (this.holdStarter) {
			// 0.5초보다 빨리 뗏을때(클릭)
			clearTimeout(this.holdStarter);
			this.eventEmitter.numberUp();
		} else if (this.holdActive) {
			this.holdActive = false;
		}
	}
}

export default SpinUpButton;
