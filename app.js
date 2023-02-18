/*
I am usuing local storage so please clear out your local storage when finished viewing my project, thanks.
*/

//setting up the array and counter variable for the alert
let savedForLaterArr = [];
let savedCounter = 0;
let commentArray = [];

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
    buildComments();
  }
}

//adding selectors and click events
const savedContainerSelector = document.getElementById("saved-items");
const saveButtonSelector = document.querySelectorAll(".save-button");
let commentBox = document.getElementById("comment-form");
const submitBtnComment = document.getElementById("form-submit-btn");
let commentSection = document.getElementById("comment-section");
const radioBtnSubmit = document.getElementById("button-radio");

//click events
//event listener for comment submit button
submitBtnComment.addEventListener("click", (event) => {
  event.preventDefault();
  commentSubmit();
});
//event listener for radio button submit
radioBtnSubmit.addEventListener("click", () => {
  radioFunction();
});

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
    savedCounter = index + 1;
  }

  alert(
    `You haved saved an item for later! You have ${savedCounter} items saved.`
  );
  //Pushing back to storage
  localStorage.setItem("savedCounter", JSON.stringify(savedCounter));
  localStorage.setItem("saved", JSON.stringify(savedForLaterArr));

  load();
}

//This pushes the value of the comment text box to the commentArray
function commentSubmit() {
  //validation for a blank text box
  if (commentBox.value == "") {
    alert("Hey you cant send a blank comment! :D");
  } else {
    commentArray = JSON.parse(localStorage.getItem("commentSection"));
    commentArray.push(commentBox.value);

    localStorage.setItem("commentSection", JSON.stringify(commentArray));

    commentBox.value = "";

    buildComments();
  }
}

//This will build the comments sections
function buildComments() {
  commentArray = JSON.parse(localStorage.getItem("commentSection"));

  commentSection.innerHTML = "";

  commentArray.forEach((element, i) => {
    commentSection.innerHTML += `${i + 1}) ${element} <br>`;
  });
}

// const commentTimeOut = (window.onload = buildComments());

// function commentTimeOutFunction() {
//   setTimeout(commentTimeOut, 3000);
// }

// commentTimeOutFunction();

// function hidden() {
//   saveButtonSelector.classList.add("hidden");
// }
//Radio button submit function
function radioFunction() {
  //If yes is selected this will be the output
  if (document.querySelector('input[name="answer"]:checked').value == "Yes") {
    prompt("Type in your email here to receive news.");
  } else {
  }
}

/*
HyperionDev - JSON
WebDev simplified, Cookies vs localStorage vs sessionStorage https://www.youtube.com/watch?v=GihQAC1I39Q&t=418s
Stackoverflow Getting a radio button value, https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
Design All Day, Comment box, https://www.youtube.com/watch?v=VkA9aJY2MTI

*/
