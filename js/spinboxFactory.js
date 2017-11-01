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
		button.dataset.buttonType = "up";
		icon.className = "fa fa-caret-up fa-3x";

		button.appendChild(icon);

		return button;
	}

	function buildNumberDownButton() {
		const button = document.createElement("button");
		const icon = document.createElement("i");

		button.className = "button spinbox-btn number-down-btn";
		button.dataset.buttonType = "down";
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

const root = document.getElementById("root");
const errorTextContainer = document.getElementById("errorText");
/**
 * Constants
 */
const MIN_VALUE = 100;
const MAX_VALUE = 300;
const HOLD_DELAY = 500; // millisecond
const SPIN_INTERVAL = 100; // millisecond

/**
 * Holding Flag variables
 */
let holdStarter = null;
let holdActive = false;
let spinIntervalId = null;
let activeButtonType = null;

function Spinbox() {
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

	root.appendChild(spinboxWrapper);

	this.addListeners();
};

Spinbox.prototype.addListeners = function() {
	this.numberInput.addEventListener("blur", this.leaveNumberOnly);
	this.numberInput.addEventListener("blur", this.setNumberIntoBoundary);
	this.numberUpButton.addEventListener("mousedown", this.isHold.bind(this));
	this.numberDownButton.addEventListener("mousedown", this.isHold.bind(this));
	document.addEventListener("mouseup", this.stopSpinning.bind(this));
};

Spinbox.prototype.leaveNumberOnly = function(e) {
	const targetElement = e.target;
	const number = Number(targetElement.value.replace(/\D/g, ""));

	targetElement.value = number;
};

Spinbox.prototype.setNumberIntoBoundary = function(e) {
	const targetElement = e.target;
	const number = Number(targetElement.value);
	const isSmallerThanMin = number < MIN_VALUE;
	const isBiggerThanMax = number > MAX_VALUE;

	if (isSmallerThanMin || isBiggerThanMax) {
		targetElement.value = isSmallerThanMin ? MIN_VALUE : MAX_VALUE;
	} else {
		targetElement.value = number;
	}
};

Spinbox.prototype.isHold = function(e) {
	const buttonType = e.currentTarget.dataset.buttonType;

	activeButtonType = buttonType;
	holdStarter = null;
	holdStarter = setTimeout(() => {
		// 계속 누르고 있는 상태.
		this.keepSpinning(buttonType);
		holdStarter = null;
		holdActive = true;
	}, HOLD_DELAY);
};

Spinbox.prototype.stopSpinning = function() {
	const buttonType = activeButtonType;

	if (holdStarter) {
		// HOLD_DELAY보다 빨리 뗐을때(클릭)
		clearTimeout(holdStarter);
		this.spin(buttonType);
	} else if (holdActive) {
		clearInterval(spinIntervalId);
		holdActive = false;
	}
};

Spinbox.prototype.keepSpinning = function(buttonType) {
	spinIntervalId = setInterval(() => {
		this.spin(buttonType);
	}, SPIN_INTERVAL);
};

Spinbox.prototype.spin = function(buttonType) {
	buttonType === "up" ? this.numberUp() : this.numberDown();
};

Spinbox.prototype.numberUp = function() {
	try {
		const inputValue = Number(this.numberInput.value);

		if (inputValue === MAX_VALUE) {
			throw new Error(`증가 최대치는 ${MAX_VALUE}입니다.`);
		} else {
			errorTextContainer.textContent = "";
			this.numberInput.value = inputValue + 1;
		}
	} catch (e) {
		errorTextContainer.textContent = e.message;
	}
};

Spinbox.prototype.numberDown = function() {
	try {
		const inputValue = Number(this.numberInput.value);

		if (inputValue === MIN_VALUE) {
			throw new Error(`감소 최소치는 ${MIN_VALUE}입니다.`);
		} else {
			errorTextContainer.textContent = "";
			this.numberInput.value = inputValue - 1;
		}
	} catch (e) {
		errorTextContainer.textContent = e.message;
	}
};

const spinbox = new Spinbox();

spinbox.init();
