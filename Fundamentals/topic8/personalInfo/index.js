// var personalDOM = personals.map(
//     (user, index) => {

//       if(index === 0){
//           return `<div>Yazmiram</div>`
//       }

//       return (
//           `
//           <tr>
//           <th scope="row">${index + 1}</th>
//           <td>${user.fullName}</td>
//           <td>${user.age}</td>
//           <td>${user.job}</td>
//           <td>${user.married ? "Married" : "Single"}</td>
//           </tr>
//   `
//       )
//     }
//   ).join("");

var personalFullName = document.querySelector("#personalFullName");
var personalAge = document.querySelector("#personalAge");
var personalJob = document.querySelector("#personalJob");
var personalMarried = document.querySelector("#personalMarried");
var submitForm = document.querySelector("#submitForm");
var alertMessage = document.querySelector("#alertMessage");
var personals = [];

submitForm.addEventListener("click", () => {
  alertMessage.classList.remove("d-none");

  if (!personalFullName.value || !personalAge.value || !personalJob.value) {
    alertMessage.classList.add("alert-danger");
    alertMessage.classList.remove("alert-success");
    alertMessage.innerHTML = "Zehmet olmasa formu tam doldurun!";
    return;
  }

  var personalInfo = {
    fullName: personalFullName.value,
    age: parseInt(personalAge.value),
    job: personalJob.value,
    married: personalMarried.checked,
  };

  alertMessage.classList.remove("alert-danger");
  alertMessage.classList.add("alert-success");

  alertMessage.innerHTML = "Ugurla elave olundu";

  console.log(personalInfo);
  personals.push(personalInfo);
  
  renderTable(personals);
  resetForm()
});

var renderTable = (arr) => {
  var personalDOM = arr
    .map((user, index) => {
      return `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${user.fullName}</td>
            <td>${user.age}</td>
            <td>${user.job}</td>
            <td>${user.married ? "Married" : "Single"}</td>
            </tr>
        `;
    })
    .join("");

  document.querySelector(".table tbody").innerHTML = personalDOM;
};

var resetForm = () => {
  personalFullName.value = "";
  personalAge.value = "";
  personalJob.value = "";
};
