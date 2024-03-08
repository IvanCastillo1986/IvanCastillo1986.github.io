// console.log('ivan-site.js works!')

const main = document.querySelector('main')

const goHome = document.getElementById('go-home')

const aboutMeSection = document.getElementById("about-me")
const projectsSection = document.getElementById("projects")
const skillsSection = document.getElementById("skills")
const cyberSection = document.getElementById("cyber")

const aboutMeLink = document.getElementById("nav-about")
const projectsLink = document.getElementById("nav-projects")
const skillsLink = document.getElementById("nav-skills")
const cyberLink = document.getElementById("nav-cyber")

const navPrompt = document.getElementById("nav-prompt")


// hide every <Section> on nav link click, so that we can display new section
const hideAllSections = () => {
    aboutMeSection.style.display = 'none'
    projectsSection.style.display = 'none'
    skillsSection.style.display = 'none'
    cyberSection.style.display = 'none'
}



let newLocationPrompt
// change Robot's text. Will call whenever a nav link is clicked
const changeBubbleText = (textArr) => {
    // remove any lingering timeouts
    clearTimeout(newLocationPrompt)

    // remove all elements from navPrompt
    navPrompt.innerHTML = ''

    // iterate textArr[], for each sentence in textArr
    for (let i = 0; i < textArr.length; i++) {
        // create new line element, and append it to navPrompt
        const newLine = document.createElement('div')
        newLine.id = 'line' + (i + 1)
        newLine.textContent = textArr[i]
        
        navPrompt.appendChild(newLine)
    }


    newLocationPrompt = setTimeout(function() {
        line1.textContent = 'You\'re still here homosapien?'
        line2.textContent = 'Do you have a new location in mind?'

        // if there are any extra lines, delete them
        if (textArr.length > 2) {
            // iterate textArr[]
            for (let i = 2; i < textArr.length; i++) {
                // remove current element of textArr[]
                const elToRemove = document.getElementById('line' + i);
                navPrompt.removeChild(elToRemove);
            }
        }
    }, 4000);
};



aboutMeLink.addEventListener("click", () => {
    hideAllSections();
    aboutMeSection.style.display = "block";
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
});

projectsLink.addEventListener("click", () => {
    hideAllSections();
    projectsSection.style.display = "block";
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
});

skillsLink.addEventListener("click", () => {
    hideAllSections();
    skillsSection.style.display = "block";
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
});

cyberLink.addEventListener("click", () => {
    hideAllSections();
    cyberSection.style.display = "block";
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
});


goHome.addEventListener('click', () => {
    hideAllSections();
    
    changeBubbleText([
        'Welcome traveler.', 
        'I am \'The Gatekeeper\'.', 
        'A sentient android built by Ivan.', 
        'How would you like to proceed human?'
    ]);

    clearTimeout(newLocationPrompt);
});


goHome.addEventListener('mouseover', () => {
    goHome.style.color = '#02EFEE';
    setTimeout(() => {
        goHome.style.color = 'blue';
    }, 500);
}, false);
