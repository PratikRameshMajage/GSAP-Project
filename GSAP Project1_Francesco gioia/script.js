var tl = gsap.timeline()
tl.from("#nav h3", {
    y: -50,
    opacity: .0,
    delay: .5,
    duration: .5,
    stagger: .1,
})
tl.from("img", {
    x: 100,
    rotate: 45,
    opacity: .0,
    duration: .3,
    stagger: 1,
})
tl.from("h1", {
    x: -80,
    opacity: .0,
    delay: .3,
    duration: .3,
    stagger: .1,
})
tl.from("#footer h3", {
    y: 10,
    opacity: .0,
    delay: .5,
    duration: .5,
    stagger: .1,
})