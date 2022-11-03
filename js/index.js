let myicon = document.getElementById("icon");
let mylink = document.getElementById("links");
let formName = document.getElementById("name");
let formEmail = document.getElementById("email");
let formPhone = document.getElementById("phone");
let formAge = document.getElementById("age");
let formPassword = document.getElementById("password");
let formRepassword = document.getElementById("repassword");
let alertName = document.getElementById("namealert");
let alertEmail = document.getElementById("emailalert");
let alertPhone = document.getElementById("phonealert");
let alertAge = document.getElementById("agealert");
let alertPassword = document.getElementById("passwordalert");
let alertRepassword = document.getElementById("repasswordalert");
let links = document.querySelectorAll(".medaiType");


for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) { 
    
    let medaiType = e.target.name;
    getData(medaiType)
   
  });
}
getData();

let moviesData = [];
async function getData(typeMovie="now_playing" ) {
  if (typeMovie != "" && typeMovie != undefined && typeMovie != null) {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${typeMovie}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`
    );
    let data = await response.json();
    moviesData = data.results;
    
    displayMovies();
  } else {
    alert("wdnkd");
  }
}

function displayMovies() {
  let temp = "";
  for (let i = 0; i < moviesData.length; i++) {
    //  let myimg = https://api.themoviedb.org/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg
    temp += `   <div class="col-md-4 col-sm-6">
        <div id="itmes" class="item text-center position-relative " >
          <img src="https://image.tmdb.org/t/p/w500${moviesData[i].poster_path}"class="img-fluid rounded alt="not found">
          <div class="contant ">
              <h2>${moviesData[i].title}</h2>
              <p>${moviesData[i].overview}</p>
              <p>rote:${moviesData[i].vote_average}</p>
              <p>${moviesData[i].release_date}</p>

          </div>
        </div>
      </div> `;
  }
  document.getElementById("rowDate").innerHTML = temp;
}

function search(trem) {
  var temp = "";
  for (i = 0; i < moviesData.length; i++) {
    if (moviesData[i].title.toLowerCase().includes(trem.toLowerCase())) {
      temp += `<div class="col-md-4">
        <div id="itmes" class="item text-center position-relative " >
          <img src="https://image.tmdb.org/t/p/w500${moviesData[i].poster_path}"class="img-fluid rounded alt="not found">
          <div class="contant ">
              <h2>${moviesData[i].title}</h2>
              <p>${moviesData[i].overview}</p>
              <p>rote:${moviesData[i].vote_average}</p>
              <p>${moviesData[i].release_date}</p>
          </div>
        </div>
      </div> `;
    }
  }
  document.getElementById("rowDate").innerHTML = temp;
}

let ourWidth = $("#sidebar").outerWidth();
$("#outbox").animate({ left: `-${ourWidth}px` }, 0);

$("#icon").click(function () {
  let leftValue = $("#outbox").css("left");
  if (leftValue == "0px") {
    $("#outbox").animate({ left: `-${ourWidth}px` }, 1000);
    $("#links").animate({ top: "100%" }, 2000);
  } else {
    $("#outbox").animate({ left: "0px" }, 1000);
    $("#links").animate({ top: "0px" }, 2000);
  }
});

let usersDate = [];

function usersInfo() {
  if (
    validtionName() &&
    validtionEmail() &&
    validtionPhone() &&
    validtionAge() &&
    validtionPassword() &&
    validtionRepassword()
  ) {
    let info = {
      name: formName.value,
      email: formEmail.value,
      age: formAge.value,
      phone: formPhone.value,
      password: formPassword.value,
      repassword: formRepassword.value,
    };
    usersDate.push(info);
    console.log(info);
    localStorage.setItem("usersList", JSON.stringify(usersDate));
  }

  clearForm();
}

function clearForm() {
  formName.value = "";
  formEmail.value = "";
  formAge.value = "";
  formPhone.value = "";
  formPassword.value = "";
  formRepassword.value = "";
}
function validtionName() {
  var ragex = /^[A-Z][A-Z a-z 0-9]{3,15}$/;
  if (ragex.test(formName.value)) {
    alertName.style.display = "none";
    return true;
  } else {
    alertName.style.display = "block";
    return false;
  }
}

function validtionEmail() {
  var ragex = /^[ A-Z 0-9 a-z]{3,15}@(gmail).(com)$/;
  if (ragex.test(formEmail.value)) {
    alertEmail.style.display = "none";
    return true;
  } else {
    alertEmail.style.display = "block";
    return false;
  }
}
// function checkEmail() {
//   for (i = 0; i < usersDate.length; i++){
//     if (usersDate[i].email != formEmail.value) {
//       console.log("tmam");
//       return true;
//     }
//     else {
//       console.log("email is exsact");
//     }
//   }
// }

function validtionPhone() {
  var ragex = /^(002)?01[0125][0-9]{8}$/;

  if (ragex.test(formPhone.value)) {
    alertPhone.style.display = "none";
    return true;
  } else {
    alertPhone.style.display = "block";
    console.log(formPhone.value);
    return false;
  }
}

function validtionAge() {
  var ragex = /^[0-9]{2}$/;

  if (ragex.test(formAge.value)) {
    alertAge.style.display = "none";
    return true;
  } else {
    alertAge.style.display = "block";
    return false;
  }
}

function validtionPassword() {
  var ragex = /^[a-z][0-9]{4,10}$/;

  if (ragex.test(formPassword.value)) {
    alertPassword.style.display = "none";
    return true;
  } else {
    alertPassword.style.display = "block";
    return false;
  }
}
function validtionRepassword() {
  var ragex = /^[a-z][0-9]{4,10}$/;

  if (ragex.test(formRepassword.value)) {
    alertRepassword.style.display = "none";
    return true;
  } else {
    alertRepassword.style.display = "block";
    return false;
  }
}
function goToTop(){
  window.scrollTo(0,0)
}