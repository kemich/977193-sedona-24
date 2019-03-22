(function () {
  "use strict";

  var searchForm, searchFormTrigger, inputs;

  searchForm = document.querySelector(".search__form");
  searchFormTrigger = document.querySelector(".search__link");
  inputs = searchForm.querySelectorAll("[name]");

  searchFormTrigger.addEventListener("click", function (event) {
    event.preventDefault();
    if (searchForm.classList.contains("search__form--show")) {
      searchForm.classList.remove("search__form--show");
      searchForm.classList.remove("search__form--error");
      inputs[0].focus();
    } else {
      searchForm.classList.add("search__form--show");
    }
  }, false);

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (searchForm.classList.contains("search__form--show")) {
        searchForm.classList.remove("search__form--show");
        searchForm.classList.remove("search__form--error");

        inputs[0].focus();
      } else {
        searchForm.classList.add("search__form--show");
      }
    }
  }, false);

  searchForm.addEventListener("submit", function (event) {
    var i, input;
    for (i = inputs.length - 1; i >= 0; i--) {
      input = inputs[i];
      if (!input.value) {
        event.preventDefault();
        searchForm.classList.remove("search__form--error");
        searchForm.offsetWidth;
        searchForm.classList.add("search__form--error");
        input.focus();
      }
    }
  }, false);

}());

(function () {
  "use strict";
  var elements, i, length;

  function setElement(element) {
    var name = element.getAttribute("name");
    element.value = localStorage.getItem(name) || "";
    element.addEventListener("keyup", function (event) {
      event.preventDefault();
      localStorage.setItem(name, element.value);
    }, false);
  }
  if (window.localStorage) {
    elements = document.querySelectorAll("[name]");
    for (i = 0, length = elements.length; i < length; i = i + 1) {
      setElement(elements[i]);
    }
  }

}());
(function () {
  "use strict";

  document.querySelector(".map__img").classList.add("map__img--hidden");

  ymaps.ready(init);

  var myMap, myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [34.869497, -111.760186],
      behaviors: ["default", "scrollZoom"],
      zoom: 8
    });
    myMap.controls
      .add("zoomControl", {
        left: 5,
        top: 5
      })
    myPlacemark = new ymaps.Placemark([34.869497, -111.760186]);
    myMap.geoObjects
      .add(myPlacemark);
  }
}());
