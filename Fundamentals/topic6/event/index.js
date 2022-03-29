var sendButton = document.querySelector("#sendButton");
var signInButton = document.querySelector("#signInButton");
var fullName = document.querySelector("#fullName");
var handleText = document.querySelector("#handleText");
var textLength = document.querySelector("#textLength");

sendButton.ondblclick = start;

function start() {
  console.log("Click bas verdi");
}

signInButton.addEventListener("click", start);

fullName.addEventListener("input", function (e) {
  var inputTag = e.target;
  // console.log(inputTag.value);
  handleText.innerHTML = "Full Name: " + inputTag.value;
  textLength.innerHTML = inputTag.value.length;
});

fullName.addEventListener("copy", function (e) {
  console.log(fullName.value + "bu text kopyalandi");
});

fullName.addEventListener("keydown", function (e) {
  //   console.log(e.key);
});
