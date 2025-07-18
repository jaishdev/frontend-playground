console.log("first")

var initialPath = "M 200 238.25 Q 426 238.25 1720 238.25"

var finalPath= "M 200 238.25 Q 426 238.25 1720 238.25"

var string = document.querySelector('#string')

// string.addEventListener('mouseenter',function(){
//     console.log('i am entered')
// })
string.addEventListener('mousemove',function (e){
    initialPath = `M 200 238.25 Q ${e.x} ${e.y} 1720 238.25`
    // console.log(e.y)
    gsap.to('svg path',{
        attr:{d:initialPath},
        duration:0.3,
        ease:"power3.out"
    })
})
string.addEventListener('mouseleave',function(e){
     gsap.to('svg path',{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)",
    })
})