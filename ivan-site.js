// console.log('ivan-site.js works!')

/* 
index.html
The Link is in the navigation bar
The Section is in the Main page

ivan-site.js
NOTE: this is the flow for displaying a certain Section (looks like different page to user)

get reference to cyberSection and create element variable
get reference to cyberLink and create element variable
add eventListener to click on cyberLink
    run hideAllSections() to set all other elements to display = 'none'
    display cyberSection by changing element css to display = 'block'
    changeBubbleText()

*/

const main = document.querySelector('main')

const goHome = document.getElementById('go-home')
const lineOne = document.getElementById('line-one')
const lineTwo = document.getElementById('line-two')
const lineThree = document.getElementById('line-three')
const lineFour = document.getElementById('line-four')

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

const hideNavPrompt = () => {
    lineOne.style.display = 'none'
    lineTwo.style.display = 'none'
    lineThree.style.display = 'none'
    lineFour.style.display = 'none'
}

let newLocationPrompt
// change Robot's text. Will call whenever a nav link is clicked
const changeBubbleText = (home) => {
    // if home, clear all timeouts
    if (home) {
        lineOne.innerHTML = 'Welcome traveler.'
        lineTwo.innerHTML = 'I am \'The Gatekeeper\'.'
        lineThree.innerHTML = 'A sentient android built by Ivan.'
        lineFour.innerHTML = 'How would you like to proceed human?'
    
        lineOne.style.display = 'block'
        lineTwo.style.display = 'block'
        lineThree.style.display = 'block'
        lineFour.style.display = 'block'
    } else {
        hideNavPrompt()
        clearTimeout(newLocationPrompt)
        // declare variable for setTimeout to be cleared and executed in changeBubbleText()

        lineOne.style.display = 'block'
        lineOne.innerHTML = 'We have arrived homonid'
        lineTwo.style.display = 'block'
        lineTwo.innerHTML = 'Enjoy your stay. Scroll down'

        newLocationPrompt = setTimeout(function() {
            lineOne.innerHTML = 'You\'re still here homosapien?'
            lineTwo.innerHTML = 'Do you have a new location in mind?'
        }, 5000)
    }
}



aboutMeLink.addEventListener("click", () => {
    hideAllSections()
    aboutMeSection.style.display = "block";
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down', 'You\'re still here homosapien?', 'Do you have a new location in mind?'], false)
})

projectsLink.addEventListener("click", () => {
    hideAllSections()
    projectsSection.style.display = "block"
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down', 'You\'re still here homosapien?', 'Do you have a new location in mind?'], false)
})

skillsLink.addEventListener("click", () => {
    hideAllSections()
    skillsSection.style.display = "block"
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down', 'You\'re still here homosapien?', 'Do you have a new location in mind?'], false)
})

cyberLink.addEventListener("click", () => {
    hideAllSections()
    cyberSection.style.display = "block"
    changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down', 'You\'re still here homosapien?', 'Do you have a new location in mind?'], false)
})


goHome.addEventListener('click', () => {
    changeBubbleText([
        'Welcome traveler.', 
        'I am \'The Gatekeeper\'.', 
        'A sentient android built by Ivan.', 
        'How would you like to proceed human?'
    ], true)
    // lineOne.innerHTML = 'Welcome traveler.'
    // lineTwo.innerHTML = 'I am \'The Gatekeeper\'.'
    // lineThree.innerHTML = 'A sentient android built by Ivan.'
    // lineFour.innerHTML = 'How would you like to proceed human?'

    // lineThree.style.display = 'block'
    // lineFour.style.display = 'block'

    hideAllSections()
})
goHome.addEventListener('mouseover', () => {
    goHome.style.color = '#02EFEE';
    setTimeout(() => {
        goHome.style.color = 'blue';
    }, 500);
}, false)
