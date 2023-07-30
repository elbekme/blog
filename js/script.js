// Register button func
function func(){
    var user = document.getElementById("userName").value;
    var password = document.querySelector('#password').value;
    if(user != '' && password != ''){
        window.location.assign("./pages/login.html");
        alert("Register succesfully");
    }
}

// DARK MODE //
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/mooon.png";
    
        }else{
            icon.src= "img/mooon.png";
        }
}