(function(){
	'use strict';

	var comment = document.getElementById('comment');
	var label = document.getElementById('label');
	var LIMIT = 30;
	label.innerHTML = LIMIT;

	comment.addEventListener('keyup',function(){
		var remaining = LIMIT -this.value.length;
		label.innerHTML=remaining;
	});

	var btn = document.getElementsByClassName("btn")

btn.addEventListener('click',function(){
// 	var length=comment.value.length;
// 	label.innerHTML=length;
});


})();
