var list = localStorage.getItem('KeepHistoryRecorder');
if (list === null) {
	list = [];
	var value = document.getElementById('lst-ib').value;
	if (list.indexOf(value) == -1) {
		list.push(value);
	}
	localStorage.setItem('KeepHistoryRecorder', JSON.stringify(list));
}
var count = 0;
document.onkeydown = function (e) {
	if (e.target.id == "lst-ib") {
		if (e.keyCode == 40) {
			list = JSON.parse(localStorage.getItem('KeepHistoryRecorder'));
			console.log('onkeydown', list, count);
			var length = list.length;
			if (length > 1) {
				if (count < length - 1) {
					document.getElementById('lst-ib').value = list[length - 2 - count];
					count++;
				} else {
					document.getElementById('lst-ib').value = list[length - 1];
					count = 0;
				}
			}
		}		
	}
	if (e.keyCode == 13) {
		console.log('enter hit');
		list = JSON.parse(localStorage.getItem('KeepHistoryRecorder'));
		var value = document.getElementById('lst-ib').value;
		if (list.indexOf(value) == -1) {
			list.push(value);
			localStorage.setItem('KeepHistoryRecorder', JSON.stringify(list));
		}
	}
};

document.getElementsByClassName('sbico-c')[0].onclick = function (e) {
	list = JSON.parse(localStorage.getItem('KeepHistoryRecorder'));
	var value = document.getElementById('lst-ib').value;
	if (list.indexOf(value) == -1) {
		list.push(value);
		localStorage.setItem('KeepHistoryRecorder', JSON.stringify(list));
	}
};