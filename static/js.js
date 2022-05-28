document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
/* -------------active nav bar*/
const activePge = window.location.href;
const navList = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href == activePge) {
        link.classList.add('active');
      
    }
});
/*---------------- map*/
  let map;

function initMap(z,t) {
  if (z == null ){
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: new google.maps.LatLng(32.0517, 34.7616),
      mapTypeId: "terrain",
    });
  }
  else{
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.LatLng(z, t),
    mapTypeId: "terrain",
  });
}


  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

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


function GetLocation() {
  if (navigator.geolocation) {
  console.log("in get location");
  navigator.geolocation.getCurrentPosition(showPosition);
  } else {
  document.getElementById("location_p").innerHTML="Geolocation is not supported by this browser.";
  }
  document.getElementById("map").style.visibility = "visible";
  document.getElementById("afterNearby").style.visibility = "visible";
}
  function showPosition(position) {
      var z = position.coords.latitude;
      var t = position.coords.longitude;
      initMap(z,t);
      // var x = document.getElementById("location_p");
      // var y = document.getElementsByClassName("button");
      // x.innerHTML = "Your In <br>" + "Latitude: " + position.coords.latitude +
      // "<br>Longitude: " + position.coords.longitude;
      // y.innerHTML = "try me again";
      // console.log(position);
  }
function showMap(){
  var e = document.getElementsByName('cities')[0];
  alert(e.value);
  // initMap(32.1093,34.8554);
}

function showPicture() {
  var sourceOfPicture = "../static/Parking Pictures.png";
  var img = document.getElementById('parking_pic')
  img.src = sourceOfPicture.replace('10x10', '10x10');
  img.height = 350;
  img.widht = 450;
  img.style.display = "block";
}
