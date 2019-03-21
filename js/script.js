(function () {
  "use strict";

  document.querySelector(".js-img-map").classList.add("map__img--hidden");

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
