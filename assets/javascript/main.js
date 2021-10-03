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
    numberActive.innerHTML = `<p class="number-active">${couter}</p>`;
    document.getElementById('radio' + couter).checked = true;
    couter -= 1;
    if (couter < 1) {
        couter = 3;
    }
}
slideControlRight.onclick = () => {
    numberActive.innerHTML = `<p class="number-active">${couter}</p>`;
    document.getElementById('radio' + couter).checked = true;
    couter += 1;
    if (couter > 3 ) {
        couter = 1;
    }
}
setInterval(() => {
    document.getElementById('radio' + couter).checked = true;
    couter++;
    numberActive.innerHTML = `<p class="number-active">${couter -   1 }</p>`;
    if (couter > 3) {
        couter = 1;
    }
}, 5000)
