const root = document.getElementById("root");
const errorTextContainer = document.getElementById("errorText");

function getWrapperAround(className) {
	const wrapper = document.createElement("div");

	wrapper.className = className;
	return wrapper;
}

function Spinbox({minValue = 100, maxValue = 300, holdDelay = 500, spinInterval = 100} = {}) {
	const spinboxBuildFuncs = {
		buildNumberInput: () => {
			const input = document.createElement("input");

			input.type = "text";
			input.value = 200;
			input.className = "number-input";

			return input;
		},

		buildNumberUpButton: () => {
			const button = document.createElement("button");
			const icon = document.createElement("i");

			button.className = "button spinbox-btn number-up-btn";
			button.dataset.buttonType = "up";
			icon.className = "fa fa-caret-up fa-3x";

			button.appendChild(icon);

			return button;
		},

		buildNumberDownButton: () => {
			const button = document.createElement("button");
			const icon = document.createElement("i");

			button.className = "button spinbox-btn number-down-btn";
			button.dataset.buttonType = "down";
			icon.className = "fa fa-caret-down fa-3x";

			button.appendChild(icon);

			return button;
		}
	};

	this.numberInput = spinboxBuildFuncs.buildNumberInput();
	this.numberUpButton = spinboxBuildFuncs.buildNumberUpButton();
	this.numberDownButton = spinboxBuildFuncs.buildNumberDownButton();

	this.getMinValue = () => minValue;
	this.getMaxValue = () => maxValue;
	this.getHoldDelay = () => holdDelay;
	this.getSpinInterval = () => spinInterval;

	this.holdStarter = null;
	this.holdActive = false;
	this.spinIntervalId = null;
	this.activeButtonType = null;
}

Spinbox.prototype.init = function() {
	const inputWrapper = getWrapperAround("spinbox-input-wrapper");
	const buttonWrapper = getWrapperAround("spinbox-btn-wrapper");
	const spinboxWrapper = getWrapperAround("spinbox-wrapper");

	inputWrapper.appendChild(this.numberInput);
	buttonWrapper.appendChild(this.numberUpButton);
	buttonWrapper.appendChild(this.numberDownButton);

	spinboxWrapper.appendChild(inputWrapper);
	spinboxWrapper.appendChild(buttonWrapper);

	root.appendChild(spinboxWrapper);

	this.addListeners();
};

Spinbox.prototype.addListeners = function() {
	this.numberInput.addEventListener("blur", this.onInputBlur.bind(this));
	this.numberUpButton.addEventListener("mousedown", this.onMouseDown.bind(this));
	this.numberDownButton.addEventListener("mousedown", this.onMouseDown.bind(this));
	document.addEventListener("mouseup", this.onMouseUp.bind(this));
};

Spinbox.prototype.onInputBlur = function() {
	const numberOnlyValue = this.extractNumberOnly();

	this.setNumberIntoBoundary(numberOnlyValue);
};

Spinbox.prototype.extractNumberOnly = function() {
	return Number(this.numberInput.value.replace(/\D/g, ""));
};

Spinbox.prototype.setNumberIntoBoundary = function(number) {
	const minValue = this.getMinValue();
	const maxValue = this.getMaxValue();
	const isSmallerThanMin = number < minValue;
	const isBiggerThanMax = number > maxValue;

	if (isSmallerThanMin || isBiggerThanMax) {
		this.numberInput.value = isSmallerThanMin ? minValue : maxValue;
	} else {
		this.numberInput.value = number;
	}
};

Spinbox.prototype.onMouseDown = function(e) {
	const buttonType = e.currentTarget.dataset.buttonType;

	this.activeButtonType = buttonType;
	this.holdStarter = setTimeout(() => {
		// 계속 누르고 있는 상태.
		this.keepSpinning(buttonType);
		this.holdStarter = null;
		this.holdActive = true;
	}, this.getHoldDelay());
};

Spinbox.prototype.onMouseUp = function(e) {
	if (this.holdStarter) {
		// holdDelay보다 빨리 뗐을때(클릭)
		clearTimeout(this.holdStarter);
		this.spin(this.activeButtonType);
		this.holdStarter = null;
	} else if (this.holdActive) {
		clearInterval(this.spinIntervalId);
		this.holdActive = false;
	}
};

Spinbox.prototype.keepSpinning = function(buttonType) {
	this.spinIntervalId = setInterval(() => {
		this.spin(buttonType);
	}, this.getSpinInterval());
};

Spinbox.prototype.spin = function(buttonType) {
	buttonType === "up" ? this.numberUp() : this.numberDown();
};

Spinbox.prototype.numberUp = function() {
	try {
		const maxValue = this.getMaxValue();
		const inputValue = Number(this.numberInput.value);

		if (inputValue === maxValue) {
			throw new Error(`증가 최대치는 ${maxValue}입니다.`);
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
		const minValue = this.getMinValue();
		const inputValue = Number(this.numberInput.value);

		if (inputValue === minValue) {
			throw new Error(`감소 최소치는 ${minValue}입니다.`);
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
