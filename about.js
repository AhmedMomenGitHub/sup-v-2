var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

    gsap.fromTo(".move", {
        duration: 1,    
        scaleY:"100%",
        ease:"power3.inOut",
        transformOrigin:"top",
    },
    {
      duration: .7,    
      scaleY:"0%",
      ease:"power3.inOut",
      transformOrigin:"top",
  });
  gsap.fromTo(".moveText", {
    duration: 1,    
    y:0,
    autoAlpha:1,
    ease:"power3.Out",
    delay:1
},
{
    duration: .5,    
    y:-50,
    autoAlpha:0,
    ease:"power3.inOut",
}
);