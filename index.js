let Fname = document.getElementById("firstninput");
let Lname = document.getElementById("lastninput");
function getupdate() {
  if (localStorage.getItem("items") == null) {
    let ary = [];
    ary.push([Fname.value, Lname.value]);
    localStorage.setItem("items", JSON.stringify(ary));
  } else {
    let arystr = localStorage.getItem("items");
    ary = JSON.parse(arystr);
    ary.push([Fname.value, Lname.value]);
    localStorage.setItem("items", JSON.stringify(ary));
  }
  update();
}
function update() {
  if (localStorage.getItem("items") == null) {
    let ary = [];
    localStorage.setItem("items", JSON.stringify(ary));
  } else {
    let arystr = localStorage.getItem("items");
    ary = JSON.parse(arystr);
  }
  // table ko necy dekana hai
  let tbodys = document.getElementById("tbody");
  let tabled = "";

  ary.forEach((element, index) => {
    tabled += `
                   <tr>
                   <td>${index + 1}</td>
                   <td>${element[0]}</td>
                   <td>${element[1]}</td>
                   <td><button onclick="deleteitems(${index})" class="btn btn-outline-danger btn-sm">Delete</button></td>
                   </tr>`;
  });
  tbodys.innerHTML = tabled;
}
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", getupdate);
update();

let deleteitems = (itemindex) => {
  console.log("deleted", itemindex);
  let arystr = localStorage.getItem("items");
  ary = JSON.parse(arystr);
  ary.splice(itemindex, 1);
  localStorage.setItem("items", JSON.stringify(ary));
  update();
};

function clearstorage() {
  let conforms = confirm("You want to clear your all Data");
  if (conforms) {
    console.log("clearing the Storage.....");
    localStorage.clear();
    alert("You Data has permenently cleared");
    update();
  } else {
    alert("Thanks....");
    update();
  }
}
