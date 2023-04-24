const menuBtn = document.querySelector('.menu'),
navBox = document.querySelector('.links-container'),
navLinks = document.querySelectorAll('.nav-links > li'),
contactBtn = document.querySelector('.contact');


function showHide(){
    navBox.classList.toggle('none');
}

menuBtn.addEventListener('click', showHide)

navLinks.forEach(link =>{
    link.addEventListener('click', showHide)
})

contactBtn.addEventListener('click', showHide)