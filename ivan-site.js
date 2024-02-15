console.log('ivan-site.js works!')

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
    saySomethingElse()

*/

let main = document.querySelector('main')

let goHome = document.getElementById('go-home')

let aboutMeSection = document.getElementById("about-me")
let projectsSection = document.getElementById("projects")
let skillsSection = document.getElementById("skills")
let cyberSection = document.getElementById("cyber")

let aboutMeLink = document.getElementById("nav-about")
let projectsLink = document.getElementById("nav-projects")
let skillsLink = document.getElementById("nav-skills")
let cyberLink = document.getElementById("nav-cyber")

let navPrompt = document.getElementById("nav-prompt")


// hide every <Section> on nav link click, so that we can display new section
const hideAllSections = () => {
    aboutMeSection.style.display = 'none'
    projectsSection.style.display = 'none'
    skillsSection.style.display = 'none'
    cyberSection.style.display = 'none'
}

// display Robot's default text. Will call whenever a nav link is clicked
const saySomethingElse = () => {
    navPrompt.textContent = ''
    navPrompt.textContent = 'We have arrived homonid. Enjoy your stay. Scroll down.'
    setTimeout(function() {
        navPrompt.style.paddingLeft = '30px';
        navPrompt.innerHTML = 'You\'re still here homosapien?<br>Do you have a new location in mind?'
    }, 5000)
}




// Try to make a function that removes the recurrence of the same code in the addEventListener


// function clickMe(link) {
//     link.addEventListener("click", () => {
//         hideAllSections()
//         link.style.display = "block";
//         saySomethingElse()
//     })
// }
// clickMe(aboutMeLink)


aboutMeLink.addEventListener("click", () => {
    hideAllSections()
    aboutMeSection.style.display = "block";
    saySomethingElse()
})

projectsLink.addEventListener("click", () => {
    hideAllSections()
    projectsSection.style.display = "block"
    saySomethingElse()
})

skillsLink.addEventListener("click", () => {
    hideAllSections()
    skillsSection.style.display = "block"
    saySomethingElse()
})

cyberLink.addEventListener("click", () => {
    hideAllSections()
    cyberSection.style.display = "block"
    saySomethingElse()
})


goHome.addEventListener('click', () => {
    navPrompt.innerHTML = 'Welcome traveler.<br>I am \'The Gatekeeper\'.<br>A sentient lifeform built by Ivan.<br><br>How would you like to proceed human?'
    hideAllSections()

})
goHome.addEventListener('mouseover', () => {
    goHome.style.color = '#02EFEE';
    setTimeout(() => {
        goHome.style.color = 'blue';
    }, 500);
}, false)
