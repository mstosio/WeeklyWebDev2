//NAVIGATION

(function () {
	var hamburger = document.querySelector(".hamburger_icon");
	var navbutton = document.querySelectorAll(".navbar_item-navbutton");
	var navbar = document.querySelector(".navbar");
	var y = document.querySelector(".navbar_menu ul");
	var x = window.matchMedia("(max-width: 700px)")

	for (let i = 0; i < navbutton.length; i++) {
		navbutton[i].addEventListener("click", function () {
			navbar.classList.remove('navbar--clicked');
			myFunction(x);
		})
	}

	hamburger.addEventListener("click", function () {

		if (y.style.display === "none") {
			y.style.display = "block";
			navbar.classList.add('navbar--clicked');
		} else {
			y.style.display = "none";
			navbar.classList.remove('navbar--clicked');
		}
	});

	function myFunction(x) {
		if (x.matches) {
			y.style.display = "none";
		} else {
			y.style.display = "block";

		}
	}

	myFunction(x)
	x.addListener(myFunction)

	//STICKY NAV

	const nav = document.querySelector(".navbar");
	const topOfNav = nav.offsetTop;
	const mainbanner = document.querySelector(".main-banner");
	const header = document.querySelector('#header');
	const burger = document.querySelector('.hamburger');

	function fixNav() {
		if (window.scrollY >= 0) {
			nav.style.transition = "translate 2s";
			// nav.style.paddingBottom = 10 + "px";
			nav.classList.add('fixed-nav');
		} else {
			// mainbanner.style.paddingTop = 0 + "px";	
			nav.classList.remove('fixed-nav');
		}
	}

	window.addEventListener('scroll', fixNav);


})();