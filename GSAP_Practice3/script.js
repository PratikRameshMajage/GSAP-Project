gsap.to("#page2 #text",{
    transform: "translateX(-55%)",
    scrollTrigger: {
        trigger: "#page2",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 5,
        pin: true
    }
})