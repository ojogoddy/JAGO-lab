document.getElementById("signin-btn").addEventListener("click", function(event){
    event.preventDefault();
    let signinemail = document.getElementById("signine").value
    let signinpass = document.getElementById("signinp").value

    let getsigne = localStorage.getItem("email")
    let getsignp = localStorage.getItem("password")
    
    if(signinemail === getsigne && signinpass === getsignp)
    {
        alert("login successful")
        window.location.href = "./booking.html"
    }
    else{
        alert("Invalid email and password")
    }
})