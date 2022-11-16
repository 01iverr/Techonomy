function checkPassword() {
    var password1 = document.forms["formsignup"]["Password1"].value;
    var password2 = document.forms["formsignup"]["PasswordVer"].value;
    if (password2) {   //  password2 isn't null or undefined or empty
          if  (password1 == password2) {
              document.getElementById("Password1").style.border = "2px solid #7CFC00";
              document.getElementById("PasswordVer").style.border = "2px solid #7CFC00";

          }
          else{
            document.getElementById("Password1").style.border = "2px solid #cc0000";
            document.getElementById("PasswordVer").style.border = "2px solid #cc0000";
          }
    }
}
