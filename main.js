var hands1 = document.querySelector(".hands1");
var head1 = document.querySelector(".head1");
var tongue1 = document.querySelector(".tongue1");

var head1Y;
var pi = Math.PI;
var i = pi/2;

// hands1.style.transform = "translateX(40%)";

requestAnimationFrame(function animationFrame() {
    var head1Y =  Math.sin(0.5 * i) * 2
    var tongue1Y = 4 * Math.sin(i + pi)
    var hands1Y = .9 + .01 * Math.sin(i/2 + .002 * pi)

    head1.style.transform = "translateY(" + head1Y + "%)"
    tongue1.style.transform = "translateY(" + tongue1Y + "%)"
    hands1.style.transform = "scaleX(" + hands1Y + ")"

    i = i + pi/6

    requestAnimationFrame(animationFrame)
})