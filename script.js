/**
 * script.js — Portfolio: Jeevika BM
 *
 * Responsibilities:
 *   1. Mobile nav toggle (hamburger open / close)
 *   2. Close nav when a link is tapped on mobile
 *
 * No other DOM manipulation. No frameworks. No external dependencies.
 */

(function () {
  'use strict';

  const hamburger = document.querySelector('.nav__hamburger');
  const menu      = document.querySelector('.nav__menu');
  const navLinks  = document.querySelectorAll('.nav__link');

  if (!hamburger || !menu) return;

  /** Open the mobile menu */
  function openMenu() {
    menu.classList.add('nav--open');
    menu.style.maxHeight = menu.scrollHeight + 'px';
    menu.style.visibility = 'visible';
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
  }

  /** Close the mobile menu */
  function closeMenu() {
    menu.classList.remove('nav--open');
    menu.style.maxHeight = '0';
    menu.style.visibility = 'hidden';
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
  }

  /** Toggle on hamburger click */
  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  /** Close when any nav link is activated */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (hamburger.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });
  });

}());
