(function(){

	var stop = document.getElementById('start');
	var stop = document.getElementById('stop');
	var result = document.getElementById('result');
	var startTime;
	var isStarted = false;

	start.addEventListener('click',function(){
		result.className='stanbay';
		if(isStarted===true){
			return;
		}
		result.textContent='0.000'
		isStarted = true;
		this.className = 'pushed';
		stop.className='';
		startTime = Date.now();	
	});

	stop.addEventListener('click',function(){
		if(isStarted === false){
			return;
		}
		var elapsedTime;
		isStarted = false;
		this.className = 'pushed';
		start.className='';
		result.className='';

		elapsedTime = (Date.now() - startTime)/1000;
	// elapsedTime =0.2;
	result.textContent=elapsedTime.toFixed(3);// this is for fixing design,the Number set in middele.(when elapsedTime is single  
 
	var diff;
	diff = 5.0 - elapsedTime;

	// if(diff > -1.0 && diff < 1.0){ //下記の方法も同じこと（下記は絶対値を返す）
		if(Math.abs(diff) < 1){ 
			result.className = 'perfect';
		}

	});

	

})();





