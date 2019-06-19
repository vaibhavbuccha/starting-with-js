<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>validation</title>
</head>
<body>
    <div>
        <form action="" onsubmit="return validate()">
            <div>
                <label for="Username">Username :</label>
                <input type="text" name="Username" id="Username">
                <div id="user_error"></div>
            </div>
            <div>
                    <label for="Email">Email :</label>
                    <input type="text" name="emai" id="email">
                    <div id="email_error"></div>
                </div>
                <div>
                        <label for="Password">Password :</label>
                        <input type="text" name="Password" id="Password">
                        <div id="email_error"></div>
                    </div>
                    <div>
                            <label for="confirm">confirm Password :</label>
                            <input type="text" name="emai" id="con_password">
                            <div id="email_error"></div>
                        </div>
            <div>
                <input type="submit" name="register">
            </div>
        </form>
    </div>
</body>
<script>
var username = document.getElementById('Username');
var user_error = document.getElementById('user_error');
var email = document.getElementById('email');
var email_error = document.getElementById('email_error');
function validate(){
    if(username.value == ""){
        username.style.border = "1px solid red";
        user_error.style.color = "red";
        user_error.textContent = "username is required!";
    }
    if(email.value == ""){
        email.style.border = "1px solid red";
        email_error.style.color = "red";
        email_error.textContent = "username is required!";
    }
    if(email.value != ""){
        if(email.value.indexOf('@',0)< 0){
            email.style.border = "1px solid red";
            email_error.style.color = "red";
            email_error.textContent = "email is not correct";
        }
        if(email.value.indexOf('.',0)< 0 ){
            email.style.border = "1px solid red";
            email_error.style.color = "red";
            email_error.textContent = "email is not correct";
        }
    }
}
</script>
</html>
