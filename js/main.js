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
let path1 = ["assets/img/AP-DG-2025-J7-33.jpg","assets/img/rox2.jpg","assets/img/spraywall.jpg","assets/img/AP-DG-2025-J7-37.jpg","assets/img/madrock.jpg"];
let path2 = ["assets/img/photographie2.jpg","assets/img/evolv.jpg","assets/img/photographie3.jpg","assets/img/neria.png","assets/img/AP-DG-2025-J3-16.jpg"];

function accessPath(path){
    
    let access = "assets/img/intro.jpg"
    if (i==5) {
        i = 0;
    } 
    access = path[i];
    i = i+1; 
    return access;
}

// This function change all images with id= "imgSpe"
function changeImage() {
    let elem = document.getElementById("sec3Image");
    elem.src = accessPath(path1)
    elem.style.objectFit = "cover";
    };


function changeImage2() {
    let elem = document.getElementById("sec3Image2");
    elem.src = accessPath(path2)
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

