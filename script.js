var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzr1hsnzO7ttbpM9RDnPuT1ESSpd7Vd_zah4JGxYKF49EQBatkOwFSw9HRfb4euMZ2NVA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
        }, 5000)
    setTimeout(function () {
        msg.innerHTML = ""
    })
    form.reset()
        .catch(error => console.error('Error!', error.message))
})

// ---------------sticky navbar-----------------------
// window.onscroll = function () { myFunction() };

// var navlist = document.getElementById("navbar");
// var sticky = navlist.offsetTop;

// /* Function to stick the nav bar */
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navlist.classList.add("sticky")
//     }
//     else {
//         navlist.classList.remove("sticky");
//     }
// }