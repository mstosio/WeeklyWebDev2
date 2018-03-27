var hamburger = document.querySelector(".hamburger_icon")




hamburger.addEventListener("click", function(){
		var y = document.querySelector(".navbar_menu ul");
		if (y.style.display === "none") {
	        y.style.display = "block";
	    } else {
	        y.style.display = "none";
	     }
	});


function myFunction(x) {
	var y = document.querySelector(".navbar_menu ul");
    if (x.matches) { 
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addListener(myFunction) 