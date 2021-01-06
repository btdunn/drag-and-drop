console.log("JavaScript loaded");

baseURL = "http://localhost:3000";
dogsURL = `${baseURL}/dogs`;

const dogsSection = document.querySelector("section");

fetch(dogsURL)
  .then(parseJSON)
  .then(displayDogs);

function displayDogs(dogs) {
  dogs.forEach(showDog);
}

function showDog(dog) {
  const dogCard = document.createElement("div");
  dogCard.classList.add('dog-card');
  dogCard.draggable = "true";
  setDogCardDragEvents(dogCard);
  const name = document.createElement("h2");
  name.textContent = dog.name; 
  const age = document.createElement("p");
  age.textContent = `${dog.age} years old`;
  dogCard.append(name, age);
  dogsSection.append(dogCard);
}


function parseJSON(response) {
  return response.json();
}

function setDogCardDragEvents(dogCard) {
  dogCard.addEventListener('drag', (event) => {
    const dragCard = event.target;
    console.log('drag');
  });
  dogCard.addEventListener('dragstart', (event) => {
    const dragCard = event.target;
    console.log('dragstart');
    dragCard.classList.add('dragging');
  });
  dogCard.addEventListener('dragend', (event) => {
    const dragCard = event.target;
    console.log('dragend');
    dragCard.classList.remove('dragging');  
  })
}