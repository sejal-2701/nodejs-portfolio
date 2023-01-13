// NAVBAR Js //
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
const p_array = document.getElementsByClassName("abc");
console.log(p_array)
/* *********************************************************** */

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
console.log(tablinks)
console.log(tabcontents)

function opentab(tabname) {
    console.log(tabname)
    console.log(tablinks)
    console.log(tabcontents)
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

