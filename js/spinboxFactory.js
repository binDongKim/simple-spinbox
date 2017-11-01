const spinboxBuildFuncs = (() => {
	function buildNumberInput() {
		const input = document.createElement("input");

		input.type = "text";
		input.value = 200;
		input.className = "number-input";

		return input;
	}

	function buildNumberUpButton() {
		const button = document.createElement("button");
		const icon = document.createElement("i");

		button.className = "button spinbox-btn number-up-btn";
		icon.className = "fa fa-caret-up fa-3x";

		button.appendChild(icon);

		return button;
	}

	function buildNumberDownButton() {
		const button = document.createElement("button");
		const icon = document.createElement("i");

		button.className = "button spinbox-btn number-down-btn";
		icon.className = "fa fa-caret-down fa-3x";

		button.appendChild(icon);

		return button;
	}

	function getWrapperAround(className) {
		const wrapper = document.createElement("div");

		wrapper.className = className;
		return wrapper;
	}

	return {
		buildNumberInput,
		buildNumberUpButton,
		buildNumberDownButton,
		getWrapperAround
	};
})();

function Spinbox() {
	this.root = document.getElementById("root");
	this.numberInput = spinboxBuildFuncs.buildNumberInput();
	this.numberUpButton = spinboxBuildFuncs.buildNumberUpButton();
	this.numberDownButton = spinboxBuildFuncs.buildNumberDownButton();
}

Spinbox.prototype.init = function() {
	const inputWrapper = spinboxBuildFuncs.getWrapperAround("spinbox-input-wrapper");
	const buttonWrapper = spinboxBuildFuncs.getWrapperAround("spinbox-btn-wrapper");
	const spinboxWrapper = spinboxBuildFuncs.getWrapperAround("spinbox-wrapper");

	inputWrapper.appendChild(this.numberInput);
	buttonWrapper.appendChild(this.numberUpButton);
	buttonWrapper.appendChild(this.numberDownButton);

	spinboxWrapper.appendChild(inputWrapper);
	spinboxWrapper.appendChild(buttonWrapper);

	this.root.appendChild(spinboxWrapper);
};

const spinbox = new Spinbox();

spinbox.init();
