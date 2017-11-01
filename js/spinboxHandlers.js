(function() {
	const spinboxHandlers = {
		// 증가버튼 클릭시 +1, 단 최대치는 300
		numberUp: input => {
			input.value = Number(input.value) + 1;
		},
		// 감소버튼 클릭시 -1, 단 최소치는 100
		numberDown: () => {},
		// 계속 누르고있을때 최초에 누른 시점에 0.5초 후부터 0.1초마다 1씩 증가
		keepNumberUp: () => {},
		// 계속 누르고있을때 최초에 누른 시점에 0.5초 후부터 0.1초마다 1씩 감소
		keepNumberDown: () => {},
		// 사용자가 값을 입력한 후 blur시 숫자 외 글자는 모두 지워짐
		leaveOnlyNumber: () => {},
		// 입력한 숫자가 100~300 범위를 벗어나면, blur시 100미만은 100으로, 300초과는 300으로 설정
		setNumberToBoundary: () => {}
	};

	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
		module.exports = spinboxHandlers;
	} else {
		window.spinboxHandlers = spinboxHandlers;
	}
})();
