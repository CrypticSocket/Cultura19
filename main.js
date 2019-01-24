document.onmousemove = animateCircles;

var colors = ['#fff', '#f00', '#0af'];

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
<<<<<<< HEAD

    circle.style.width = "20px";
    circle.style.height= "20px";
=======
>>>>>>> 06b4fbc8066f936eb6a6c68168174d96394fb468

    circle.style.width = "30px";
    circle.style.height= "30px";
    
    circle.style.opacity=0;
}
<<<<<<< HEAD
dip here !!!
its working

 yeahhh open up css? YOOOOOOOOO hi we can get started then.
=======
>>>>>>> 06b4fbc8066f936eb6a6c68168174d96394fb468
