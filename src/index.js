import EventEmitter from "./event/eventEmitter";
import NumberInput from "./numberInput/numberInput";
import SpinUpButton from "./spinButton/spinButtons/spinUpButton";
import SpinDownButton from "./spinButton/spinButtons/spinDownButton";

(() => {
	const eventEmitter = new EventEmitter();
	const numberInput = new NumberInput(eventEmitter);
	const spinUpButton = new SpinUpButton(eventEmitter);
	const spinDownButton = new SpinDownButton(eventEmitter);

	numberInput.render();
	spinUpButton.render();
	spinDownButton.render();
})();
