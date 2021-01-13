const mapBlock = document.querySelector('#map');
const breakpointMd = window.matchMedia('(min-width:768px)');
const breakpointLg = window.matchMedia('(min-width:1440px)');

const mapState = {
  latitude: 59.938635,
  longitude: 30.323118,
  iconWidth: 57,
  iconHeight: 53
};

if (breakpointMd.matches) {
  mapState.iconWidth = 113;
  mapState.iconHeight = 106;
}

if (breakpointLg.matches) {
  mapState.longitude =  30.323118;
}

if (mapBlock) {
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map(mapBlock, {
      center: [mapState.latitude, mapState.longitude],
      zoom: 17,
    });
    const myPlacemark = new ymaps.Placemark(
      [59.938635, 30.323118],
      {
        hintContent: 'ул. Большая Конюшенная, д. 19/8',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin-mobile.png',
        iconImageSize: [mapState.iconWidth, mapState.iconHeight],
        iconImageOffset: [-mapState.iconWidth / 2, -mapState.iconHeight / 2],
      },
    );

    myMap.geoObjects.add(myPlacemark);
  }
}
