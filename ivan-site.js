
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
}



aboutMeLink.addEventListener("click", () => {
    myDefault()
    aboutMeSection.style.display = "block";
    navPrompt.textContent = ''
    navPrompt.textContent = 'We have arrived homonid. Enjoy your stay.'
    setTimeout(function() {
        navPrompt.style.paddingLeft = '30px';
        navPrompt.innerHTML = 'You\'re still here homosapien?<br>Do you have a new location in mind?'
    }, 5000)
})

projectsLink.addEventListener("click", () => {
    myDefault()
    projectsSection.style.display = "block"
    navPrompt.textContent = ''
    navPrompt.textContent = 'We have arrived homonid. Enjoy your stay.'
    setTimeout(function() {
        navPrompt.style.paddingLeft = '30px';
        navPrompt.innerHTML = 'You\'re still here homosapien?<br>Do you have a new location in mind?'
    }, 5000)
})

skillsLink.addEventListener("click", () => {
    myDefault()
    skillsSection.style.display = "grid"
    navPrompt.textContent = ''
    navPrompt.textContent = 'We have arrived homonid. Enjoy your stay.'
    setTimeout(function() {
        navPrompt.style.paddingLeft = '30px';
        navPrompt.innerHTML = 'You\'re still here homosapien?<br>Do you have a new location in mind?'
    }, 5000)
})

contactLink.addEventListener("click", () => {
    myDefault()
    contactsSection.style.display = "grid"
    navPrompt.textContent = ''
    navPrompt.textContent = 'We have arrived homonid. Enjoy your stay.'
    setTimeout(function() {
        navPrompt.style.paddingLeft = '30px';
        navPrompt.innerHTML = 'You\'re still here homosapien?<br>Do you have a new location in mind?'
    }, 5000)
})