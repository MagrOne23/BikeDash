javascript
// Check if geolocation is supported by the browser
if ('geolocation' in navigator) {
 // Get the current position of the user
 navigator.geolocation.getCurrentPosition(function(position) {
    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: { lat: position.coords.latitude, lng: position.coords.longitude }
    });

    // Create a new marker instance
    var marker = new google.maps.Marker({
      position: { lat: position.coords.latitude, lng: position.coords.longitude },
      map: map
    });

    // Create a new info window instance
    var infoWindow = new google.maps.InfoWindow({
      content: 'Your current location'
    });

    // Open the info window on the marker
    infoWindow.open(map, marker);

    // Add a click event listener to the map
    google.maps.event.addListener(map, 'click', function(event) {
      // Close the info window
      infoWindow.close();

      // Create a new marker instance
      var newMarker = new google.maps.Marker({
        position: event.latLng,
        map: map
      });

      // Create a new info window instance
      var newInfoWindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + event.latLng.lat() + '<br>Longitude: ' + event.latLng.lng()
      });

      // Open the info window on the new marker
      newInfoWindow.open(map, newMarker);
    });
 });
} else {
 alert('Geolocation is not supported by your browser.');
}