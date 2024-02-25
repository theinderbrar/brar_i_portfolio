
function openIndex() {
    	 
    var url = 'index.html';
   
        setTimeout(function() {
            window.location.href = url;
        }, 200);
}

 
// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define animations for scroll effects
gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
    }
});

gsap.from(".slide-up", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".slide-up",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
    }
});

gsap.from(".rotate", {
    opacity: 0,
    rotation: -180,
    duration: 1,
    scrollTrigger: {
        trigger: ".rotate",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
    }
});

 gsap.to(".mygalleryimg", {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
gsap.to(".left-alignh1", {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
gsap.to(".top-left", {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
 

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define animations for scroll effects
gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".fade-in",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
    }
});

gsap.from(".slide-up", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".slide-up",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
    }
});

gsap.from(".rotate", {
    opacity: 0,
    rotation: -180,
    duration: 1,
    scrollTrigger: {
        trigger: ".rotate",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
    }
});
 
var animation2 = new SplitType("#animation2", { type: "chars" });

    var chars2 = animation2.chars;  

gsap.from(chars2, {
        duration: 1,
        opacity: 0,
        y: -100,
        stagger: 0.1,
        ease: "power5.out",
        color: "#000FFF",
        textDecoration: "none",
        fontWeight: "bold",
        onComplete: function() {
            gsap.to(chars2, {
                duration: 1,
                opacity: 1,
                delay: 1, // Delay before fading out
                ease: "power5.out",
                onComplete: function() {
                //     chars4.forEach(char => char.style.display = "block"); 
                }
            });
        }
    });
    
 
var animation3 = new SplitType("#animation3", { type: "chars" });

    var chars3 = animation3.chars;  

    gsap.from(chars3, {
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.1,
        ease: "power5.out",
        color: "#000FFF",  
        textDecoration: "none", 
        fontWeight: "bold"  
    });

var animation4 = new SplitType("#animation4", { type: "chars" });

    var chars4 = animation4.chars;  


    gsap.from(chars4, {
        duration: 1,
        opacity: 0,
        y: -100,  
        stagger: 0.1,  
        ease: "power5.out",  
        color: "#000FFF",  
        textDecoration: "none",  
        fontWeight: "bold"  
    });
    gsap.from(".fade-in", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".fade-in",
            start: "top 80%",
            end: "bottom 80%",
            scrub: true
        }
    });
    
    document.querySelector('#about').addEventListener('click', function(event) {
       // event.preventDefault(); // Prevent default behavior of anchor tag
     //  alert("sds")
       // navigateSmoothly(this.getAttribute('href')); // Navigate smoothly to the target section
      });
      var letswork = new SplitType("#letswork", { type: "chars" });

     var letsworkchars = letswork.chars;

     gsap.from(letsworkchars, {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: "power4.out",
      onComplete: function() {
         letsworkchars.forEach(function(char) {
          char.style.textTransform = "uppercase";
        });
      }
    });

  