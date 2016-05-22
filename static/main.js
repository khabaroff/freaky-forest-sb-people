var n0101 = document.querySelector("#n0101");
var n0102 = document.querySelector("#n0102");
var n0103 = document.querySelector("#n0103");
var n0104 = document.querySelector("#n0104");


var n0201 = document.querySelector("#n0201");
var n0202 = document.querySelector("#n0202");
var n0203 = document.querySelector("#n0203");
var n0204 = document.querySelector("#n0204");


var n0301 = document.querySelector("#n0301");
var n0302 = document.querySelector("#n0302");
var n0303 = document.querySelector("#n0303");
var n0304 = document.querySelector("#n0304");


var n0401 = document.querySelector("#n0401");
var n0402 = document.querySelector("#n0402");
var n0403 = document.querySelector("#n0403");
var n0404 = document.querySelector("#n0404");


var n0501 = document.querySelector("#n0501");
var n0502 = document.querySelector("#n0502");


var n0601 = document.querySelector("#n0601");
var n0602 = document.querySelector("#n0602");
var n0603 = document.querySelector("#n0603");
//var n0604 = document.querySelector("#n0604");


var n0701 = document.querySelector("#n0701");
var n0702 = document.querySelector("#n0702");
var n0703 = document.querySelector("#n0703");


var n0801 = document.querySelector("#n0801");
var n0802 = document.querySelector("#n0802");
var n0803 = document.querySelector("#n0803");
var n0804 = document.querySelector("#n0804");
var n0805 = document.querySelector("#n0805");


var n0901 = document.querySelector("#n0901");
var n0902 = document.querySelector("#n0902");
var n0903 = document.querySelector("#n0903");


var n1001 = document.querySelector("#n1001");
var n1002 = document.querySelector("#n1002");
var n1003 = document.querySelector("#n1003");
var n1004 = document.querySelector("#n1004");
//var n1005 = document.querySelector("#n1005");


var n1101 = document.querySelector("#n1101");
var n1102 = document.querySelector("#n1102");
var n1103 = document.querySelector("#n1103");
var n1104 = document.querySelector("#n1104");


var pi = Math.PI;
var i = pi/2;

requestAnimationFrame(function animationFrame() {


    var n0101anim = 10 * Math.sin(i/3)
    //var n0102anim = 10 * Math.sin(i/3)
    var n0103anim = 10 * Math.sin(i/3 + pi/6)
    var n0104anim = 10 * Math.sin(i/3)

    n0101.style.transform = "translateY(" + n0101anim + "px)"
    //n0102.style.transform = "translateY(" + n0102anim + "px)"
    n0103.style.transform = "translateY(" + n0103anim + "px)"
    n0104.style.transform = "translateY(" + n0104anim + "px)"

    //var n0201anim = 2 * Math.sin(i/3)
    var n0202anim = 2 * Math.sin(i/3)
    var n0203anim = 2 * Math.sin(i/3)
    var n0204anim = 3 * Math.sin(i/3)

    //n0201.style.transform = "translateY(" + n0201anim + "px)"
    n0202.style.transform = "translateY(" + n0202anim + "px)"
    n0203.style.transform = "translateY(" + n0203anim + "px)"
    n0204.style.transform = "translateY(" + n0204anim + "px)"



    var n0301anim = 3 * Math.sin(i/3)
    //var n0302anim = 10 * Math.sin(i/3)
    var n0303anim = 1/2 * Math.sin(i*1.5)
    var n0304anim = 3 * Math.sin(i/3)

    n0301.style.transform = "translateY(" + n0301anim + "px)"
    //n0302.style.transform = "translateY(" + n0302anim + "px)"
    n0303.style.transform = "translateY(" + n0303anim + "px) translateX(" + n0303anim + "px)"
    n0304.style.transform = "translateY(" + n0304anim + "px)"


    //var n0401anim = 10 * Math.sin(i/3)
    var n0402anim = 10 * Math.sin(i/3)
    var n0403anim = 10 * Math.sin(i/3)
    var n0404anim = 10 * Math.sin(i/3  + pi/6)
    var n0404animscale = 1 + 0.1 * Math.sin(i/9  + pi/6)

    //n0401.style.transform = "translateY(" + n0401anim + "px)"
    n0402.style.transform = "translateY(" + n0402anim + "px)"
    n0403.style.transform = "translateY(" + n0403anim + "px)"
    n0404.style.transform = "translateY(" + n0404anim + "px) scale(" + n0404animscale + ")"


    var n0501anim = 10 * Math.sin(i/3)
    var n0502anim = 10 * Math.sin(i/3 + pi/6)

    n0501.style.transform = "translateY(" + n0501anim + "px)"
    n0502.style.transform = "translateY(" + n0502anim + "px)"


    var n0601anim = 10 * Math.sin(i/3)
    var n0602anim = 10 * Math.sin(i/3)
    var n0603anim = 10 * Math.sin(i/3 + pi/6)
    //var n0604anim = 10 * Math.sin(i/3)

    n0601.style.transform = "translateY(" + n0601anim + "px)"
    n0602.style.transform = "translateY(" + n0602anim + "px)"
    n0603.style.transform = "translateY(" + n0603anim + "px)"
  //  n0604.style.transform = "translateY(" + n0604anim + "px)"


    var n0701anim = 10 * Math.sin(i/3)
    var n0702anim = 10 * Math.sin(i/3)
    var n0703anim = 10 * Math.sin(i/3 + pi/6)

    n0701.style.transform = "translateY(" + n0701anim + "px)"
    n0702.style.transform = "translateY(" + n0702anim + "px)"
    n0703.style.transform = "translateY(" + n0703anim + "px)"


    var n0801anim = 10 * Math.sin(i/3)
    var n0802anim = 10 * Math.sin(i/3)
    var n0803anim = 10 * Math.sin(i/3 + pi/6)
    var n0804anim = 10 * Math.sin(i/3)
    var n0805anim = 10 * Math.sin(i/3)

    n0801.style.transform = "translateY(" + n0801anim + "px)"
    n0802.style.transform = "translateY(" + n0802anim + "px)"
    n0803.style.transform = "translateY(" + n0803anim + "px)"
    n0804.style.transform = "translateY(" + n0804anim + "px)"
    n0805.style.transform = "translateY(" + n0805anim + "px)"


    var n0901anim = 10 * Math.sin(i/3)
    var n0902anim = 10 * Math.sin(i/3)
    var n0903anim = 10 * Math.sin(i/3 + pi/6)

    n0901.style.transform = "translateY(" + n0901anim + "px)"
    n0902.style.transform = "translateY(" + n0902anim + "px)"
    n0903.style.transform = "translateY(" + n0903anim + "px)"


    var n1001anim = 10 * Math.sin(i/3)
    var n1002anim = 10 * Math.sin(i/3)
    var n1003anim = 10 * Math.sin(i/3 + pi/6)
    var n1004anim = 10 * Math.sin(i/3)
    //var n1005anim = 10 * Math.sin(i/3)

    n1001.style.transform = "translateY(" + n1001anim + "px)"
    n1002.style.transform = "translateY(" + n1002anim + "px)"
    n1003.style.transform = "translateY(" + n1003anim + "px)"
    n1004.style.transform = "translateY(" + n1004anim + "px)"
    //n1005.style.transform = "translateY(" + n1005anim + "px)"


    var n1101anim = 10 * Math.sin(i/3)
    var n1102anim = 10 * Math.sin(i/3)
    var n1103anim = 10 * Math.sin(i/3 + pi/6)
    var n1104anim = 10 * Math.sin(i/3)

    n1101.style.transform = "translateY(" + n1101anim + "px)"
    n1102.style.transform = "translateY(" + n1102anim + "px)"
    n1103.style.transform = "translateY(" + n1103anim + "px)"
    n1104.style.transform = "translateY(" + n1104anim + "px)"



    i = i + pi/4.1

    requestAnimationFrame(animationFrame)
})