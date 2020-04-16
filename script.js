// Write your JavaScript code here!
window.addEventListener('load',function(){
   let form = document.querySelector("form");
   let index = 0;
   form.addEventListener('submit',function(){
      event.preventDefault();
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
      let validation = [pilotName.value,coPilotName.value,fuelLevel.value,cargoMass.value]
      for(let i=0; i < validation.length; i++){
         if(validation[i] === ""){
            alert("All fields required.");
            break;
         }
      }
      if(isNaN(validation[2]) || isNaN(validation[3])) {
         alert("Make sure to enter valid information for each field.");
      }
      if(validation[0] !== String || validation[1] !== String){
         alert("Make sure to enter valid information for each field.");
      }
      // if(pilotName.value === ""){
      //    alert("All fields required.");
      // } else if(coPilotName.value === ""){
      //    alert("All fields required.");
      // } else if(isNaN(fuelLevel.value) || fuelLevel.value === ""){
      //    alert("All fields required.");
      // } else if(isNaN(cargoMass.value) || cargoMass.value === ""){
      //    alert("All fields required.");
      // } else {}

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

      if(fuelLevel.value < 10000 && cargoMass.value > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is not ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is not ready for launch.`;
         fuelStatus.innerHTML = "Fuel levels too low for launch.";
         cargoStatus.innerHTML = "Cargo too heavey for launch."
      } else if(fuelLevel.value < 10000 && cargoMass.value < 10000){
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is not ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is not ready for launch.`;
         fuelStatus.innerHTML = "Fuel levels too low for launch.";
      } else if(fuelLevel.value >= 10000 && cargoMass.value > 10000){
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is not ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is not ready for launch.`;
         cargoStatus.innerHTML = "Cargo too heavey for launch.";
      } else if(fuelLevel.value >= 10000 && cargoMass.value < 10000) {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is for launch.`;
      } else{
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         faultyItems.style.visibility = "hidden";
      }

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