var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var cnpwd = document.getElementById("cnpwd");
var mobile = document.getElementById("mobile");

function validate()
 {
    var name = document.forms["myform"]["name"].value;
    if(name==""){
    alert("Please enter the name");
    return false;
    }
   
   
                               // email validation
    let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        error.innerHTML = "Valid"; 
        error.style.color = "green";  
    }

  else 

 {
    error.innerHTML = "Please enter valid mail ID";
    error.style.color = "red";
    
    return false;
 }


                         //  phone number validation
let regx = /^[7-9]\d{0}\d{2}[-.\s]?\d{3}[-.\s]?\d{4}$/
if(regx.test(mobile.value))
{
    document.getElementById("mobileph").innerHTML = "Valid";
    document.getElementById("mobileph").style.visibility = "visible";
    document.getElementById("mobileph").style.color = "green";

}
 else{
   document.getElementById("mobileph").innerHTML = "Please enter valid Indian Phone number";
     document.getElementById("mobileph").style.visibility = "visible";
   document.getElementById("mobileph").style.color = "red";
   return false;
 }
                            //  password validation
//  var pwd = document.forms["myform"]["pwd"].value;
//   if(pwd==""){
//   alert("Please enter the password");
//  return false;
//  }
var a= pwd.value;
var b=cnpwd.value;
if (a=="")
{
    document.getElementById("message").innerHTML="**Please enter the Password";
    return false;
}
if (a.length<5)
{
    document.getElementById("message").innerHTML="**Password length must be greater than 5 characters";
    return false;
}
if (a.length>20)
{
    document.getElementById("message").innerHTML="**Password length must be smaller than 20 characters";
    return false;
}

if (a!= b)
{
    document.getElementById("message").innerHTML="**Password doesn't match";
    return false;
}
else{
    document.getElementById("message").innerHTML="**Hurray!!Password matches"; 
    document.getElementById("message").style.color="green";
}


 }
 pwd.addEventListener('keyup',function(){
     strength();
 })
function strength(){
    var val=document.getElementById("pwd").value;
    var status=document.getElementById("length");
    var counter=0;

if(val!="")
{

    if(val.length<=5)
    counter=1;
    if(val.length > 5 && val.length <= 10)
    counter=2;
    if(val.length > 10 && val.length <= 20)
    counter=3;
if(counter==1)
{
    status.innerHTML = "WEAK";
    status.style.background="red";
    status.style.color="#ffffff";
}

if(counter==2)
{
    status.innerHTML = "GOOD";
    status.style.background="orange";
    status.style.color="white";
}
if(counter==3)
{
    status.innerHTML = "STRONG";
    status.style.background="green";
    status.style.color="#ffffff";
}

}


}









 
 