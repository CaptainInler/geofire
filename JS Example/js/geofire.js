(function() {
  // Initialize the Firebase SDK
  firebase.initializeApp({
    apiKey: "AIzaSyBanU8Aa7n7PJpjkRV8IzPejK6fwUSA9OY",
    databaseURL: "https://testgeofire-de396.firebaseio.com/"
  });

  // Generate a random Firebase location
  let firebaseRef = firebase.database().ref('TopNode');

  // Create a new GeoFire instance at the random Firebase location
  let geoFire = new GeoFire(firebaseRef);


  // Log the location of the selected fish every time the get fish location button is clicked
  document.getElementById("getFishLocation").addEventListener("click", function() {

    
    let geoQuery = geoFire.query({
      center: [-40, 159],
      radius: 700
    });
    
      geoQuery.on("key_entered", function(key, location, distance) {
        log(key + " is located at [" + location + "] which is within the query (" + distance.toFixed(2) + " km from center)");
      });
    
  });


  /*************/
  /*  HELPERS  */
  /*************/
  /* Logs to the page instead of the console */
  function log(message) {
    let childDiv = document.createElement("div");
    let textNode = document.createTextNode(message);
    childDiv.appendChild(textNode);
    document.getElementById("log").appendChild(childDiv);
  }
})();
