var formButton = document.querySelector("#submitForm");
var fullName = document.querySelector("#fullName");
var showData = document.querySelector("#showData");
var tableRow = document.querySelector("table tbody");

//Data base
var infoData = [];




// checkBoxInput.addEventListener("click",function(e) {

//     let tiklandi = e.target.checked

//     if(tiklandi){
//         label.style.textTr = "line-thourd"
//     }else{
//         label.style.textTr = "normal"

//     }
    
// })


//Events
formButton.addEventListener("click", addTodo);

fullName.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    addTodo();
  }
});

// showData.addEventListener("click", renderTable);

// window.onkeydown = function (e) {
//   if (e.key === "Enter") {
//     addTodo();
//   }
// };



//Functions
function addTodo(e) {
  if (fullName.value.trim().length === 0) {
    alert("Get yaxsi doldur");
    return;
  }

  infoData = [...infoData, fullName.value];

  fullName.value = "";

  renderTable();
}

function renderTable() {
  console.log(infoData);
  tableRow.innerHTML = "";

  for (i in infoData) {
    // console.log("Xos geldin", infoData[i]);

    var tr = document.createElement("tr");
    tr.innerHTML = `  
           <th scope="row">${+i + 1}</th>
           <td>${infoData[i]}</td> `;

    tableRow.appendChild(tr);
  }
}
