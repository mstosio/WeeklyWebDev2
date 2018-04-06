//RWD MOBLIE

var hamburger = document.querySelector(".hamburger_icon");



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

//STICKY NAV

const nav = document.querySelector(".navbar");
const topOfNav = nav.offsetTop;
const mainbanner = document.querySelector(".main-banner");


function fixNav(){
	if(window.scrollY >= 50){
		nav.style.transition = "translate 2s";
		mainbanner.style.paddingTop = 150 + "px";	
		nav.classList.add('fixed-nav');
	} else {
		mainbanner.style.paddingTop = 0 + "px";	
		nav.classList.remove('fixed-nav')
		// nav.classList.add('fixed-nav1');
	}
}


// function addTransition(){
// 	if(window.scrollY >= 50){
// 		nav.style.transition = "all 2s";
// 	} else {
// 		nav.style.transition = "all 2s";
// 	}

// // }

// function addSticky {

// }

// window.addEventListener('scroll', addTransition);
window.addEventListener('scroll', fixNav);


