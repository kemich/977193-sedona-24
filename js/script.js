(function () {
  "use strict";

  document.querySelector(".js-img-map").style.cssText = "display: none;";

  ymaps.ready(init);

  var myMap, myPlacemark;

  function init() {
    myMap = new ymaps.Map("ya-map", {
      center: [59.939523, 30.329727],
      behaviors: ["default", "scrollZoom"],
      zoom: 16
    });
    myMap.controls
      .add("zoomControl", {
        left: 5,
        top: 5
      })
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      balloonContent: "ул. Большая Конюшенная 19/8"
    }, {
      iconImageHref: "img/pic-1.jpg",
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140]
    });
    myMap.geoObjects
      .add(myPlacemark);
  }
}());
