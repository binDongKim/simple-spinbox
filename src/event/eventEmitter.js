class EventEmitter extends eg.Component {
	// To: numberInput.js
	numberUp() {
		this.trigger("NUMBER_UP");
	}
	// To: numberInput.js
	numberDown() {
		this.trigger("NUMBER_DOWN");
	}
	// To: numberInput.js
	validate() {
		this.trigger("VALIDATE");
	}

	// To: numberInput.js, spinUpButton.js
	releaseUpButton() {
		this.trigger("RELEASE_UPBUTTON");
	}

	// To: spinUpButton.js
	detectHoldUp() {
		this.trigger("DETECT_HOLD_UP");
	}

	// To: numberInput.js
	keepNumberUp() {
		this.trigger("KEEP_NUMBER_UP");
	}

	// To: numberInput.js, spinDownButton.js
	releaseDownButton() {
		this.trigger("RELEASE_DOWNBUTTON");
	}

	// To: spinDownButton.js
	detectHoldDown() {
		this.trigger("DETECT_HOLD_DOWN");
	}

	// To: numberInput.js
	keepNumberDown() {
		this.trigger("KEEP_NUMBER_DOWN");
	}
}

export default EventEmitter;
