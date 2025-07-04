"use strict";
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, n) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === r && e.constructor && (r = e.constructor.name),
      "Map" === r || "Set" === r
        ? Array.from(e)
        : "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? _arrayLikeToArray(e, n)
        : void 0
    );
  }
}
function _iterableToArray(e) {
  if (
    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, n) {
  (null == n || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
  return t;
}
var header = document.querySelector("#header"),
  navToggle = document.getElementById("nav__toggle"),
  navbar = document.querySelector(".nav"),
  navLinks = document.querySelector(".nav__links"),
  navLink = document.querySelectorAll(".nav__link"),
  overlay = document.querySelector("#overlay"),
  sections = document.querySelectorAll("section"),
  fabButton = document.querySelector(".fab-button");
function toggleMenu() {
  (fabButton.style.display = "none"),
    overlay.classList.toggle("overlay"),
    navbar.classList.toggle("nav--open-menu"),
    header.classList.add("bg-dark", "box-shadow");
}
function navHighlighter() {
  var e = window.pageYOffset,
    n = "";
  sections.forEach(function (r) {
    var t = r.offsetTop - 60;
    e >= t && (n = r.getAttribute("id"));
  }),
    navLink.forEach(function (e) {
      e.href.includes(n)
        ? e.classList.add("nav__link--active")
        : e.classList.remove("nav__link--active");
    });
}
function scrollToTop() {
  (document.body.scrollTop = 0),
    (document.documentElement.scrollTop = 0),
    overlay.classList.remove("overlay"),
    navbar.classList.remove("nav--open-menu"),
    history.replaceState(null, "", location.origin);
}
function showFabButton() {
  document.body.scrollTop > 60 || document.documentElement.scrollTop > 60
    ? (fabButton.style.display = "block")
    : (fabButton.style.display = "none");
}
window.addEventListener("resize", function () {
  window.innerWidth > 500 &&
    (navbar.classList.remove("nav--open-menu"),
    overlay.classList.remove("overlay"));
}),
  document.documentElement.style.setProperty(
    "--scroll-padding",
    header.offsetHeight - 1 + "px"
  ),
  (window.onscroll = function () {
    window.pageYOffset > 80 || navbar.classList.contains("nav--open-menu")
      ? (header.classList.add("bg-dark", "box-shadow"),
        navbar.classList.add("nav__brand--shrink"))
      : (header.classList.remove("bg-dark", "box-shadow"),
        navbar.classList.remove("nav__brand--shrink")),
      navHighlighter(),
      showFabButton();
  }),
  navToggle.addEventListener("click", function () {
    toggleMenu();
  }),
  navLink.forEach(function (e) {
    e.addEventListener("click", function () {
      window.innerWidth > 768
        ? (navbar.classList.remove("nav--open-menu"),
          overlay.classList.remove("overlay"))
        : toggleMenu(),
        e.classList.add("nav__link--active"),
        (siblingLinks = _toConsumableArray(navLink).filter(function (n) {
          return n != e;
        })),
        siblingLinks.forEach(function (e) {
          e.classList.remove("nav__link--active");
        });
    });
  });
var swiper = new Swiper(".testimonials ", {
  slidesPerView: 1,
  spaceBetween: 35,
  slidesPerGroup: 1,
  grabCursor: !0,
  centerSlide: !0,
  fade: !0,
  pagination: { el: ".swiper-pagination", clickable: !0, dynamicBullets: !0 },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 30, slidesPerGroup: 2 },
    960: { spaceBetween: 60, slidesPerView: 2, slidesPerGroup: 2 },
  },
});
//# sourceMappingURL=script.js.map
