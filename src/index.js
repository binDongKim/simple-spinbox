import NumberInput from "./numberInput/numberInput";
import SpinUpButton from "./spinButton/spinButtons/spinUpButton";
import SpinDownButton from "./spinButton/spinButtons/spinDownButton";

(() => {
	const numberInput = new NumberInput();
	const spinUpButton = new SpinUpButton();
	const spinDownButton = new SpinDownButton();

	numberInput.render();
	spinUpButton.render();
	spinDownButton.render();
})();
