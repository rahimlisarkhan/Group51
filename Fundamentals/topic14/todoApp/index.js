let store = JSON.parse(localStorage.getItem("studentData"));

let studentData = store ? store : [];

console.log(studentData);

let renderPage = (arr) => {
  document.querySelector("ul").innerHTML = arr
    .map((person, index) => {
      return `<li>
            <strong>${index + 1}:</strong> 
            ${person.full_name}  | ${person.age}
        </li>`;
    })
    .join("");
};

document.querySelector("#sendButton").addEventListener("click", function (e) {
  e.preventDefault();

  let full_name = document.querySelector("#todoFullName").value;
  let age = document.querySelector("#todoAge").value;

  let form = {
    full_name,
    age,
  };

  //   studentData.push(form)
  studentData = [...studentData, form];
  console.log(studentData);

  localStorage.setItem("studentData", JSON.stringify(studentData));
  renderPage(studentData);
});

renderPage(studentData);



// document.cookie = "name=Sarkhan;"
// document.cookie = "age=27;"


function getItemCookie(key) {

    let cookieArr = document.cookie.split(';')

    for (element of cookieArr) {
        let elArr = element.split('=')

        if (elArr[0].trim() === key) {
            return elArr[1];
        }
    }

}

function setItemCookie(key, value) {
    document.cookie = key + '=' + value + ";"
}

setItemCookie("moodle","Wasf3746ksd")


let a = getItemCookie("name")


console.log(a);