//RWD MOBLIE

var hamburger = document.querySelector(".hamburger_icon");


hamburger.addEventListener("click", function(){
		var y = document.querySelector(".navbar_menu ul");
		var navbar = document.querySelector(".navbar");
		if (y.style.display === "none") {
			y.style.display = "block";
			navbar.classList.add('navbar--clicked');
	    } else {
			y.style.display = "none";
			navbar.classList.remove('navbar--clicked');
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
const header = document.querySelector('#header');
const burger = document.querySelector('.hamburger');


function fixNav(){
	if(window.scrollY >= 50){
		nav.style.transition = "translate 2s";
		nav.style.paddingBottom = 10 + "px";
		nav.classList.add('fixed-nav');
	} else {
		mainbanner.style.paddingTop = 0 + "px";	
		nav.classList.remove('fixed-nav');
	}
}




// window.addEventListener('scroll', addTransition);
window.addEventListener('scroll', fixNav);


//SMOOTH SCROLL

// Scroll to specific values
// // scrollTo is the same
// window.scroll({
// 	top: 2500, 
// 	left: 0, 
// 	behavior: 'smooth' <pre rel="HTML"><code markup="tt" class="language-markup">
//   });


