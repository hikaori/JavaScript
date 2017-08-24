(function(){
	'use strict'

	var timer = document.getElementById('timer');
	var start = document.getElementById('start');
	var stop = document.getElementById('stop');
	var reset = document.getElementById('reset');

	function updateTimerText(){
	//135.2秒　= 135200ミリ秒
	//135.2秒　-> 2:15.200（2分15.2秒）
	// m = 135200 / 60000 の商
	// s = 135200 % 60000 /1000（ミリ秒になっているので1000で割る）
	// ms= 135200 % 1000
	var m = Math.floor(elapsedTime / 60000);
	var s = Math.floor(elapsedTime % 60000 /1000);
	var ms = elapsedTime % 1000;

	m=('0'+m).slice(-2);
	s=('0'+s).slice(-2);
	ms=('00'+ms).slice(-3);
	timer.textContent = m + ':'+ s + '.' + ms;
}

var elapsedTime;
var timerId;
var timeToAdd = 0;
var isRunning = false;

function countUp(){
	timerId = setTimeout(function(){
		elapsedTime = Date.now()-startTime + timeToAdd;
		updateTimerText();
			// console.log(elapsedTime);
			countUp();
		},10);
}

var startTime;

// start.className = 'btn';
// stop.className ='btn inactive';
// reset.className='btn inactive';

function updateButtonState(startButtonState,stopButtonState,resetButtonState){
	start.className = startButtonState ? 'btn' : 'btn inactive';
	stop.className = stopButtonState ? 'btn' : 'btn inactive';
	reset.className = resetButtonState ? 'btn' : 'btn inactive';
}

updateButtonState(true,false,false);

start.addEventListener('click', function(){
	if(isRunning === true){
		return;
	}
	// start: false, stop: true , reset: false;
	updateButtonState(false,true,false);
	isRunning = true;
	startTime = Date.now();
	countUp();
});


stop.addEventListener('click', function(){
	if(isRunning === false){
		return;
	}
	// start: true, stop: false , reset: true;
	updateButtonState(true,false,true);
	isRunning = false;
	clearTimeout(timerId);//タイマーを止めるメソッド
	timeToAdd += Date.now() - startTime;
});

reset.addEventListener('click', function(){
	if(isRunning === true){
		return;
	}
	// start: true, stop: false , reset: false;
	updateButtonState(true,false,false);
	elapsedTime = 0;
	timeToAdd = 0;
	updateTimerText();
});

})();