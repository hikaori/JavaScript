
var luckElement = ["very good luck" ,"good luck","average good luck","bad luck"];

var btn = document.getElementById("elementTxt");

btn.addEventListener('click',function(){
	// var pickedLuck = luckElement[Math.floor(Math.random()*luckElement.length)];	
	// this.textContent = pickedLuck;

// でるおみくじの確率を指定する方法
var n = Math.random();
if(n < 0.05){ //5%
	this.textContent="very good luck";
}else if(n < 0.2){ //15%
	this.textContent="average good luck";
}
else{
	this.textContent="bad luck";
}


});

// CHANGE STYLE WHEN THE FORTUNE PUSHED 
btn.addEventListener('mousedown',function(){
	this.className = 'pushed';
});

// CHANGE STYLE AFTER THE FORTUNE PUSHED 
btn.addEventListener('mouseup',function(){
	this.className = '';
});
