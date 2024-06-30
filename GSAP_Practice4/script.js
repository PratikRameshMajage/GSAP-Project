function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function textAnimation(){
    var allh1 = document.querySelectorAll("#page2 h1")

    allh1.forEach(function(elem){
        var clutter = ""
        var h1text = elem.textContent
        var splitedtext = h1text.split("")
        splitedtext.forEach(function(e){
            clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter;
    })
    gsap.to("#page2 h1 span",{
        color: "#E3E3C4",
        stagger: .1,
        scrollTrigger: {
            trigger: "#page2 h1",
            markers: true,
            start: "top 50%",
            end: "top 0%",
            scrub: 2,
        }
    })
}

loco();
textAnimation();













