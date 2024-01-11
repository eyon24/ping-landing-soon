function email() {
  let email = document.querySelector("#input").value;
  let btn = document.querySelector("#btn");

  btn.addEventListener("click", validateEmail(email));
}

function validateEmail(email) {
  const errmsg = document.getElementById("error-msg");
  const errinput = document.getElementById("input");

  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errmsg.classList.remove("show");
    errinput.classList.remove("input-error");
    alert("Thank you for subscribing. You will be notified when we launch!");
  } else {
    errmsg.classList.add("show");
    errinput.classList.add("input-error");
  }
}
