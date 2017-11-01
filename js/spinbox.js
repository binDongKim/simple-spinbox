/**
 * DOM nodes
 */
const numberInput = document.getElementById("numberInput");
const numberUpBtn = document.getElementById("numberUpBtn");
const numberDownBtn = document.getElementById("numberDownBtn");

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

/**
 * Event Handlers
 */

// 증가버튼 클릭시 +1, 최대치는 MAX_VALUE.
function numberUp(input) {
	try {
		const inputValue = Number(input.value);

		if (inputValue === MAX_VALUE) {
			throw new Error(`증가 최대치는 ${MAX_VALUE}입니다.`);
		} else {
			input.value = inputValue + 1;
		}
	} catch (e) {
		// Error Handling.
		console.log(e.message);
	}
}

// 감소버튼 클릭시 -1, 최소치는 MIN_VALUE.
function numberDown(input) {
	try {
		const inputValue = Number(input.value);

		if (inputValue === MIN_VALUE) {
			throw new Error(`감소 최소치는 ${MIN_VALUE}입니다.`);
		} else {
			input.value = inputValue - 1;
		}
	} catch (e) {
		// Error Handling.
		console.log(e.message);
	}
}

// 사용자가 값을 입력한 후 blut시 숫자외의 글자는 모두 지워짐.
function leaveNumberOnly(input) {
	const number = Number(input.value.replace(/\D/g, ""));

	input.value = number;
}

// 입력한 숫자(혹은 추출 후의 숫자)는 MIN_VALUE ~ MAX_VALUE범위에 있어야 한다.
// 범위를 벗어난다면, 최소 MIN_VALUE, 최대 MAX_VALUE으로 autoreplace.
function setNumberIntoBoundary(input) {
	const number = Number(input.value);
	const isSmallerThanMin = number < MIN_VALUE;
	const isBiggerThanMax = number > MAX_VALUE;

	if (isSmallerThanMin || isBiggerThanMax) {
		input.value = isSmallerThanMin ? MIN_VALUE : MAX_VALUE;
	} else {
		input.value = number;
	}
}

// 클릭한 버튼타입에 따라 수행될 동작 판단.
function spin(buttonType, input) {
	buttonType === "up" ? numberUp(input) : numberDown(input);
}

// 누르고있으면 SPIN_INTERVAL에 따라 계속 해당동작(spin)이 수행됨.
function keepSpinning(buttonType, input) {
	spinIntervalId = setInterval(() => {
		spin(buttonType, input);
	}, SPIN_INTERVAL);
}

// 사용자가 버튼을 계속 누르고 있는지 판단해서, 계속 누르고있으면 keepSpinning 수행.
function isHold(event, input) {
	const buttonType = event.currentTarget.dataset.buttonType;

	holdStarter = null;
	holdStarter = setTimeout(() => {
		// 계속 누르고 있는 상태.
		keepSpinning(buttonType, input);
		holdStarter = null;
		holdActive = true;
	}, HOLD_DELAY);
}

// 버튼에서 mouseup하는 순간에 꾹누르고있었는지, 바로뗐는지(클릭) 판단해서, 클릭했으면 클릭수행. 쭉 누른상태였으면 이미 수행된 keepSpinning interval만 release.
function releaseButton(event, input) {
	const buttonType = event.currentTarget.dataset.buttonType;

	if (holdStarter) {
		// HOLD_DELAY보다 빨리 뗐을때(클릭)
		clearTimeout(holdStarter);
		spin(buttonType, input);
	} else if (holdActive) {
		clearInterval(spinIntervalId);
		holdActive = false;
	}
}


/**
 * Event Bindings
 */
// 증가버튼 클릭시 +1
// numberUpBtn.addEventListener("click", numberUp.bind(null, numberInput));
// 감소버튼 클릭시 -1
// numberDownBtn.addEventListener("click", numberDown.bind(null, numberInput));
// 사용자가 값을 입력한 후 blur시 숫자 외 글자는 모두 지워짐
numberInput.addEventListener("blur", leaveNumberOnly.bind(null, numberInput));
// 입력한 숫자가 100~300 범위를 벗어나면, blur시 100미만은 100으로, 300초과는 300으로 설정
numberInput.addEventListener("blur", setNumberIntoBoundary.bind(null, numberInput));
// 계속 누르고있을때 최초에 누른 시점에 0.5초 후부터 0.1초마다 1씩 증감
numberUpBtn.addEventListener("mousedown", e => {
	isHold(e, numberInput);
});
numberDownBtn.addEventListener("mousedown", e => {
	isHold(e, numberInput);
});
numberUpBtn.addEventListener("mouseup", e => {
	releaseButton(e, numberInput);
});
numberDownBtn.addEventListener("mouseup", e => {
	releaseButton(e, numberInput);
});
