 let deviceLongitude = null;
 let deviceLatitude = null;

 const displayCoordinates = document.getElementById("display-coordinates");

 const showPosition = (coordinates) => {
   console.log("showPosition function called");
   deviceLongitude = coordinates.coords.longitude;
   deviceLatitude = coordinates.coords.latitude;
   console.log("Longitud: " + deviceLongitude);
   console.log("Latitud: " + deviceLatitude);

   displayCoordinates.innerHTML = "Longitud: " + deviceLongitude + "<br/>   Latitud: " + deviceLatitude;
 }

 var variable1 = "Esta es una variable declarada con var. Puede ser reasignada y redeclarada en el mismo ámbito.";
 var variable2 = "Esta es otra variable declarada con var. Al igual que variable1, puede ser reasignada y redeclarada en el mismo ámbito.";
 var variable3 = "Esta es la tercera variable declarada con var. También puede ser reasignada y redeclarada en el mismo ámbito.";

 const constante1 = "Esta es una constante declarada con const. No puede ser reasignada ni redeclarada en el mismo ámbito.";
 const constante2 = "Esta es otra constante declarada con const. Al igual que constante1, no puede ser reasignada ni redeclarada en el mismo ámbito.";

 const myLocation = () => {
   console.log("myLocation function called");
   console.log("Longitud: " + deviceLongitude);
   console.log("Latitud: " + deviceLatitude);
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
   } else {
     displayCoordinates.innerHTML = "Tu ubicación está bloqueada. Por favor habilite el permiso de ubicación.";
   }
 }

 const concatenacion = "Longitud: " + deviceLongitude + " Latitud: " + deviceLatitude;


