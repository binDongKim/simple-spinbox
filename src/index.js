import SpinUpButton from "./spinButton/spinButtons/spinUpButton";
import SpinDownButton from "./spinButton/spinButtons/spinDownButton";

(() => {
	const spinUpButton = new SpinUpButton();
	const spinDownButton = new SpinDownButton();

	spinUpButton.render();
	spinDownButton.render();
})();
