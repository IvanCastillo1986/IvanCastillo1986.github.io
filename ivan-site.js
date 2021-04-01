console.log('ivan-site.js works!')

let main = document.querySelector('main')

let goHome = document.getElementById('go-home')

let aboutMeSection = document.getElementById("about-me")
let projectsSection = document.getElementById("projects")
let skillsSection = document.getElementById("skills")

let aboutMeLink = document.getElementById("nav-about")
let projectsLink = document.getElementById("nav-projects")
let skillsLink = document.getElementById("nav-skills")

let navPrompt = document.getElementById("nav-prompt")

const myDefault = () => {
    aboutMeSection.style.display = 'none'
    projectsSection.style.display = 'none'
    skillsSection.style.display = 'none'
    // main.style.display = 'none'
}

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
//         myDefault()
//         link.style.display = "block";
//         saySomethingElse()
//     })
// }
// clickMe(aboutMeLink)


aboutMeLink.addEventListener("click", () => {
    myDefault()
    aboutMeSection.style.display = "block";
    saySomethingElse()
})

projectsLink.addEventListener("click", () => {
    myDefault()
    projectsSection.style.display = "block"
    saySomethingElse()
})

skillsLink.addEventListener("click", () => {
    myDefault()
    skillsSection.style.display = "block"
    saySomethingElse()
})


goHome.addEventListener('click', () => {
    navPrompt.innerHTML = 'Welcome traveler.<br>I am \'The Gatekeeper\'.<br>A sentient lifeform built by Ivan.<br><br>How would you like to proceed human?'
    myDefault()

})
goHome.addEventListener('mouseover', () => {
    goHome.style.color = '#02EFEE';
    setTimeout(() => {
        goHome.style.color = 'blue';
    }, 500);
}, false)
