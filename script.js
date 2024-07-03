// تسجيل المكون الإضافي SplitText
gsap.registerPlugin(SplitText);split
gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(ScrollSmoother) 

gsap.registerPlugin(ScrollToPlugin);

// تقسيم النص إلى أحرف
var split = new SplitText(".mainTitle", { type: "chars" });

// تحريك كل حرف بشكل مستقل
gsap.from(split.chars, {
    duration: 1,    
    y: 200,         
    autoAlpha: 0,   
    stagger: 0.05,
    delay:1,
    ease: "power3.Out",
    
});


var split00 = new SplitText(".mainTitle2", { type: "chars" });

// تحريك كل حرف بشكل مستقل
gsap.from(split00.chars, {
    duration: 1,    
    y: 200,         
    autoAlpha: 0,   
    stagger: 0.03,
    ease: "power3.Out",
    
});



setTimeout(function(){

    gsap.to(split3.chars, {
        duration: 4,    
        autoAlpha: 0,   
        stagger: -0.10,
        ease: "power3.Out",
        yoyo:true,
        repeat:-1

      
    });
},4000)

gsap.from(".mainQoute", {
    duration: 2,    
    autoAlpha: 0,   
    stagger: 0.05,
    delay:.5,
    ease: "power3.Out"
});

var split3 = new SplitText(".letter", { type: "chars" });

// تحريك كل حرف بشكل مستقل
gsap.from(split3.chars, {
    duration: 2,    
    y: 200,
    delay:1,         
    autoAlpha: 0,   
    stagger: 0.3,
    ease: "power3.Out"
});

var split33 = new SplitText(".media", { type: "chars" });

// تحريك كل حرف بشكل مستقل
gsap.from(split33.chars, {
    duration: 1,    
    y: 200,         
    autoAlpha: 0,   
    stagger: 0.2,
    ease: "power3.Out"
});
gsap.from(".circle1", {
    duration: 5,    
    autoAlpha: 0, 
    x:2000,
    yoyo:true,
    repeat:-1,  
    ease: "power3.Out"
});
gsap.from(".circle2", {
    duration: 5,    
    autoAlpha: 0, 
    x: -2000,
    yoyo: true,
    repeat: -1,  
    ease: "power3.out"
});


gsap.from(".circle3", {
    duration: 5,    
    autoAlpha: 0, 
    x:2000,
    yoyo:true,
    repeat:-1,  
    ease: "power3.Out"
});
gsap.from(".circle4", {
    duration: 5,    
    autoAlpha: 0, 
    x: -2000,
    yoyo: true,
    repeat: -1,  
    ease: "power3.out"
});
gsap.fromTo(".section-img", 
            {   

                x: -200,  // نقطة البداية
                autoAlpha: 0 // الشفافية تبدأ من 0
            },
            {   

                duration: 2,
                x: 0, // نقطة النهاية
                autoAlpha: 1,
                ease: "power3.out",
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                scrollTrigger: {
                    trigger: ".section-img",
                    start: "top 80%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
                    end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
                    scrub: 1,      // يجعل الحركة سلسة مع التمرير
                    markers: false    // لا يعرض علامات للتنقيح
                }
            }
        );

      
    gsap.from("#video1", {
        duration: 1,    
        y: 300,         
        ease: "power1.Out",
        scrollTrigger: {
            trigger: "#video1",
            start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
            end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
            scrub: 1,      // يجعل الحركة سلسة مع التمرير
            markers: false    ,
 
        }})
        gsap.from("#video2", {
            duration: 1,    
            y: 300,         
            ease: "power1.Out",
            scrollTrigger: {
                trigger: "#video2",
                start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
                end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
                scrub: true,      // يجعل الحركة سلسة مع التمرير
                markers: false    ,
           
            }})

  var split4 = new SplitText("#title2", { type: "chars" });

gsap.from(split4.chars, {
    duration: 1,    
    y: -200,         
    autoAlpha: 0,   
    stagger: 0.10,
    ease: "power1.Out",
    scrollTrigger: {
        trigger: "#title2",
        start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
        end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
        scrub: 1,      // يجعل الحركة سلسة مع التمرير
        markers: false    ,
    
    }})
    var split4 = new SplitText("#title222", { type: "chars" });

    gsap.from(split4.chars, {
        duration: 1,    
        y: -200,         
        autoAlpha: 0,   
        stagger: 0.10,
        ease: "power1.Out",
        scrollTrigger: {
            trigger: "#title222",
            start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
            end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
            scrub: 1,      // يجعل الحركة سلسة مع التمرير
            markers: false    ,
          
        }})
        gsap.from("#title222", {
            duration: 1,    
            width:"0%",
            scrollTrigger: {
                trigger: "#title222",
                start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
                end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
                scrub: 1,      // يجعل الحركة سلسة مع التمرير
                markers: false    ,
               
            }})
            
    var bright = new SplitText("#bright", { type: "chars" });

    gsap.from(bright.chars, {
        duration: 1,    
        y: -200,  
        autoAlpha: 0,   
        stagger: 0.10,
        ease: "power1.Out",
        scrollTrigger: {
            trigger: "#bright",
            start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
            end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
            scrub: 1,      // يجعل الحركة سلسة مع التمرير
            markers: false    ,
           
        }})

var split44 = new SplitText("#title3", { type: "chars" });

gsap.from(split44.chars, {
    duration: 1,    
    y: -200,         
    autoAlpha: 0,   
    stagger: 0.10,
    ease: "power1.Out",
    scrollTrigger: {
        trigger: "#title3",
        start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
        end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
        scrub: 1,      // يجعل الحركة سلسة مع التمرير
        markers: false    ,
       
    }})



gsap.from(".system",{
    duration: 1, 
    width:"0%",   
    stagger: 0.10,
    ease: "power1.Out",
    scrollTrigger: {
        trigger: ".system",
        start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
        end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
        scrub: 1,      // يجعل الحركة سلسة مع التمرير
        markers: false    ,
}})

gsap.from(".marquee",{
    duration: 1, 
    stagger: 0.10,
    ease: "power1.Out",
    scrollTrigger: {
        trigger: ".marquee",
        start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
        end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
        scrub: 1,      // يجعل الحركة سلسة مع التمرير
        markers: false    ,
}})
    gsap.from("#qoute2", {
        duration: 1,    
        x: -200,         
        autoAlpha: 0,   
        ease: "power1.Out",
        scrollTrigger: {
            trigger: "#qoute2",
            start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
            end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
            scrub: 1,      // يجعل الحركة سلسة مع التمرير
            markers: false    ,
           
        }})
    
        
    gsap.from("#qoute3", {
        duration: 1,    
        x: -200,         
        autoAlpha: 0,   
        ease: "power1.Out",
        scrollTrigger: {
            trigger: "#qoute3",
            start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
            end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
            scrub: 1,      // يجعل الحركة سلسة مع التمرير
            markers: false    ,
          
        }})
    
        gsap.to(".circle2", {
            scrollTrigger: {
                trigger: ".section-img",
                start: "top 100%",
                end: "top 30%",
                scrub: 1,
                markers: false,
            },
            y: 1000 // مقدار الحركة مع التمرير
        });
    
        gsap.to(".circle1", {
            scrollTrigger: {
                trigger: ".section-img",
                start: "top 100%",
                end: "top 30%",
                scrub: 1,
                markers: false,
            },
            y: 500 // مقدار الحركة مع التمرير
        });


        gsap.to(".circle4", {
            scrollTrigger: {
                trigger: "#tranding",
                start: "top 100%",
                end: "top 30%",
                scrub: 1,
                markers: false,
            },
            y: 1000 // مقدار الحركة مع التمرير
        });
    
        gsap.to(".circle3", {
            scrollTrigger: {
                trigger: "#tranding",
                start: "top 100%",
                end: "top 30%",
                scrub: 1,
                markers: false,
            },
            y: 500 // مقدار الحركة مع التمرير
        });
// ScrollSmoother.create({
//     smooth: 2, // how long (in seconds) it takes to "catch up" to the native scroll position
//     effects: false, // looks for data-speed and data-lag attributes on elements
//     smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
//   });


  const init = () => {
    const marquee = document.querySelector('[wb-data="marquee"]');
    if (!marquee) {
      return;
    }
    const duration = parseInt(marquee.getAttribute("duration"), 10) || 20;
    console.log(duration);
    const marqueeContent = document.querySelector(".marquee-content");
    if (!marqueeContent) {
      return;
    }
  
    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);
  
    let tween;
  
    const playMarquee = () => {
      let progress = tween ? tween.progress() : 0;
      tween && tween.progress(0).kill();
      const width = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("width"),
        10
      );
  
      const gap = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
        10
      );
  
      const distanceToTranslate = -1 * (gap + width);
  
      tween = gsap.fromTo(
        marquee.children,
        { x: 0 },
        { x: distanceToTranslate, duration, ease: "none", repeat: -1 }
      );
      tween.progress(progress);
    };
    playMarquee();
  
    function debounce(func) {
      var timer;
      return function (e) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(
          () => {
            func();
          },
          500,
          e
        );
      };
    }
  
    window.addEventListener("resize", debounce(playMarquee));
  };

  
  
  document.addEventListener("DOMContentLoaded", init);










    gsap.utils.toArray(".features-list li").forEach(function (li, i) {
        gsap.to(li, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: li,
                start: "top 80%", // Start animation when the top of the element is 80% from the top of the viewport
                end: "top 50%", // End animation when the top of the element is 50% from the top of the viewport
                scrub: 1,
                toggleActions: "play none none reverse",
            }
        });
    });


gsap.utils.toArray(".features-list span").forEach(function (span, s) {
    gsap.from(span, {
        opacity: 1,
        x: -200,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
            trigger: span,
            start: "top 80%", // Start animation when the top of the element is 80% from the top of the viewport
            end: "top 50%", // End animation when the top of the element is 50% from the top of the viewport
            scrub: 1,
            toggleActions: "play none none reverse",
        }
    });
});
gsap.utils.toArray('.card img').forEach(img => {
    gsap.fromTo(img, 
        {
            x: -50,
            autoAlpha: 0
        },
        {
            duration: 2,
            x: 0,
            autoAlpha: 1,
            ease: "power3.out",
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: img,
                start: "top 80%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
                end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
                scrub: 1,      // يجعل الحركة سلسة مع التمرير
                markers: false    // لا يعرض علامات للتنقيح
            }
        }
    );
});



gsap.utils.toArray('.card-title').forEach(title => {
    const splitTitle = new SplitText(title, { type: "chars" });

    gsap.from(splitTitle.chars, {
        duration: 1,
        x: 400,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.Out",
        scrollTrigger: {
            trigger: title,
            start: "top 200%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
            end: "top 60%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
            scrub: 1,      // يجعل الحركة سلسة مع التمرير
            markers: false,
           
        }
    });
});

    gsap.utils.toArray('.card-text').forEach(text => {
        gsap.from(text, {
            duration: 1,
            y: 50,
            autoAlpha: 0,
            ease: "power3.Out",
            scrollTrigger: {
                trigger: text,
                start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
                end: "top 80%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
                scrub: 1,      // يجعل الحركة سلسة مع التمرير
                markers: false,
          
            }
        });
    });
    
    
    var split5 = new SplitText(".system", { type: "chars" });

    gsap.from(split5.chars, {
        duration: 1,    
        x: 200,         
        autoAlpha: 0,   
        stagger: 0.10,
        ease: "power1.Out",
        scrollTrigger: {
            trigger: ".system",
            start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
            end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
            scrub: 1,      // يجعل الحركة سلسة مع التمرير
            markers: false    ,
           
        }})


gsap.from(".phone",{
    duration: 1, 
    stagger: 0.10,
    ease: "power1.Out",
    y:200,
    scrollTrigger: {
        trigger: ".phone",
        start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
        end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
        scrub: 1,      // يجعل الحركة سلسة مع التمرير
        markers: false    ,
}})


    
    
var split6 = new SplitText(".courses-text h6", { type: "chars" });

gsap.from(split6.chars, {
    duration: 1,    
    y: 200,         
    autoAlpha: 0,   
    stagger: 0.10,
    ease: "power1.Out",
    scrollTrigger: {
        trigger: "h6",
        start: "top 100%", // يبدأ عند وصول أعلى العنصر إلى 80% من ارتفاع النافذة
        end: "top 30%",   // ينتهي عند وصول أعلى العنصر إلى 30% من ارتفاع النافذة
        scrub: 1,      // يجعل الحركة سلسة مع التمرير
        markers: false    ,
     
    }})
   






// // Define the enter animations as a separate function
// function enterAnimations(data, isReload = false) {
//     const swipeTopAnim = isReload ? '-100%' : '-50%';
//     const swipeBottomAnim = isReload ? '100%' : '50%';
  
//     gsap.to('.swipe-top', 0.7, { y: swipeTopAnim, duration: 1 });
//     gsap.to('.swipe-bottom', 0.7, { y: swipeBottomAnim, duration: 1 });
  
//     gsap.from(data.next.container, 1.5, {
//       opacity: 0
//     });
//   }
  
//   // Function to apply animations based on previous state
//   function applyPreviousState() {
//     const previousPage = localStorage.getItem('previousPage');
//     if (previousPage) {
//       // Assuming you store the page path in localStorage
//       const currentPage = window.location.pathname;
//       if (currentPage === previousPage) {
//         enterAnimations({ next: { container: document.body } }, true);
//       }
//     }
//   }
  
//   // Apply previous state animations on page reload
//   applyPreviousState();
  
// barba.init({
//     transitions: [{
//       name: 'opacity-transition',
//       leave(data) {
//         gsap.to('.swipe-top',0.7,{ y:"50%",duration:1 } );
//         gsap.to('.swipe-bottom',0.7,{ y:"-50%",duration:1 } );


//         return gsap.to(data.current.container,1, {
//           opacity: 0
//         });
//       },
//       enter(data) {
//         gsap.to('.swipe-top',0.7,{ y:"-100%",duration:1 } );
//         gsap.to('.swipe-bottom',0.7,{ y:"100%",duration:1 } );

        
//       gsap.from(data.next.container, 1.5,{
//           opacity: 0
//         });
       
//       }
//     }],

   
//   });



//   startGsap();
// // Re-initialize GSAP ScrollTrigger and ScrollSmoother after page transition
// barba.hooks.beforeEnter(() => {
//     startGsap();


// });

var card1 = document.getElementById("firstCard")
var card2 = document.getElementById("secondCard")
var courseA = document.getElementById("courseA")
var courseB = document.getElementById("courseB")

function checkPoint(){
    
  
    gsap.to(card1, {
        autoAlpha: 0, 
        duration:.2,
    });
    gsap.to(card2, {
        autoAlpha: 0, 

        duration:.2,

    });

    gsap.to(window, {
        duration: 0,
        scrollTo: {
            y: "#course-container",
            offsetY: 50 // تعيين الإزاحة المطلوبة من أعلى
        },
        ease: "power3.out"
    });

    setTimeout(function(){
        
        courseA.style.display = 'block';

        card1.style.display = 'none';
        card2.style.display = 'none';
      
        var split7 = new SplitText(".section-title", { type: "chars" });
        gsap.to("#courseA", {
            duration: 2,    
            autoAlpha: 1, 
        });
        gsap.from(split7.chars, {
            duration: .5,    
            x: 200,         
            autoAlpha: 0,   
            stagger: 0.03,
            ease: "power3.Out",
           });
           
         
           gsap.utils.toArray(".course-list li").forEach(function (li, i) {
            gsap.from(li, {
                opacity: 0,
                y: 100,
                duration: 0.5,
                ease: "power3.out",
                delay: i * 0.1  // هذا يحدد التتابع لكل عنصر
            });
        });
  


    }, 200) 
 

}

function checkPoint2(){
    gsap.to(card1, {
        duration: .2,    
        autoAlpha: 0, 
    });
    gsap.to(card2, {
        duration: .2,    
        autoAlpha: 0, 
    });
    gsap.to(window, {
        duration: 0,
        scrollTo: {
            y: "#course-container",
            offsetY: 50 // تعيين الإزاحة المطلوبة من أعلى
        },
        ease: "power3.out"
    });
  setTimeout(function(){
    courseB.style.display = 'block';

    card1.style.display = 'none';
    card2.style.display = 'none';
   

    gsap.to("#courseB", {
        duration: .5,    
        autoAlpha: 1, 
        x:0,
        ease: "power3.out"
    });

        
var split7 = new SplitText("#sectionTitle", { type: "chars" });

gsap.from(split7.chars, {
    duration: .5,    
    x: 200,         
    autoAlpha: 0,   
    stagger: 0.03,
    ease: "power3.Out",
   });
   
 
   gsap.utils.toArray(".course-list2 li").forEach(function (li, i) {
    gsap.from(li, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "power3.out",
        delay: i * 0.1  // هذا يحدد التتابع لكل عنصر
    });


    
});
  },200)
   


}


function backCheckPoint(){
  
gsap.to(window, {
    duration: 0,
    scrollTo: {
        y: "#course-container",
        offsetY: 200 // تعيين الإزاحة المطلوبة من أعلى
    },
    ease: "power3.out"
});


    gsap.to("#courseA", {
        duration: .5,    
        autoAlpha: 0, 
        x:0,
        ease: "power3.out"
    });
    gsap.to("#courseB", {
        duration: .5,    
        autoAlpha: 0, 
        x:0,
        ease: "power3.out"
    });

    setTimeout(function(){
        courseA.style.display = 'none';
        courseB.style.display = 'none';
        card1.style.display = 'block';
        card2.style.display = 'block';
    gsap.to(card1, {
        duration: .5,    
        autoAlpha: 1, 
        x: 0,
        y:0,

    });
    gsap.to(card2, {
        duration: .5,    
        autoAlpha: 1, 
        x: 0,
        y:0,

    });
    },200)



}
var moveText = document.querySelector(".moveText")


function leave(){

    gsap.to(".move", {
        duration: .3,    
        scaleY:"100%",
        ease:"power3.inOut",
        transformOrigin:"bottom",
    });
    gsap.fromTo(".moveText", {
        duration: 1,    
        y:50,
        autoAlpha:0,
        ease:"power3.inOut",

        
    },
    {
        y:0,
        autoAlpha:1,
        delay:.3,

    }
);
}


var about = document.getElementById("about")

// إضافة event listener للرابط
about.addEventListener("click", function(event) {
    event.preventDefault(); // منع السلوك الافتراضي للرابط
    leave(); // تنفيذ الدالة
    moveText.innerHTML = "Media"

    setTimeout(
        function(){

            window.location.href = about.href; // توجيه المستخدم إلى الصفحة المستهدفة

        },800
    )

    
});
    

var contact = document.getElementById("contact")



// إضافة event listener للرابط
contact.addEventListener("click", function(event) {
    event.preventDefault(); // منع السلوك الافتراضي للرابط
    
    moveText.innerHTML = "Contact"
    leave(); // تنفيذ الدالة
    setTimeout(
        function(){

            window.location.href = contact.href; // توجيه المستخدم إلى الصفحة المستهدفة

        },800
    )

    
});
    

var home = document.getElementById("home")
var move = document.querySelector(".move")




// // إضافة event listener للرابط
// home.addEventListener("click", function(event) {
//     event.preventDefault(); // منع السلوك الافتراضي للرابط
    
//     moveText.innerHTML = " home"
//     leave(); // تنفيذ الدالة
//     setTimeout(
//         function(){

//             window.location.href = event.target.href; // توجيه المستخدم إلى صفحة العمل

//         },900
//     )

    
// });
    
function intro(){
    

        
gsap.fromTo(".alpha1", {
    duration: 1, 
    x:-200, 
    stagger: 0.05,
    delay:0,
    rotateZ:"180deg",
autoAlpha:0,
    ease: "power3.inOut"
},
{
    duration: 1, 
    y:0, 
    x:0,  
    delay:0,
    rotateZ:"0deg",
autoAlpha:1,
    ease: "power3.inOut"
});
          
gsap.fromTo(".alpha2", {
    duration: 1, 
    y:100, 
  
    stagger: 0.05,
    delay:0,
    rotateZ:"180deg",
autoAlpha:0,
    ease: "power3.inOut"
},
{
    duration: 1, 
    y:0,   
    delay:0.1,
    rotateZ:"0deg",
autoAlpha:1,
    ease: "power3.inOut"
});
        
gsap.fromTo(".alpha3", {
    duration: 1, 
    x:200, 
   
    stagger: 0.05,
    delay:0,
    rotateZ:"180deg",
autoAlpha:0,
    ease: "power3.inOut"
},
{
    duration: 1, 
    y:0,
    x:0,  
   
    delay:0,
    rotateZ:"0deg",
autoAlpha:1,
    ease: "power3.inOut"
});
gsap.fromTo(".slogan", {
    duration: 1, 
    y:100,   
    stagger: 0.05,
    delay:0.1,
autoAlpha:0,
    ease: "power3.inOut"
},
{
    duration: 1, 
    y:0,
    x:0,  
   
    delay:0.2,
autoAlpha:1,
    ease: "power3.inOut"
});

setTimeout(function(){
    gsap.to(".intro", {
        duration: 1, 
        y:-1000,   
    
        stagger: 0.05,
        delay:0,
        ease: "power3.inOut"
    });
     

      
 

},1000)

}

intro()

// window.addEventListener('load', function() {
//     // Check the type of navigation
//     const entries = performance.getEntriesByType("navigation");
//     if (entries.length > 0 && entries[0].type === 'reload') {
//         // The page was reloaded
//         handlePageReload();
//     }
// });

// function handlePageReload() {
//     // Your code here
//     console.log('Page was reloaded!');
//     intro()
//     // Add your function calls or logic that should execute on page reload
// }


var loading  = document.querySelector(".loading")
window.onload = function(){
    loading.style.display = 'none';
}



gsap.from("#contact", {
    duration: .5,    
    autoAlpha: 0, 
    delay:.5,
    y:50,
    ease: "power3.Out"
});
gsap.from("#con1", {
    duration: 1,    
    autoAlpha: 0, 
    delay:.6,
    y:50,
    ease: "power3.Out"
});
gsap.from("#con2", {
    duration: 1,    
    autoAlpha: 0, 
    delay:.7,
    y:50,
    ease: "power3.Out"
});
gsap.from("#con3", {
    duration: 1,    
    autoAlpha: 0, 
    delay:.8,
    y:50,
    ease: "power3.Out"
});
gsap.from("#location", {
    duration: 1,    
    autoAlpha: 0, 
    delay:.5,
    y:50,
    ease: "power3.Out"
});



function explore(){
    gsap.to(window, {duration: 1,
        scrollTo: {
            y: "#target-section",
            offsetY: 100 // تعيين الإزاحة المطلوبة من أعلى
        },

        });
}

gsap.fromTo("#scroll-icon",
    {opacity: 0, y: 0},
    {
        opacity: 1,
        y: 0,
        rotateZ:"360deg",
        duration: 1,
        scrollTrigger: {
            trigger: "#scroll-icon",
            start: "top 75%", // متى تبدأ الرسوم المتحركة
            end: "top 50%", // متى تنتهي الرسوم المتحركة
            toggleActions: "play none none reverse" // إجراءات التبديل
        },
        onComplete: () => {
            // تفعيل الأيقونة
            document.getElementById("scroll-icon").setAttribute("trigger");
        }
    }
);