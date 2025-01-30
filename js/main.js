//GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//GSAP Demo animation
/*gsap.to("#introImageWrapper",{
    motionPath : {
        path : "M728.47,0S754.49,657.5,0,657.5",
        autoRotate : false,
    }
    
})*/

/*ScrollTrigger : {
    duration : 3,
    trigger : '#section2',
    start : 'top 60%',
    end : 'top 20%',
    markers : true,
    id : '#introImageWrapper',
    toggleActions : 'none reverse reset'
    },*/

//Drag fonctionnality----------------------------------------
Draggable.create(".spe",{
    type : "x,y",
    inertia : true,
    dragResistance : "0.97",
    bounds: {minX: -20, minY: -20, maxX: 20, maxY: 20} , 

    onRelease: function () {
        // Retour à la position initiale
        gsap.to(this.target, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
    }
})



//Changing path for sec3 images----------------------------------------------------------
let i = 0;

// Function which select the next path
function accessPath(){
    let path = ["assets/img/AP-DG-2025-J7-33.jpg","assets/img/AP-DG-2025-J7-37.jpg","assets/img/AP-DG-2025-J7-39.jpg","assets/img/intro.jpg"];
    let access = "assets/img/intro.jpg"
    if (i==4) {
        i = 0;
    } 
    access = path[i];
    i = i+1; 
    return access;
}

// This function change all images with id= "imgSpe"
function changeImage() {
    let elem = document.getElementById("change");
    elem.src = accessPath()
    };


// Timeline
let tl = gsap.timeline({
    repeat: -1,
    yoyo: true
});

tl.to(".imgSpe", {
    duration: 1, 
    onComplete: changeImage,

});
/*let i = 0;


//Choosing path
function accessPath(){
    let access = ""
    let path = ["assets\img\AP-DG-2025-J7-33.jpg","assets\img\AP-DG-2025-J7-37.jpg","assets\img\AP-DG-2025-J7-39.jpg","assets\img\intro.jpg"];
    if (i==5) {
        i = 0;
    } else {
        access = path[i];
        i+=1;
    }
    return access;
}



//Changing image
function changeImage(){
    document.getElementById('imgSpe').src = accessPath();
}


let tl = gsap.timeline({
    repeat : -1,
    yoyo : true,
})

tl.to(".imgSpe",
    changeImage(),{stagger : 0.5,})
.to(".imgSpe",
    changeImage(),{stagger : 0.5,})*/

//liste de chemins d'accès
//variable i pour itérer sur la liste
//si i >5 on réinitialise et on la met à 0
//récupère et renvoie la valeur [i] de la liste
//ajoute 1 à i

/*gsap.to("#introImageWrapper", {
    width: "100vw", // Remplit toute la largeur
    height: "100vh", // Remplit toute la hauteur
    top: 0,
    left: 0,
    position: "fixed",
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#section2",
        start: "top bottom", // Débute quand le bas de section2 atteint le haut de la fenêtre
        end: "top top", // Finit quand le haut de section2 atteint le haut de la fenêtre
        scrub: 1, // Effet fluide
    }
});*/