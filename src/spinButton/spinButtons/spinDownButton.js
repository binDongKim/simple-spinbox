import SpinButton from "../spinButton";

class SpinDownButton extends SpinButton {
	constructor(eventEmitter, attributeObj) {
		super(eventEmitter, attributeObj);

		this.iconize();
		this.attachEventEmitter();
	}

	iconize() {
		super.iconize("fa fa-caret-down");
	}

	attachEventEmitter() {
		this.eventEmitter.on("DETECT_HOLD_DOWN", this.detectHoldDown.bind(this));
		this.eventEmitter.on("RELEASE_DOWNBUTTON", this.releaseDownButton.bind(this));
	}

	render() {
		super.render();
		this.addListener();
	}

	addListener() {
		this.spinButton.addEventListener("mousedown", this.eventEmitter.detectHoldDown.bind(this.eventEmitter));
		this.spinButton.addEventListener("mouseup", this.eventEmitter.releaseDownButton.bind(this.eventEmitter));
	}

	detectHoldDown() {
		this.holdStarter = null;
		this.holdActive = false; // 사용자가 버튼을 누르고있는지 여부
		const holdDelay = 500; // 누르고있는지 여부를 판단할 시간텀(0.5초)

		this.holdStarter = setTimeout(() => {
			this.holdStarter = null;
			this.holdActive = true;

			this.keepNumberDown();
		}, holdDelay);
	}

	keepNumberDown() {
		this.eventEmitter.keepNumberDown();
	}

	releaseDownButton() {
		if (this.holdStarter) {
			// 0.5초보다 빨리 뗏을때(클릭)
			clearTimeout(this.holdStarter);
			this.eventEmitter.numberDown();
		} else if (this.holdActive) {
			this.holdActive = false;
		}
	}
}

export default SpinDownButton;
