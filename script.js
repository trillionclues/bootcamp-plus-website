function init() {
  var map = new longdo.Map({
    placeholder: document.getElementById('map'),
    language: 'en',
  })
  map.Layers.setBase(longdo.Layers.GRAY)
  // map.location({ lon: -71.060982, lat: 42.35725 }, true)
  map.location(longdo.LocationMode.Geolocation)
}
