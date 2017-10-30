import EventEmitter from "./event/eventEmitter";
import NumberInput from "./numberInput/numberInput";
import SpinUpButton from "./spinButton/spinButtons/spinUpButton";
import SpinDownButton from "./spinButton/spinButtons/spinDownButton";

(() => {
	const eventEmitter = new EventEmitter();
	const numberInput = new NumberInput(eventEmitter,
		{"type": "text", "name": "numberInput", "value": 200, "class": "number-input", "id": "numberInput"});
	const spinUpButton = new SpinUpButton(eventEmitter, {"class": "button number-up-btn"});
	const spinDownButton = new SpinDownButton(eventEmitter, {"class": "button number-down-btn"});

	numberInput.render();
	spinUpButton.render();
	spinDownButton.render();
})();
