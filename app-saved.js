/*
I am usuing local storage so please clear out your local storage when finished viewing my project, thanks.
I am also using using individual js files to avoid clashes in script
*/

// setting up the array and counter variable for the alert
let savedForLaterArr = [];
let savedCounter = 1;

//setting up session storage
function load() {
  //Checking if the localStorage has started
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    localStorage.setItem("saved", JSON.stringify(savedForLaterArr));
    localStorage.setItem("savedCounter", JSON.stringify(savedCounter));
    localStorage.setItem("commentSection", JSON.stringify(commentArray));
    localStorage.setItem("hasCodeRunBefore", true);
  } else {
    savedForLaterArr = JSON.parse(localStorage.getItem("saved"));
    savedCounter = JSON.parse(localStorage.getItem("savedCounter"));
    commentArray = JSON.parse(localStorage.getItem("commentSection"));
  }
}

//adding selectors and click events
const savedContainerSelector = document.getElementById("saved-items");
const saveButtonSelector = document.querySelectorAll(".save-button");
const loadSavedBtn = document.getElementById("load-saved-btn");

//click event to load saved for later

loadSavedBtn.addEventListener("click", buildSaved);

//save to later function
function addToSaveLater(event) {
  //Retrieving from local storage
  savedForLaterArr = JSON.parse(localStorage.getItem("saved"));
  savedCounter = JSON.parse(localStorage.getItem("savedCounter"));
  //Setting a variable to the data on click
  let newSaved = event.outerHTML;
  //Removing \n from the data so that it can be printed later
  let removedEscape = newSaved.replaceAll("\n", "");
  //pushing to the arrray
  savedForLaterArr.push(removedEscape);
  //Setting up the for loop so that the savedCounter reflects hown many items in the array
  for (let index = 0; index < savedForLaterArr.length; index++) {
    savedCounter += index;
  }

  alert(
    `You haved saved an item for later! You have ${savedCounter} items saved.`
  );

  //Pushing back to storage
  localStorage.setItem("savedCounter", JSON.stringify(savedCounter));
  localStorage.setItem("saved", JSON.stringify(savedForLaterArr));
  load();
}
//This is to build the saved later section
function buildSaved() {
  savedForLaterArr = JSON.parse(localStorage.getItem("saved"));
  console.log(savedForLaterArr);

  if (savedForLaterArr == "") {
    alert("There is nothing in your saved folder");
  } else {
    savedForLaterArr.forEach((element) => {
      savedContainerSelector.innerHTML += element;
    });
  }
}
