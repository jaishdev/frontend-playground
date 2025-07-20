console.log("first");

gsap.to(".container1 .box",{
    duration:2,
    rotate: 360,
    scale:1.5,
    borderRadius: "30%",
    // x:500,
    repeat:-1,
    yoyo:true,
    // ease: "elastic",
    
})
// gsap.from(".container2 .box",{
//     duration:2,
//     rotate: 360,
//     scale:0,
//     // borderRadius: "30%",
//     // x:500,
//     // repeat:-1,
//     // yoyo:true,
//     scrollTrigger:{
//         trigger:".container2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 80%",
//         end:"top 70%",
//         scrub:2,
//         // pin:true,
//     },
// })

gsap.to(".container2 .text",{
    duration:1,
    transform: "translateX(-70%)",
    // repeat:-1,
    // yoyo:true,
    scrollTrigger:{
        trigger:".container2",
        scroll:"body",
        markers:true,   
        start:"top 0%",
        end:"top -200%",
        scrub:2,
        pin:true,
    }
})

gsap.to(".container4 .headings h1",{
    // duration:.1,
    y:30,
    delay:3,
    stagger:.3,
    opacity:0,
})