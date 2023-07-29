function showTest(id) {
    
    document.getElementById('sl-xx-a').style.display = "none";
    document.getElementById('sl-xx-b').style.display = "none";
    document.getElementById('sl-xx-c').style.display = "none";
    document.getElementById('sl-xx-d').style.display = "none";

    document.getElementById(id).style.display = "block";
}

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"
function togglemenu(){
    if (menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight= "200px"
    }else{
        menuList.style.maxHeight = "0px"
    }
}