var email = document.getElementById("email");
var pass = document.getElementById("pass").value;


function validate()
{
   
let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
if(regexp.test(email.value))
{
    error.innerHTML = "Valid Email";
    error.style.color="green";
    return true;
}
// else if(email == "") 
// {

//  alert("Fields cannot be empty");
//  error.style.color = "red";
// return false;

// }

else 

{
    error.innerHTML = "Please enter valid mail ID";
    error.style.color = "red";
    
    return false;
}

       
}










