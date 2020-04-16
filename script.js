// Write your JavaScript code here!
window.addEventListener('load',function(){
   let form = document.querySelector("form");
   let index = 0;
   let pilotName = document.getElementById("pilotName");
   let coPilotName = document.getElementById("coPilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   
   form.addEventListener('submit',function(){
      event.preventDefault();
      if(pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields required.");
      } else if(isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))){
         alert("Fuel level and Cargo mass require number inputs.");
      } else {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is ready for launch.`;
      }
      if(Number(fuelLevel.value) < 10000){
         fuelStatus.innerHTML = "Fuel level too low for launch.";
      } else {
         fuelStatus.innerHTML = "Fuel level high enough for launch.";
      }
      if(Number(cargoMass.value) > 10000){
         cargoStatus.innerHTML = "Cargo too heavey for launch.";
      } else {
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
      }
      if(Number(cargoMass.value) > 10000 || Number(fuelLevel.value) < 10000){
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = "Shuttle ready for launch";
         launchStatus.style.color = "green";
      }


      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            let missionTarget = document.getElementById("missionTarget");
               missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distanceFromEarth}</li>
                  <li>Number of Moons: ${json[index].numberOfMoons}</li>
               </ol>
               <img src="${json[index].image}">
             `;
            index = (index + 1) % json.length;
         });
      }); 
   })
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/