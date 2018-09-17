var image = document.getElementById('image');
var title = document.getElementById('headline');
var txtContent = document.getElementById('description');

var firstDot = document.getElementById('dot1');
var secondDot = document.getElementById('dot2');
var thirdDot = document.getElementById('dot3');

var frame1 = document.getElementById('frame1');
var frame2 = document.getElementById('frame2');
var frame3 = document.getElementById('frame3');

frame1.style.display = "block";
frame2.style.display = "none";
frame3.style.display = "none";

firstDot.style.background = "#141414";


function slide(){

  firstDot.addEventListener("click", function(){
    frame1.style.display = "block";
    frame2.style.display = "none";
    frame3.style.display = "none";
    firstDot.style.background = "#141414";
    secondDot.style.background = "#bbb";
    thirdDot.style.background = "#bbb";
    console.log("1st");
  })

  secondDot.addEventListener("click", function(){
    console.log("2st");
    frame1.style.display = "none";
    frame2.style.display = "block";
    frame3.style.display = "none";
    firstDot.style.background = "#bbb";
    secondDot.style.background = "#141414";
    thirdDot.style.background = "#bbb";
  })

  thirdDot.addEventListener("click", function(){
    console.log("3st");
    frame2.style.display = "none";
    frame1.style.display = "none";
    frame3.style.display = "block";
    firstDot.style.background = "#bbb";
    secondDot.style.background = "#bbb";
    thirdDot.style.background = "#141414";
  })
}


slide();
