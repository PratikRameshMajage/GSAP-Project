function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function HorizontalScrollSlider(){
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: "#page2",
            start: " top top",
            end: "bottom bottom",
            // markers: true,
            scrub: 2,
        },
        xPercent: -200,
        ease : Power4,
    })
}

loco();
HorizontalScrollSlider();