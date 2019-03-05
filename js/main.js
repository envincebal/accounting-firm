// Initialize and adds the map
function initMap() {
  // Random location for fictitious business
  const loc = {
    lat: 42.361145,
    lng: -71.057083
  }
  // Centers map onto location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  // The marker is positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  })
}