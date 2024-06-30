var tl = gsap.timeline()

function a(){
    tl.from(".box", {
        x: 1050,
        delay: 1,
        duration:1,
        rotate: 360,
        ease: Power4,
        stagger: .2,
        scale: .5,
    })
    tl.to(".box", {
        x: 1050,
        delay: 1,
        duration:1,
        rotate: 360,
        ease: Power4,
        stagger: .2,
        scale: .5,
    })
}

function scrollTriggerAnimationOnElems(){
    tl.from(".elems", {
        scrollTrigger: {
            trigger: "#page2",
            markers: true,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
        },
        opacity: 0,
        x: 1300,
        delay: 1,
        duration:5,
        ease: Power4,

    })
}

scrollTriggerAnimationOnElems();
a();