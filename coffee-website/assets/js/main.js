window.sr = ScrollReveal();
sr.reveal('.anime-left',{
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
})

sr.reveal('.anime-right',{
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.anime-top',{
  origin: 'top',
  duration: 1500,
  distance: '25rem',
  delay: 300
})

sr.reveal('.anime-bottom',{
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 300
})

let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function menuToggle() {
  if (sideNav.style.right === "-250px") {
    sideNav.style.right = "0px";
  } else {
    sideNav.style.right = "-250px";
  }
}
