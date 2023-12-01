


function validateForm(){

emailValidation(document.getElementById("email").value);
numberValidation(document.getElementById("number").value);
passValidation(document.getElementById("pass").value);
}

function emailValidation(emailNora){
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let demoEmailText;
    if(emailNora.match(format)){
       demoEmailText = "Email is correct";
    }else if(emailNora == ""){
demoEmailText ="Email field can not be empty"
 
    }else{
        demoEmailText= "Email must be in the format emailname@domain.com"
    }
    document.getElementById("demoEmail").innerHTML = demoEmailText;
};

function numberValidation(numberNora){
    let demoNumberText;
    if(isNaN(numberNora) || numberNora < 1 || numberNora > 10){
       
       demoNumberText =  "Please add the number in the correct format";
    }
    document.getElementById("demoNumber").innerHTML = demoNumberText;
}

function passValidation(passNora){
 let demoPassText;
 var passFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

 if(!passFormat.test(passNora)){

 
demoPassText = "Password must contain: <br> Min 8 caracters <br> Min 1 uppercase <br> Min 1 lower case <br> Min 1 number"
}
document.getElementById("demoPass").innerHTML = demoPassText;
}
