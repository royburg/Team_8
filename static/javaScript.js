<<<<<<< HEAD
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  document.getElementById('contact-form').addEventListener('submit',function(){alert("Thank you for your message!  \nWe will contact you as soon as possible :)")},false) ;
=======
 document.querySelector('#contact-form').addEventListener('submit', (e) => {
     e.preventDefault();
     e.target.elements.name.value = '';
     e.target.elements.email.value = '';
     e.target.elements.message.value = '';
});

  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.LatLng(31.2573952, 34.8028928),
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);

    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;
<<<<<<< HEAD

function showPicture() {
  var sourceOfPicture = "../static/Parking Pictures.png";
  var img = document.getElementById('parking_pic')
  img.src = sourceOfPicture.replace('10x10', '10x10');
  img.height = 350;
  img.widht = 450;
  img.style.display = "block";
}
function showMap(){
  console.log('hello');
  var e = document.getElementsByName('cities')[0];
  alert(e.value);
  }
=======
>>>>>>> 6dfda598b01103e7ee9c353ecde1e28394dbaf18
>>>>>>> caabd7591830b3cc2e5d54218d6b973c32e96b18
