document.addEventListener('DOMContentLoaded', function(){ 

	var shortWord={
	'goo':'http://www.google.co.jp/', // Google
	'you' : 'https://www.youtube.com/', //youtube
	'git' : 'https://github.com/hikaori' //github
	};

	var btn = document.getElementById('btn');
	console.log(btn);

	btn.addEventListener("click",jumpToLink);

	function jumpToLink(){
		var input = document.getElementById('searchWindow').value;
		// console.log(input);
		// console.log(shortWord[input]);
		// console.log(shortWord.goo);
		window.location = shortWord[input]
	};

});
