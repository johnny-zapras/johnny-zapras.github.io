var menuOptions = ['Home', 'About', 'Portfolio', 'Contact'];


function createNavBar(navigationBar){
	for(var i=0; i<menuOptions.length; i++){
		var listItem = document.createElement('li');
		listItem.className = "menuItems";
		var associatedLink = document.createElement('a');
		associatedLink.href = "mobileVersion.html";
		associatedLink.innerHTML = menuOptions[i];
		associatedLink.className = "menuItemsLinks"
		listItem.appendChild(associatedLink);
		navigationBar.appendChild(listItem);
	}
}

window.addEventListener("load", function navAndName(){
	var navBar = document.getElementById("menuBar");
	createNavBar(navBar);
	console.log(window.location.pathname);
	console.log(window.location.href.toString());
	console.log("butt");
});
