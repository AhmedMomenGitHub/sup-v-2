gsap.fromTo(".move", {
    duration: 1,    
    scaleY:"100%",
    ease:"power3.inOut",
    transformOrigin:"top",
},
{
  duration: 1,    
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

document.getElementById('mapIframe').onload = function() {
  // Hide the spinner
  document.getElementById('spinner').style.display = 'none';
  // Show the iframe
  document.getElementById('mapIframe').style.display = 'block';
};