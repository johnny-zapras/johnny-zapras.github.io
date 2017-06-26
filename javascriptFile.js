var menuOptions = ['Home', 'About', 'Portfolio', 'Contact'];


function createNavBar(navigationBar){
	for(var i=0; i<menuOptions.length; i++){
		var listItem = document.create('li');
		listItem.innerHTML = menuOptions[i];
		navigationBar.appendChild(listItem);
	}
}

window.addEventListener("load", function navAndName(){
	var navBar = document.getElementById("menuBar").innerHTML;
	createNavBar(navBar);
}, false);
