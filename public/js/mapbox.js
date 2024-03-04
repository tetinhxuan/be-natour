/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiaWNlbGFuZDEwMjk4IiwiYSI6ImNsdGNxOThiODB0ZXMycm80bThscDRvZHMifQ.8XxDXJhQKRNYd87FBr7xyg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/iceland10298/cltcr7b1b019601pig92d5oq9',
  projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
  scrollZoom: false,
  // zoom: 10,
  // center: [-118, 34],
  // interactive: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';
  // add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // add popup

  new mapboxgl.Popup({
    offset: 40,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: { top: 230, bottom: 130, left: 100, right: 100 },
});
