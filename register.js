let labReg = [
    {
        LaboratoryName: "Meblab",
        Location: "Labaka",
        PhoneNumber: 09044331317,
        EmailAddress: "meblab1@gmail.com",
        AccreditationsCertification: "YZERO",
        OperatingHours: "12Hours",
        AppointmentAvailable: "HIV/AIDS Test",
        Testoffering: "HIV/AIDS Test",
    }
]


const getAllLab = () =>{
    let userLab = new Array();
    let getAllL = localStorage.getItem("JagoLab")
    if (getAllL !=null)
    {
        userLab = JSON.parse(getAllL)
    }
    return userLab
}
console.log(getAllLab())

let labValue = ""
let localValue = ""
let numValue = ""
let mailValue = ""
let certifyValue = ""
let hoursValue = ""
let appiontValue = ""
let testValue = ""

document.getElementById("lab").addEventListener("input", function (e){
    console.log(e.target.value)
    labValue = e.target.value
})
document.getElementById("local").addEventListener("input", function (r){
    console.log(r.target.value)
    localValue = r.target.value
})
document.getElementById("numb").addEventListener("input", function (n){
    console.log(n.target.value)
    numValue = n.target.value
})
document.getElementById("mail").addEventListener("input", function (m){
    console.log(m.target.value)
    mailValue = m.target.value
})
document.getElementById("acc").addEventListener("input", function (c){
    console.log(c.target.value)
    certifyValue = c.target.value
})
document.getElementById("oper").addEventListener("input", function (h){
    console.log(h.target.value)
    hourValue = h.target.value
})
document.getElementById("point").addEventListener("input", function (a){
    console.log(a.target.value)
    appointValue = a.target.value
})
document.getElementById("offer").addEventListener("input", function (t){
    console.log(t.target.value)
    testValue = t.target.value
})


const addOn = () =>{
    let labFun = getAllLab()
    labFun.push({LaboratoryName:labValue, location:localValue, PhoneNumber:numValue, EmailAddress:mailValue, 
        AccreditationsCertification:certifyValue, OperatingHours:hoursValue, AppointmentAvailable:appiontValue, Testoffering:testValue})
        localStorage.setItem("JagoLab", JSON.stringify(labFun))
        return false
}