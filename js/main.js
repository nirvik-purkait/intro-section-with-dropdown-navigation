const body = document.body
const hamburgerButton = document.querySelector('#hamburger')
const navOption = document.querySelector('.nav-option')
let navbarClose = true

hamburgerButton.addEventListener('click', function () {
  navOption.classList.toggle('nav-open');
  body.classList.toggle('nav-open');

  if (navbarClose === true) {
    navbarClose = false
    hamburgerButton.src = './images/icon-close-menu.svg'
  }
  else {
    navbarClose = true    
    hamburgerButton.src = './images/icon-menu.svg'
  }
})


const featureButton = document.querySelector('.feature-button');
const featureList = document.querySelector('.feature-list')
const companyButton = document.querySelector('.company-button');
const companyList = document.querySelector('.company-list')
const dropdownImage = document.querySelectorAll('.dropdown-image')
let open1 = false
let open2 = false

featureButton.addEventListener('click', function () {

  featureList.classList.toggle('list-open')

  if (open1 === false) {
    open1 = true;
    dropdownImage[0].src = './images/icon-arrow-up.svg'
  }
  else {
    open1 = false;
    dropdownImage[0].src = './images/icon-arrow-down.svg'
  }
})


companyButton.addEventListener('click', function () {
  companyList.classList.toggle('list-open')
  
  if (open2 === false) {
    open2 = true;
    dropdownImage[1].src = './images/icon-arrow-up.svg'
  }
  else {
    open2 = false;
    dropdownImage[1].src = './images/icon-arrow-down.svg'
  }
})


window.addEventListener('resize', function () {
  const windowWidth = screen.width;
  let heroImage = this.document.querySelector('.hero-image');

  if (windowWidth >= 375) {
    heroImage.src = './images/image-hero-desktop.png'
  }
  else {
    heroImage.src = './images/image-hero-mobile.png'
  }
})

