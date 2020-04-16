// Write your JavaScript code here!
window.addEventListener('load',function(){
   let form = document.querySelector("form");
   form.addEventListener('submit',function(){
      event.preventDefault();
      let pilotName = document.getElementById("pilotName");
      let coPilotName = document.getElementById("coPilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      
      if(pilotName.value === ""){
         alert("All fields required.");
      } else if(coPilotName.value === ""){
         alert("All fields required.");
      } else if(isNaN(fuelLevel.value) || fuelLevel.value === ""){
         alert("All fields required.");
      } else if(isNaN(cargoMass.value) || cargoMass.value === ""){
         alert("All fields required.");
      } else {}
      if(fuelLevel.value < 10000 || cargoMass.value > 10000){
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      }

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const missionTarget = document.getElementById("missionTarget");
            let index = 0;
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