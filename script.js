// Auto-type
var typed = new Typed(".auto-type", {
  strings: ['Coder', 'Frontend Developer', 'Software Engineer', 'React Developer'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Sticky navigation

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

// TABED COMPONENT
const btnParent = document.querySelector('.about .grid')
const btnRight = document.querySelector('.about .btn-right')
const btnLeft = document.querySelector('.about .btn-left')

btnLeft.addEventListener('click', () => {
  btnParent.classList.add('left-active')
  btnParent.classList.remove('right-active')
})

btnRight.addEventListener('click', () => {
  btnParent.classList.add('right-active')
  btnParent.classList.remove('left-active')
})

// MOBILE NAVIGATION

const bar = document.querySelector('.bar')
const close = document.querySelector('.close')
const header = document.querySelector('.header')
console.log(bar)

bar.addEventListener('click', () => {
  header.classList.add('nav-open')
})

close.addEventListener('click', () => {
  header.classList.remove('nav-open')
})