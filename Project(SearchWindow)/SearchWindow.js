// document.addEventListener('DOMContentLoaded', function(){ 

	var shortWord={
		'news':'https://news.google.com/news/?ned=ca&gl=CA&hl=en-CA', // Google
		'you' : 'https://www.youtube.com/', //youtube
		'git' : 'https://github.com/hikaori' //github
	};

	//Get the button that jump to link
	var btnSearch = document.getElementById('btnSearch');
	//Get the button that opens the modal
	var btnAdd = document.getElementById('btnAdd');
	//Get the area that jas list of shortcut
	var shortcutList = document.querySelector('#shortcut');
	// var shortcut = document.querySelectorAll('#shortcut li'); //document.getElementById('shortcuts').getElementsByTagName('li')

	//link to site after cliked the search button
	btnSearch.addEventListener("click",jumpToLink);
	function jumpToLink(){
		var input = document.getElementById('searchWindow').value;
		if(shortWord[input] != undefined ||shortWord[input] != null){
			window.location = shortWord[input];
		}
		else{
			window.location = "https://www.google.ca/search?q=" + input;
		}
	};

	// Get the modal
	var modal = document.getElementById('myModal');
	// Get the button elent that close the modal and create value of 'shortword' object
	var btnCreate = document.querySelector('#create');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	

	// When the user clicks on the button, open the modal 
	btnAdd.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modalClose();
	    }
	}


	btnCreate.onclick = function(){
		// get value of input
		var newShortcut = document.querySelector('#newShortcut').value;
		var newShortCutDisc = document.querySelector('#newShortCutDisc').value;
		var newShortCutLink = document.querySelector('#newShortCutLink').value;
		
		// create text which display when modal closed.
		var newItem = document.createElement("LI");
	    var textnode = document.createTextNode(newShortcut + ":" + newShortCutDisc);
	    newItem.appendChild(textnode);
	    // insert text to top of short cut list
	    shortcutList.insertBefore(newItem, shortcutList.childNodes[0]);

	    // create new shortcut propaty(key:newShortcut value:newShortcutLink) in shortWord
	    shortWord[newShortcut] = newShortCutLink;

	    modalClose();
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function(){
		modalClose();
	}

	function modalClose(){
		//close modal
		modal.style.display = "none";

		// reset input in modal
		newShortcut.value = "";
		newShortCutDisc.value = "";
		newShortCutLink.value = "";
	}
// });
