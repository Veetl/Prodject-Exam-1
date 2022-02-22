const url = "https://veetl.skadbergworks.com/wp/wp-json/wp/v2/posts?per_page=12";

var radio1 = document.getElementById("page1");
var radio2 = document.getElementById("page2");
var radio3 = document.getElementById("page3");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

const resultsContainer = document.querySelector("#box1 .carousel")
const resultsContainer2 = document.querySelector("#box2 .carousel")
const resultsContainer3 = document.querySelector("#box3 .carousel")



async function getInfo() {

    const response =  await fetch(url, {method:'GET',
    });

    const object = await response.json();

    const info = object;
 


    for(let i = 0; i < info.length; i++) {
        if (i === 4) {
            break;
        }
        resultsContainer.innerHTML += `<div class="box"> ${info[i].title.rendered} <br> ${info[i].excerpt.rendered}</div>`
    }
    
    for(let i = 4; i < info.length; i++) {
        if (i === 8) {
            break;
        }
        resultsContainer2.innerHTML += `<div class="box"> ${info[i].title.rendered} <br> ${info[i].excerpt.rendered}</div>`
    }

    for(let i = 8; i < info.length; i++) {
        if (i === 12) {
            break;
        }
        resultsContainer3.innerHTML += `<div class="box"> ${info[i].title.rendered} <br> ${info[i].excerpt.rendered}</div>`
    }

};

getInfo();

//<div id="box1"><div class="carousel"><div class="box">box 1</div></div></div>







var tab = 1
function goLeft() {
    if (tab <= 1) { return; }
    
    tab = tab - 1
    console.log(tab)
    if (tab == 1) {
        box1.style.display = "block";
        box2.style.display = "none";
        box3.style.display = "none";
    }
    if (tab == 2) {
        box1.style.display = "none";
        box2.style.display = "block";
        box3.style.display = "none";
    }
    if (tab == 3) {
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "block";
    }
};
function goRight() {
    if (tab >= 3) { return; }
    
    tab = tab + 1
    console.log(tab)
    if (tab == 1) {
        box1.style.display = "block";
        box2.style.display = "none";
        box3.style.display = "none";
    }
    if (tab == 2) {
        box1.style.display = "none";
        box2.style.display = "block";
        box3.style.display = "none";
    }
    if (tab == 3) {
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "block";
    }
};
