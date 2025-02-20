//GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//GSAP Animation-------------------------------------------------------------------------------------------------------------
//Animation 1 : Draggable windows ------------------------------------
Draggable.create(".spe",{
    type : "x,y",
    dragResistance : "0.98",
    bounds: {minX: -20, minY: -20, maxX: 20, maxY: 20} , 

    onRelease: function () { //When we release the window
        // Return to the initial position
        gsap.to(this.target, { x: 0, y: 0, duration: 0.5, ease: "back.out(5)" }); //this.target = HTML element that is being dragged
    }
})


//Animation 2 : Changing path for sec3 images-------------------------
let i = 0; //meter variable

//Lists of paths
let path1 = ["assets/img/AP-DG-2025-J7-33.jpg","assets/img/rox2.jpg","assets/img/spraywall.jpg","assets/img/AP-DG-2025-J7-37.jpg","assets/img/madrock.jpg","assets/img/sacha-lunettes.jpg"];
let path2 = ["assets/img/photographie2.jpg","assets/img/evolv.jpg","assets/img/photographie3.jpg","assets/img/neria.png","assets/img/AP-DG-2025-J3-16.jpg","assets/img/leoelie.jpg"];

// Function which select the next path
function accessPath(path){
    
    //Algo to iterate in paths lists
    let access = "assets/img/intro.jpg"
    if (i==5) {
        i = 0;
    } 
    access = path[i];
    i = i+1; 
    return access;
}

// This function change the source of images with id="sec3Image"
function changeImage() {
    let elem = document.getElementById("sec3Image");
    elem.src = accessPath(path1) //Select the 1st paths list
    elem.style.objectFit = "cover";
    };

// This function change the source of images with id="sec3Image2"
function changeImage2() {
    let elem = document.getElementById("sec3Image2");
    elem.src = accessPath(path2) //Select the 2nd paths list
    elem.style.objectFit = "cover";
    };

// Timeline image change 1
let tl = gsap.timeline({
    repeat: -1,
    yoyo: true
});

tl.to("#sec3Image", {
    duration: 0.5, 
    onComplete: changeImage,

});

// Timeline image change 2
let tl2 = gsap.timeline({
    repeat: -1,
    yoyo: true
});

tl.to("#sec3Image2", {
    duration: 0.5, 
    onComplete: changeImage2,

});


// Animation 3 : Underline CTA while hovering -----------------------------------
function lineCta(){
    document.getElementById("ctaLine").style.width = "150px";
    document.getElementById("ctaLine").style.height = "1px";
    document.getElementById("ctaLine").style.backgroundColor = "white";
}

function lineCtaOut(){
    document.getElementById("ctaLine").style.width = "0%";
}



//GSAP MatchMedia------------------------------------------------------------------------------------------------------------
let mm =gsap.matchMedia();

mm.add({
    isMobile : "(max-width:799px)",
    isDesktop : "(min-width:800px)",
},(context)=>{
    let {isMobile,isDesktop} = context.conditions;

      // Animation 4 : Project appear ------------------------------------------
      let tlProjets = gsap.timeline({ 
        scrollTrigger:{
            trigger: "#section4",
            pin: true,
            start: isMobile ? "top 3%": "top 0%", 
            end: isMobile ? "+=1000":"+=2000",
            scrub : 1,
            toggleActions : "play none reverse reset",
            snap : isMobile ? 0 : 0.7,
        },
    })

    tlProjets.from('#rox',{
        scale: 0,
        
        zIndex:1,
        motionPath : {
            path :"M0,0S198.17,300,-900,280",
            autoRotate : false,
            transformOrigin : 'center center'},
        duration : 2,
        
    
    })
    .from('#evolv',{
        scale: 0,
        zIndex:2,
        motionPath : {
            path :"M0,0S198.17,300,-900,280",
            autoRotate : false,
            transformOrigin : 'center center'},
        duration : 2,

    })
    .from('#spraywall',{
        scale: 0,
        zIndex:2,
        motionPath : {
            path :"M0,0S198.17,300,-900,280",
            autoRotate : false,
            transformOrigin : 'center center'},
        duration : 2,

    })
    .from('#photo',{
        scale: 0,
        zIndex:2,
        motionPath : {
            path :"M0,0S198.17,300,-900,280",
            autoRotate : false,
            transformOrigin : 'center center'},
        duration : 2,

    })
    .from('#madrock',{
        scale: 0,
        zIndex:2,
        motionPath : {
            path :"M0,0S198.17,300,-900,280",
            autoRotate : false,
            transformOrigin : 'center center'},
        duration : 2,

    })
    .from('#neria',{
        scale: 0,
        zIndex:2,
        motionPath : {
            path :"M0,0S198.17,300,-900,280",
            autoRotate : false,
            transformOrigin : 'center center'},
        duration : 2,

    })

    // Animation 5 : Growing image by scroll CTA section ------------------------------
    let tlCtaImage = gsap.timeline({
        scrollTrigger : {
            trigger : "#section5",
            start: isMobile ? "top 20%":"top 40%",
            end: "top 80%",
            scrub : 1,
            toggleActions : "play none reverse reset",
        }
    })

    tlCtaImage.from('#imageCtaSection',{
        scale : 0,
    })
    
})
