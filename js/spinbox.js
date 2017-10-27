/**
 * DOM nodes
 */
const numberInput = document.getElementById("numberInput");
const numberUpBtn = document.getElementById("numberUpBtn");
// const numberDownBtn = document.getElementById("numberDownBtn");

/**
 * Event Handlers
 */

/**
 * 증가버튼 클릭시 +1
 */
function numberUp() {
	const number = Number(numberInput.value);

	numberInput.value = number + 1;
}

/**
 * Event Bindings
 */
// 증가버튼 클릭시 +1
numberUpBtn.addEventListener("click", numberUp);
// 감소버튼 클릭시 -1
// 계속 누르고있을때 최초에 누른 시점에 0.5초 후부터 0.1초마다 1씩 증감
// 증감의 범위는 100~300
// 사용자가 값을 입력한 후 blur시 숫자 외 글자는 모두 지워짐
// 입력한 숫자가 100~300 범위를 벗어나면, blur시 100미만은 100으로, 300초과는 300으로 설정
