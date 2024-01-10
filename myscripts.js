function email() {
  let email = document.querySelector("#input").value;
  let btn = document.querySelector("#btn");

  btn.addEventListener("click", validateEmail(email));
}

function validateEmail(email) {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    alert("Thank you for subscribing. You will be notified when we launch!");
  } else {
    alert("Please enter a valid email.");
  }
}
