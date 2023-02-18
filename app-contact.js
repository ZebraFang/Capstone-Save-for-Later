/*
I am usuing local storage so please clear out your local storage when finished viewing my project, thanks.
I am also using using individual js files to avoid clashes in script
*/

//Setting up the selectors for text box and submit button
const contactBtnSubmit = document.getElementById("contact-button");
const contactTextBox = document.getElementById("contact-box");

//event listener for contact form button
contactBtnSubmit.addEventListener("click", () => {
  if (contactTextBox.value == "") {
    alert("Hey you can't send a blank message! :D");
  } else {
    alert("Thanks message received!");
    contactTextBox.value = "";
    contactTextBox.focus();
  }
});
