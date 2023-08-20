var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var element = document.getElementById("container");
var close = document.getElementById("first_page");

function search(){
    
    var tempemail = document.getElementById("email").value
    if ( tempemail.match(mailformat)){
        document.getElementById("email_name").innerText = tempemail;
        close.style.display = "none";
        element.style.display = "";
        console.log("true")
    }
    else{
        document.getElementById("fail").innerText = "valid email required";
        
        console.log("false")
    }
}



