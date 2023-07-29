let allBooking = [
    {
        fullName: "opeyemi",
        email: "opeyemioladele234@gmail.com",
        phoneNumber: "08067477367",
        location: "labaka"
    }
]


// localStorage.setItem("Bookjago", JSON.stringify(allBooking))

const getAllBooking = () => {
    let youBooking = new Array();
    let getAllBooking= localStorage.getItem("Bookjago")

    if (getAllBooking !== null)
    {
         youBooking = JSON.parse(getAllBooking)
    }
    return youBooking
}

console.log(getAllBooking)

let firstValue = ""
let secondValue = ""
let thirdValue = ""
let fourValue= ""

document.getElementById("first").addEventListener("input", function (e) {
    console.log(e.target.value)
    firstValue = e.target.value
})

document.getElementById("second").addEventListener("input", function (s) {
    console.log(s.target.value)
    secondValue = s.target.value
})


document.getElementById("third").addEventListener("input", function (t) {
    console.log(t.target.value)
    thirdValue = t.target.value
})

document.getElementById("four").addEventListener("input", function (f) {
    console.log(f.target.value)
    fourValue = f.target.value
})

const addBooking = () => {
  
    let getALLBooking = getAllBooking()
    getALLBooking.push({ fullName: firstValue, email: secondValue, phoneNumber: thirdValue, location:fourValue})
    localStorage.setItem("Bookjago", JSON.stringify(getALLBooking))
    window.location.href ="thank.html"
    return false
}

// console.log(addBooking())
// console.log(JSON.parse(localStorage.getItem("Bookjago")))

// document.getElementById("book").addEventListener("click", function(){
//     let uName = document.getElementById("first").value
//     let uEmail = document.getElementById("second").value
//     let uNumb = document.getElementById("third").value
//     let uSelect = document.getElementById("four").value

//     if(uName.trim().length === 0 || uPass.trim().length === 0 || uEmail.trim().length === 0)
//     {
//      alert("please enter all field")
//     }else
//     {
//      // console.logconsole.log(uName, uEmail, uPass)
//      localStorage.setItem("Full Name", uName)
//      localStorage.setItem("Email Address", uEmail)
//      localStorage.setItem("Phone Number",uNumb)
//      localStorage.setItem("Phone Number",uNumb)
//     }
// })
