document.onmousemove = animateCircles;

var colors = ['#fff', '#f55', '#0af'];

function animateCircles(event){
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    // var colbg = colors[Math.floor(Math.random() * colors.length)];
    // var colbd = colors[Math.floor(Math.random() * colors.length)];
    // circle.style.borderColor = colbd;
    // circle.style.background = colbg;
    circle.style.transition = "all 0.5s linear 0s";

    circle.style.right = circle.offsetLeft - 20 + 'px';

    circle.style.width = "20px";
    circle.style.height= "20px";

    circle.style.opacity=0;
}

//timer part

//set the date HERE
var countDownDate = new Date("Jan 31, 2019 02:35:00").getTime();

//update teh countDown every 1 section
var countdownfunction = setInterval(function(){
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  //output with id demo

  document.getElementById("demo").innerHTML = days + "d    " + hours +  "h " + minutes + "m " + seconds + "s ";

  //if countdown is over will write something HERE

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "its on..blah blah!!";
  }


}, 1000);

//wait dont change anything right now. il get confused.  XD
