// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;   
        let height = sec.offsetHeight;
        let id     = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation footer on scroll

}



//seccion donde manejo el idioma
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");


const changeLanguage = async (language) =>{
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json()

    for (const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.lenguaje);
});




//funcion que copia mi correo al hacer click
let copyText = document.querySelector(".copy_text");
copyText.querySelector("button").addEventListener("click",function(){
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copyText.classList.remove("active");
    },2500);
});


//funcion acordeon de texto para about
function toggleText() {
    const hiddenText = document.querySelector('.hidden-text');
    const readMore = document.querySelector('.read-more');

        if (hiddenText.style.display === 'none') {
            hiddenText.style.display = 'inline';
            readMore.textContent = 'Read less';
        } else {
            hiddenText.style.display = 'none';
            readMore.textContent = 'Read more';
        }
}





//mix up portofolio

/* 
let mixerPortofolio = mixitup('.portofolio_container', {
    selectors: {
        target: '.portofolio_card'
    },
    animation: {
        duration: 300
    }
});*/
