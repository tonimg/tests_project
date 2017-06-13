/* google maps ----------------------------------------------------- */
google.maps.event.addDomListener(window, 'load', initialize)

function initialize () {
  /* position Barcelona */
  var latlng = new google.maps.LatLng(41.381789, 2.172363)

  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 13
  }

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  })

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
  marker.setMap(map)
};
/* end google maps ----------------------------------------------------- */
