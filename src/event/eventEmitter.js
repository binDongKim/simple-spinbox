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
}

export default EventEmitter;
