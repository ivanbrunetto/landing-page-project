/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section');
let activeSection = null;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNavLi(id, name) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + id;
    a.id = 'nav-' + id;
    a.classList.add('menu__link');
    //a.classList.add(id);
    a.innerText = name;
    li.appendChild(a);
    return li
}

function toggleActiveSection(active) {
    for (const section of sections) {
        if (section === active) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
}

function toggleActiveNavLink(active) {
    const menuItems = document.querySelectorAll('.menu__link');
    for (const menuItem of menuItems) {
        if (menuItem === active) {
            menuItem.classList.add('active');
        } else {
            menuItem.classList.remove('active');
        }
    }
}

// Add class 'active' to section when it is near top of viewport
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            if (activeSection != section) {
                toggleActiveSection(section);
                toggleActiveNavLink(document.querySelector('#nav-' + section.id));

            }
            activeSection = section;
        }
    }
    
}

function throttle (callbackFn, limit) {
    let wait = false;                  
    return function () {              
        if (!wait) {                  
            callbackFn.call();           
            wait = true;               
            setTimeout(function () {   
                wait = false;          
            }, limit);
        }
    }
}  

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavigation() {
    const navbarList = document.getElementById('navbar__list');
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        const li = buildNavLi(section.id, section.dataset.nav);
        fragment.appendChild(li);
    }
    navbarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToSmooth(anchor) {
    const idIndex = anchor.href.search(/#/);
    const id = anchor.href.substring(idIndex + 1);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
    buildNavigation();
    
});


// Scroll to section on link click
document.querySelector('.navbar__menu').addEventListener('click', event => {
    const target = event.target;
    if (target.nodeName === 'A') {
        event.preventDefault();
        scrollToSmooth(target);
    }
});


// Set sections as active
document.addEventListener("scroll", throttle(makeActive, 100));

