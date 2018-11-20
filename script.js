//NAVIGATION

(function () {
  'use strict';
  var hamburger = document.querySelector ('.hamburger_icon');
  var navbutton = document.querySelectorAll ('.navbar_item-navbutton');
  var navbar = document.querySelector ('.navbar');
  var y = document.querySelector ('.navbar_menu ul');
  var x = window.matchMedia ('(max-width: 700px)');

  for (let i = 0; i < navbutton.length; i++) {
    navbutton[i].addEventListener ('click', function () {
      navbar.classList.remove ('navbar--clicked');
      myFunction (x);
    });
  }

  hamburger.addEventListener ('click', function () {
    if (y.style.display === 'none') {
      y.style.display = 'block';
      navbar.classList.add ('navbar--clicked');
    } else {
      y.style.display = 'none';
      navbar.classList.remove ('navbar--clicked');
    }
  });

  function myFunction (x) {
    if (x.matches) {
      y.style.display = 'none';
    } else {
      y.style.display = 'block';
    }
  }

  myFunction (x);
  x.addListener (myFunction);

  //STICKY NAV

  const nav = document.querySelector ('.navbar');
  const topOfNav = nav.offsetTop;
  const mainbanner = document.querySelector ('.main-banner');
  const header = document.querySelector ('#header');
  const burger = document.querySelector ('.hamburger');

  function fixNav () {
    if (window.scrollY >= 0) {
      nav.style.transition = 'translate 2s';
      nav.classList.add ('fixed-nav');
    } else {
      nav.classList.remove ('fixed-nav');
    }
  }

  window.addEventListener ('scroll', fixNav);

  //HIGHLIGHT HREF WHILE SCROLLING

  var section = document.querySelectorAll ('.anchor');
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call (section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop + 50 || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document
          .querySelector ('.navbar_item-navbutton-active')
          .setAttribute ('class', 'navbar_item-navbutton');
        document
          .querySelector ('a[href*=' + i + ']')
          .setAttribute ('class', 'navbar_item-navbutton-active');
      }
    }
  };
}) ();
