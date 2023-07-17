//Contact Form in PHP
const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/htdocs/php/contact-us.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
// count the char in input
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
  // Set The Progress
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};

