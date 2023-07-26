let allBooking = [
    {
        fullName: "opeyemi",
        email: "opeyemioladele234@gmail.com",
        phoneNumber: "08067477367",
    },
    {
        fullName: "chukwuma",
        email: "judechukwu234@gmail.com",
        phoneNumber: "09032448578",
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

document.getElementById("first").addEventListener("input", function (e) {
    // console.log(e.target.value)
    firstValue = e.target.value
})

document.getElementById("second").addEventListener("input", function (e) {
    // console.log(e.target.value)
    secondValue = e.target.value
})


document.getElementById("third").addEventListener("input", function (e) {
    // console.log(e.target.value)
    thirdValue = e.target.value
})

const addBooking = () => {
    // e.preventDefault()
    let getALLBooking = getAllBooking()
    // console.log("user", getALLBooking)

    getALLBooking.push({ fullName: firstValue, email: secondValue, phoneNumber: thirdValue, })
    localStorage.setItem("Bookjago", JSON.stringify(getALLBooking))

    return false
}

// console.log(addBooking())
// console.log(JSON.parse(localStorage.getItem("Bookjago")))