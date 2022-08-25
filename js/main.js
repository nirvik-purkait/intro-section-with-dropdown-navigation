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
  console.log(navbarClose);
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


const headingText = document.querySelector('.heading-text')
const headingImage = document.querySelector('.heading-image')


console.log(headingText.clientHeight);

headingImage.style.height = `${headingText.clientHeight}px`