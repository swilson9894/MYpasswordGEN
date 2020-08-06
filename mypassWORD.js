
function generate(){


    let complexity = document.getElementById("shonta").value;


    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";


    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

   
    document.getElementById("display").value = password;

  


}


document.getElementById("length").innerHTML = "Length: 8";


document.getElementById("shonta").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("shonta").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}
