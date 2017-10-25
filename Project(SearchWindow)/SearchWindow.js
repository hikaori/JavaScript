document.addEventListener('DOMContentLoaded', function(){ 

	var shortWord={
	'news':'https://news.google.com/news/?ned=ca&gl=CA&hl=en-CA', // Google
	'you' : 'https://www.youtube.com/', //youtube
	'git' : 'https://github.com/hikaori' //github
	};

	var btn = document.getElementById('btn');
	console.log(btn);

	btn.addEventListener("click",jumpToLink);

	function jumpToLink(){
		var input = document.getElementById('searchWindow').value;
		if(shortWord[input] != undefined ||shortWord[input] != null){
			window.location = shortWord[input];
		}
		else{
			window.location = "https://www.google.ca/search?q=" + input;
		}
		
	};

});
