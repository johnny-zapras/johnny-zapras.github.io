var menuOptions = ['Home', 'About', 'Portfolio', 'Contact'];


function createNavBar(navigationBar){
	for(var i=0; i<menuOptions.length; i++){
		var listItem = document.createElement('li');
		listItem.innerHTML = menuOptions[i];
		listItem.id = "menuItems";
		var associatedLink = document.createElement('a');
		associatedLink.href = "currentPage.html";
		listItem.appendChild(associatedLink);
		navigationBar.appendChild(listItem);
	}
}

window.addEventListener("load", function navAndName(){
	var navBar = document.getElementById("menuBar");
	createNavBar(navBar);
}, false);
