window.onload = function(){
	var idSet = [7,9]
	function getNum(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
	}
	var urlID = getNum(idSet);
	var xmURL = "http://www.xiami.com/play?ids=/song/playlist/id/1/type/"+urlID+"#open"
	chrome.tabs.create({url:xmURL});
}
