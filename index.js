// responsive navbar 
// function myfunction() {
//     var x = document.getElementById("Navbar");
//     if( x.className === "navbar") { 
//         x.classList += "responsive"; //can use className here too.
//     }else {
//         x.classList = "navbar";
//     }
// }

// login  logics
function openLogin() {
    var login = document.getElementById("login");
    login.style.display = "block";
    login.className = "slideDown";
  }
  
  function closeLogin() {
    var login = document.getElementById("login");
    login.className = "slideUp";
    setTimeout(function(){ login.style.display = "none"; }, 1000);
  }

  function opendLogin() {
    closeSignUp();
    openLogin();
  }



  //SignUp  logics
  function openSignUp() {
    var signup = document.getElementById("signup");
    signup.style.display = "block";
    signup.className = "slideDown";
  }
  
  function closeSignUp() {
    var signup = document.getElementById("signup");
    signup.className = "slideUp";
    setTimeout(function(){ signup.style.display = "none"; }, 1000);
  }

  function opendSignUp() {
    closeLogin();
    openSignUp();
  }


// logic to open camera  
// it open camera as page loads (automatically) 
    let video= document.getElementById("video");

    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video:true})
        .then(function(s) {
            video.srcObject=s;
        })
        .catch(function(err) {
            console.log("No");
        });
    } else {
        console.log(err);
    }