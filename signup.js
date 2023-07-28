document.getElementById("signup-btn").addEventListener("click", function(e){
    e.preventDefault();
    let uName = document.getElementById("username").value;
    let uEmail = document.getElementById("email").value;
    let uPass = document.getElementById("password").value;

    if(uName.length === 0|| uEmail.length === 0|| uPass.length===0)
    {
        alert("Please enter your full details")
    }else{
      
        localStorage.setItem("username", uName)
        localStorage.setItem("email", uEmail)
        localStorage.setItem("password", uPass)
        alert("Signup Successful")
        window.location.href="./welcome.html"
    }
})
