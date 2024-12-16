// Auto-type
var typed = new Typed(".auto-type", {
  strings: ['Coder', 'Frontend Developer', 'Software Engineer', 'React Developer'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});


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

bar.addEventListener('click', () => {
  header.classList.add('nav-open')
})

close.addEventListener('click', () => {
  header.classList.remove('nav-open')
})


// STICKY NAVIGATION
const hero = document.querySelector('.hero')
const headerHeight = header.getBoundingClientRect().height

function callback([entry]) {
  if (!entry.isIntersecting) {
    header.classList.add('sticky')
  } else header.classList.remove('sticky')
}

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
}

const headerObserver = new IntersectionObserver(callback, options)
headerObserver.observe(hero)



// Reveal Sections
const all = document.querySelectorAll('section')
// removing hero section
const allSections = []
for (let i = 1; i < all.length; i++) {
  allSections.push(all[i])
}

function revealCallback(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.remove('hidden')
    sectionObserver.unobserve(entry.target)
  })
}

const revealoptions = {
  root: null,
  rootMargin : '-80px',
}

const sectionObserver = new IntersectionObserver(revealCallback, revealoptions)

allSections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('hidden')
})

// Lazy Loading
const lazyImages = document.querySelectorAll('.project-image-container img')

function lazyCallback(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.src = entry.target.dataset.src
    entry.target.addEventListener('load', () => entry.target.classList.remove('blur'))
    imgObserver.unobserve(entry.target)
  })
}

const lazyOptions = {
  root: null,
  threshold: 0
}
const imgObserver = new IntersectionObserver(lazyCallback, lazyOptions)
lazyImages.forEach(img => {
  img.classList.add('blur')
  imgObserver.observe(img)
})

// Dark Theme
const body = document.querySelector('body')
const btnTheme = document.querySelector('.theme')

let theme
document.addEventListener('DOMContentLoaded', () => {
  theme = localStorage.getItem('theme')
  if (!theme) return
  body.classList.add(theme)
})

btnTheme.addEventListener('click', () => {
  localStorage.setItem('theme', 'dark')
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', '')
  }
  body.classList.toggle('dark')
})