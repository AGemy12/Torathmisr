
// Mini Menu 

let myIconList = document.querySelector(".body-header .container i");
let myList = document.querySelector(".body-header ul");

myIconList.addEventListener('click', function () {
    if (myList.style.display === "none") {
        myList.style.display = "block";
    } else {
        myList.style.display = "none"
    }
})

//  Icon Scroll Along Body

let homeIcon = document.querySelector(".up-down");

window.addEventListener('scroll', function () {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > 250) {
        homeIcon.style.display = 'block';
    } else {
        homeIcon.style.display = 'none';
    }
});

// Menu

let myLinks = document.querySelectorAll(".links");
let mySections = document.querySelectorAll(".section");

function activeMenu() {
    let len = mySections.length;
    while (--len && window.scrollY < mySections[len].offsetTop) { }
    myLinks.forEach(ltx => ltx.classList.remove("active"));
    myLinks[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

//  Slider Images

let activeImageId = 1;
let nextImageId = 1;

setInterval(function(){
    activeImageId = nextImageId;
    nextImageId = activeImageId + 1;

    if (nextImageId < 7) {
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");
    } else {
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");
        activeImageId = 7;
        nextImageId = 0;
    }   
}, 5000)

// Registration Section 

    document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});


