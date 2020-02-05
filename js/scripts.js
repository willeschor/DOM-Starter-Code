const generateMadLib = document.getElementById('generateMadLib'),
  nounList = document.querySelectorAll('.noun.input'),
  verbList = document.querySelectorAll('.verb.input'),
  nounPlaceholders = document.querySelectorAll('.noun.placeholder'),
  verbPlaceholders = document.querySelectorAll('.verb.placeholder');

function buildArrayOfValues(entries) {
  // Initialize an empty array...
  const arrayOfValues = [];

  // Loop through all the entries passed via the argument
  entries.forEach(function(entry) {
    // Push the value of each entry into an array
    arrayOfValues.push(entry.value);
  });
  // Return the array of values
  return arrayOfValues;
}

generateMadLib.addEventListener('click', function(e) {
  e.preventDefault();

  const nouns = buildArrayOfValues(nounList);
  const verbs = buildArrayOfValues(verbList);

  nounPlaceholders.forEach(function(placeholder, index) {
    placeholder.innerHTML = nouns[index];
  });

  verbPlaceholders.forEach(function(placeholder, index) {
    placeholder.innerHTML = verbs[index];
  });
});
