function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();

function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y,
        })
    })
}
cursorAnimation();
