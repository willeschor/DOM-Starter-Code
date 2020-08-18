const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun1Input = document.getElementById('noun1Input');
const noun2Input = document.getElementById('noun2Input')
const noun2 = document.getElementById('noun2')
const verb1 = document.getElementById('verb1')
const verb1Input = document.getElementById('verb1Input')
const bodyContainer = document.getElementById("container")
const additionalText = "Hey This is RAD!!"
const radButton = document.getElementById("radButton")
myButton.addEventListener('click', function (event) {
   event.preventDefault(); //stops the regular behavior of the event allows for an assignment of new behavior 
  verb1.innerHTML = verb1Input.value;
  noun1.innerHTML = noun1Input.value;
  noun2.innerHTML = noun2Input.value;
});

radButton.addEventListener('click', function(event) {
  event.preventDefault();

  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = additionalText;
  bodyContainer.appendChild(newParagraph);

})