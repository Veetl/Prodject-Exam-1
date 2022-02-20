
var radio1 = document.getElementById("page1");
var radio2 = document.getElementById("page2");
var radio3 = document.getElementById("page3");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");


function myButton1() {
    if (radio1.checked == true){
        box1.style.display = "block";
        box2.style.display = "none";
        box3.style.display = "none";;
        radio2.checked = false;
        radio3.checked = false;
    } else if ((radio1.checked == false) && (radio2.checked == false) && (radio3.checked == false)) {
        radio1.checked = true;}
  };

  function myButton2() {
    if (radio2.checked == true){
        box1.style.display = "none";
        box2.style.display = "block";
        box3.style.display = "none";
        radio1.checked = false;
        radio3.checked = false;
    } else if ((radio1.checked == false) && (radio2.checked == false) && (radio3.checked == false)) {
        radio2.checked = true;}
          
  };

  function myButton3() {  
    if (radio3.checked == true){
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "block";
        radio1.checked = false;
        radio2.checked = false;
    } else if ((radio1.checked == false) && (radio2.checked == false) && (radio3.checked == false)) {
        radio3.checked = true;}
        
  };
  radio1.checked = true;

