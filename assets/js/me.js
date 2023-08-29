// Open buttons
const openEcozoButton = document.getElementById('openEcozoOverlay');
const openChappieButton = document.getElementById('openChappieOverlay');
const openCoralButton = document.getElementById('openCoralOverlay');
const openTermtavButton = document.getElementById('openTermtavOverlay');

// Close buttons
const closeEcozoButton = document.getElementById('closeEcozoOverlay');
const closeChappieButton = document.getElementById('closeChappieOverlay');
const closeCoralButton = document.getElementById('closeCoralOverlay');
const closeTermtavButton = document.getElementById('closeTermtavOverlay');

// Modal overlays
const ecozoOverlay = document.getElementById('ecozoOverlay');
const chappieOverlay = document.getElementById('chappieOverlay');
const coralOverlay = document.getElementById('coralOverlay');
const termtavOverlay = document.getElementById('termtavOverlay');

// Opening event listeners
openEcozoButton.addEventListener('click', () => {
    ecozoOverlay.classList.add('show');
});
openChappieButton.addEventListener('click', () => {
    chappieOverlay.classList.add('show');
});
openCoralButton.addEventListener('click', () => {
    coralOverlay.classList.add('show');
});
openTermtavButton.addEventListener('click', () => {
    termtavOverlay.classList.add('show');
});

// Closing event listeners
closeEcozoButton.addEventListener('click', () => {
    ecozoOverlay.classList.remove('show');
});
closeChappieButton.addEventListener('click', () => {
    chappieOverlay.classList.remove('show');
});
closeCoralButton.addEventListener('click', () => {
    coralOverlay.classList.remove('show');
});
closeTermtavButton.addEventListener('click', () => {
    termtavOverlay.classList.remove('show');
});

var ecozoIndex = 0;
var chappieIndex = 0;
var coralIndex = 0;
var termtavIndex = 0;

showEcozoSlide(ecozoIndex);
showChappieSlide(chappieIndex);
showCoralSlide(coralIndex);
showTermtavSlide(termtavIndex);

function showEcozoSlide(index) {
    const query = "#ecozoOverlay .slide";
    var slides = document.querySelectorAll(query);
    if (index >= slides.length) {
        ecozoIndex = 0;
    } else if (index < 0) {
        ecozoIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[ecozoIndex].style.display = "block";
}

function showChappieSlide(index) {
    const query = "#chappieOverlay .slide";
    var slides = document.querySelectorAll(query);
    if (index >= slides.length) {
        chappieIndex = 0;
    } else if (index < 0) {
        chappieIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[chappieIndex].style.display = "block";
}

function showCoralSlide(index) {
    const query = "#coralOverlay .slide";
    var slides = document.querySelectorAll(query);
    if (index >= slides.length) {
        coralIndex = 0;
    } else if (index < 0) {
        coralIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[coralIndex].style.display = "block";
}

function showTermtavSlide(index) {
    const query = "#termtavOverlay .slide";
    var slides = document.querySelectorAll(query);
    if (index >= slides.length) {
        termtavIndex = 0;
    } else if (index < 0) {
        termtavIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[termtavIndex].style.display = "block";
}

document.querySelector("#ecozoOverlay .prev").addEventListener("click", function () {
    showEcozoSlide(ecozoIndex -= 1);
});
document.querySelector("#chappieOverlay .prev").addEventListener("click", function () {
    showChappieSlide(chappieIndex -= 1);
});
document.querySelector("#coralOverlay .prev").addEventListener("click", function () {
    showCoralSlide(coralIndex -= 1);
});
document.querySelector("#termtavOverlay .prev").addEventListener("click", function () {
    showTermtavSlide(termtavIndex -= 1);
});

document.querySelector("#ecozoOverlay .next").addEventListener("click", function () {
    showEcozoSlide(ecozoIndex += 1);
});
document.querySelector("#chappieOverlay .next").addEventListener("click", function () {
    showChappieSlide(chappieIndex += 1);
});
document.querySelector("#coralOverlay .next").addEventListener("click", function () {
    showCoralSlide(coralIndex += 1);
});
document.querySelector("#termtavOverlay .next").addEventListener("click", function () {
    showTermtavSlide(termtavIndex += 1);
});
