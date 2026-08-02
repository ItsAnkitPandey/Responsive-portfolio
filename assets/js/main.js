/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ------------------------Text Animation-----------------------------

const text = document.querySelector(".sec-text");
const experienceInline = document.getElementById("experience-years-inline");
const experienceWork = document.getElementById("experience-years-work");
const themeToggleButton = document.getElementById("theme-toggle");

const getExperienceValue = (joinYear, joinMonthIndex) => {
    const now = new Date();
    const monthsDiff = (now.getFullYear() - joinYear) * 12 + (now.getMonth() - joinMonthIndex);
    const elapsedMonths = Math.max(0, monthsDiff + 1);
    const yearsPart = Math.floor(elapsedMonths / 12);
    const monthPart = elapsedMonths % 12;
    return `${yearsPart}.${monthPart}`;
};

const setDynamicExperience = () => {
    const experienceText = `${getExperienceValue(2024, 5)} years`;
    if (experienceInline) experienceInline.textContent = experienceText;
    if (experienceWork) experienceWork.textContent = experienceText;
};

const applyTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("ankit-theme", theme);
    if (themeToggleButton) {
        themeToggleButton.innerHTML = theme === "dark" ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
    }
};

const initTheme = () => {
    const savedTheme = localStorage.getItem("ankit-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
        applyTheme(savedTheme);
        return;
    }
    applyTheme("dark");
};

themeToggleButton?.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
});

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "Java Full Stack Dev";
    }, 0);
    setTimeout(() => {
        text.textContent = "Spring Boot Dev";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Angular React Dev";
    }, 8000);
}
textLoad();
setInterval(textLoad,12000);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

initTheme();
setDynamicExperience();

//VALIDATE CONTACT FORM
function validateForm() {
    // Get form elements
    var nameInput = document.querySelector('input[name="name"]');
    var emailInput = document.querySelector('input[name="email"]');
    var messageInput = document.querySelector('textarea[name="message"]');

    // Check if any field is empty
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Please fill in all fields before submitting the form.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .education-item',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


