 function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapProp = {
      center: new google.maps.LatLng(35.5403, -82.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(mapCanvas, mapProp)
}
google.maps.event.addDomListener(window, 'load', initialize);