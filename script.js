$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Mookie", weight:"40 lbs", happiness:"1000" energy: "1000"};
  
    function clickedTreatButton() {
        pet_info.happiness += 10; // Treats make the pet happier
        pet_info.weight += 2; // Treats make Mookie heavier
        pet_info.energy += 10; // Treats also give Mookie energy
        showPetMessage("More please!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
        pet_info.happiness += 20; 
        pet_info.weight -= 1;
        pet_info.energy -= 5;
        showPetMessage("More play!);
      // Decrease pet weight
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
        pet_info.happiness -= 5;
        pet_info.weight -= 2;
        pet_info.energy -= 10;
      // Decrease pet weight
        showPetMessage("Running hard :/);
      checkAndUpdatePetInfoInHtml();
    }

    function clickedNapButton() {
        pet_info.energy += 25;
        pet_info.happiness += 5;
        showPetMessage("mimis time... zzzz...");
        checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();
        if (pet_info.weight < 0) {
            pet_info.weight = 0;
        }
        if (pet_info.happiness < 0) {
            pet_info.happiness = 0;
        }
        if (pet_info.energy < 0) {
            pet_info.energy = 0;
        }
        if (pet_info.energy > 100) {
            pet_info.energy = 100;
        }
    }
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
        $('.name').text(pet_info.name);
        $('.weight').text(pet_info.weight);
        $('.happiness').text(pet_info.happiness);
        $('.energy').text(pet_info.energy);
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);          
      $('.happiness').text(pet_info['happiness']);
      $('.pet-image').toggleClass('happy', pet_info.happiness >= 100); // .toggleClass adds a class if the condition is true and removes if false
    }

function showPetMessage(message) {
    $('.pet-message').text(message).addClass('show'); // .addClass adds a CSS class to the element without affecting other classes. Adds "show" to the message paragraph and the CSS rule .pet-message
    
  
