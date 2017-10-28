class EventEmitter extends eg.Component {
	numberUp() {
		this.trigger("NUMBER_UP");
	}

	numberDown() {
		this.trigger("NUMBER_DOWN");
	}
}

export default EventEmitter;
