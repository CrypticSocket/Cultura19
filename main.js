document.onmousemove = animateCircles;

var colors = ['#fff', '#f00', '#0af'];

function animateCircles(event){
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    var colbg = colors[Math.floor(Math.random() * colors.length)];
    var colbd = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = colbd;
    circle.style.background = colbg;
    circle.style.transition = "all 0.5s linear 0s";

    circle.style.right = circle.offsetLeft - 20 + 'px';

    circle.style.width = "20px";
    circle.style.height= "20px";

    circle.style.opacity=0;
}
dip here !!!
its working

 yeahhh open up css? YOOOOOOOOO hi we can get started then.
