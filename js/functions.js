document.addEventListener("DOMContentLoaded", function() {
  let navItems = document.querySelectorAll(".menu > nav > ul > li > a");
  let header = document.getElementsByTagName("header")[0];
  
  for (var i = 0; i < navItems.length; i++) {
	  navItems[i].addEventListener("click", function() {
		  console.log("clicked");
		  header.style.backgroundColor = "red";
		  
		  setTimeout(function () {
			  header.style.backgroundColor = "white";
		  }, 2000);
	  });
  }
  
  let footerLinks = document.querySelectorAll(".links > ul > li > a");
  let listElement = document.getElementsByClassName("footer-links")[0];
  
  for(var i = 0; i < footerLinks.length; i++) {
	  footerLinks[i].addEventListener("click", function() {
		  for (var i = 0; i < listElement.children.length; i++) {
			  listElement.appendChild(listElement.children[Math.random() * i | 0]);
		  }
	  });
  }
  
  let footerForm = document.getElementsByClassName("personal-info")[0];
  
  footerForm.onsubmit = function() {
	  let nameInput = footerForm.elements[0].value;
	  let addressInput = footerForm.elements[1].value;
	  let cityInput = footerForm.elements[2].value;
	  
	  alert("Name: " + nameInput + "\nAddress: " + addressInput + "\nCity: " + cityInput);
  };
  
});