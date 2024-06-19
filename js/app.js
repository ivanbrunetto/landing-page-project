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
console.log(sections);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



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
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + section.id;
        a.className = 'menu__link';
        a.innerText = section.dataset.nav;
        li.appendChild(a);
        fragment.appendChild(li);
    }
    navbarList.appendChild(fragment);


}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


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

// Set sections as active


