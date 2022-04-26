var a = localStorage.getItem("Username");
var b = localStorage.getItem("Password");
var c = document.getElementById("user").value;
var d = document.getElementById("pass").value;
var e = document.getElementById("P").value;
var f = document.getElementById("U").value;
function Signin()
{
  
      if(a == c && b == d )
      {
          document.getElementById("IDD").innerHTML = "Hello " + c;
          document.getElementById("").style.display

      } else {
          window.alert("Incorrect Username or PAssword\n Try Again later")
      }
}
function Signup() 
{
  localStorage.setItem("Username", f);
  localStorage.setItem("Password", e);
  
}