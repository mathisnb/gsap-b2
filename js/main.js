//GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//GSAP Animation-------------------------------------------------------------------------------------------------------------

//GSAP MatchMedia
let mm =gsap.matchMedia();

mm.add({
    isMobile : "(max-width:799px)",
    isDesktop : "(min-width:800px)",
},(context)=>{
    let {isMobile,isDesktop} = context.conditions;

  
})

//Drag fonctionnality
Draggable.create(".spe",{
    type : "x,y",
    inertia : false,
    dragResistance : "0.98",
    bounds: {minX: -20, minY: -20, maxX: 20, maxY: 20} , 

    onRelease: function () {
        // Retour à la position initiale
        gsap.to(this.target, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
    }
})


//Changing path for sec3 images
let i = 0;

// Function which select the next path
function accessPath(){
    let path = ["assets/img/AP-DG-2025-J7-33.jpg","assets/img/AP-DG-2025-J7-39.jpg","assets/img/intro.jpg","assets/img/AP-DG-2025-J7-37.jpg"];
    let access = "assets/img/intro.jpg"
    if (i==3) {
        i = 0;
    } 
    access = path[i];
    i = i+1; 
    return access;
}

// This function change all images with id= "imgSpe"
function changeImage() {
    let elem = document.getElementById("sec3Image");
    elem.src = accessPath()
    elem.style.objectFit = "cover";
    };


// Timeline image change
let tl = gsap.timeline({
    repeat: -1,
    yoyo: true
});

tl.to("#sec3Image", {
    duration: 1, 
    onComplete: changeImage,

});

//Project appear
let tlProjets = gsap.timeline({ 
    scrollTrigger:{
        trigger: "#section4",
        pin: true,
        start: "top 0%",
        end: "+=2000",
        scrub : 1,
        //markers : true,
        toggleActions : "play none reverse reset",
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

//-----------------
let tlCtaImage = gsap.timeline({
    scrollTrigger : {
        trigger : "#section5",
        //markers : true,
        start: "top 40%",
        end: "top 80%",
        scrub : 1,
        toggleActions : "play none reverse reset",
    }
})

tlCtaImage.from('#imageCtaSection',{
    scale : 0,
})

