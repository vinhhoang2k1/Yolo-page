let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav__menu-left');

var slideControlLeft = document.querySelector('.bx-chevron-left');
var slideControlRight = document.querySelector('.bx-chevron-right');
var numberActive = document.querySelector('.number-active');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let couter = 1;

// slide chay 


slideControlLeft.onclick = () => {
    couter -= 1;
    console.log(couter)
    if (couter < 1) {
        couter = 3;
    }
    document.getElementById('radio' + couter).checked = true;
    numberActive.innerHTML = `<p class="number-active">${couter}</p>`;
}
slideControlRight.onclick = () => {
    couter += 1;
    console.log(couter)
    if (couter > 3 ) {
        couter = 1;
    }
    numberActive.innerHTML = `<p class="number-active">${couter}</p>`;
    document.getElementById('radio' + couter).checked = true;
}
setInterval(() => {
    couter++;
    if (couter > 3) {
        couter = 1;
    }
    numberActive.innerHTML = `<p class="number-active">${couter}</p>`;
    document.getElementById('radio' + couter).checked = true;
    
}, 5000) 
