var tl = gsap.timeline();
tl.from("nav img,nav ul li ,.icon ",{
    y:-100,
    duration:.5,
    stagger:.1
})

tl.from(".button,.right h1 , .right h4 , .left img",{
    y:-100,
    duration:.5,
    opacity:0,
    stagger:.1
})



var active = 1;
// gsap.to("#circle",{
//     rotate:0,
//     duration:1,
// }) 

var mincircle = document.querySelectorAll(".mincircle")
var circle = document.querySelectorAll("#circle")


gsap.to(mincircle[active-1],{
    opacity:1,
})

mincircle.forEach(function(elem,index){
    elem.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate: (index + 1) * 90,
            duration:1,
            ease: Expo.easeInout
        })
        grayout();

        gsap.to(this,{
            opacity:2,

        })
    })
})


function grayout(){
    gsap.to(".mincircle",{
        opacity:.8,


    })
}