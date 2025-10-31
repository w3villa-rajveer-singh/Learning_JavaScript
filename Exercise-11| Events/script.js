// Topic: Event handling--

// Q1. Add a button that shows an alert when clicked.

const button = document.getElementById("btn");
button.addEventListener('click', function showAlert(){        //added an event listener
    console.log("Button was clicked!");
});



// Q2. Add a form that prevents submission and logs a message.

const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stops the form from reloading the page
    console.log("Form submission prevented!");
  });
  


// Q3. Use event delegation on a list of items to show which item was clicked.

const list = document.getElementById("itemList");

  // Added one event listener to the parent (ul)
  list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      console.log(`You clicked on: ${event.target.textContent}`);
    }
  });

