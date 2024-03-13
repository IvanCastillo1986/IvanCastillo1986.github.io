import { projectsArray } from "./projects.js"

/*
renderProject()  :  takes project objects from projects.js and converts them to entry in Projects page
addWorkInProgressIcon()  :  creates a workInProgress img to add to unfinished projects in renderProject()

hideAllSections()  :  

changeBubbleText()  :  

navigateToPage()  :  

*/


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
const robot = document.getElementById("robot")


const renderProject = (project) => {
    // This re-usable function creates a <project> div, containing a:
    //  title that links to github, a decription, and an img that links to app
    const projectDiv = document.createElement('div')
    projectDiv.className = 'project'

    const githubAnchor = document.createElement('a')
    githubAnchor.href = project.githubUrl

    const title = document.createElement('p')
    title.className = 'title'
    title.textContent = project.appTitle
    githubAnchor.appendChild(title)

    const description = document.createElement('p')
    description.className = 'description'
    description.textContent = project.appDescription
    
    const appAnchor = document.createElement('a')
    appAnchor.href = project.appUrl

    const img = document.createElement('img')
    img.src = project.imgSrc
    img.alt = project.imgAlt
    appAnchor.appendChild(img)

    projectDiv.appendChild(githubAnchor)
    projectDiv.appendChild(description)

    if (project.unfinished) {
        const projectImgContainer = addWorkInProgressIcon(appAnchor)
        projectDiv.appendChild(projectImgContainer)
    } else {
        projectDiv.appendChild(appAnchor)
    }
    
    return projectDiv
}

function addWorkInProgressIcon(appAnchor) {
    const projectImgContainer = document.createElement('div')
    projectImgContainer.className = 'project-img-container'
    
    const workInProgressIcon = document.createElement('img')
    workInProgressIcon.className = 'work-in-progress-icon'
    workInProgressIcon.src = 'images/work-in-progress.png'
    workInProgressIcon.alt = 'A work in progress sign'
    
    appAnchor.appendChild(workInProgressIcon)
    projectImgContainer.appendChild(appAnchor)
    return projectImgContainer
}

// We will map through each item in projectsArray, and append each item to Projects section in index.html
for (const project of projectsArray) {
    projectsSection.appendChild(renderProject(project))
}



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

    // function to create new line
    function createNewLine(idx) {
        const newLine = document.createElement('div')
        newLine.id = 'line' + (idx + 1)
        newLine.textContent = textArr[idx]
        return newLine
    }
    // forEach el in textArr, create new line element, and append it to navPrompt
    for (let i = 0; i < textArr.length; i++) {
        navPrompt.appendChild(createNewLine(i))
    }
    
    newLocationPrompt = setTimeout(function() {
        navPrompt.innerHTML = ''
        textArr = ["You\'re still here homosapien?", "Do you have a new location in mind?"]

        for (let i = 0; i < textArr.length; i++) {
            navPrompt.appendChild(createNewLine(i))
        }
    }, 4000);
};



function navigateToPage(anchorElement, sectionToRender, textSpeechArray) {
    anchorElement.addEventListener("click", () => {
        if (sectionToRender.style.display === 'block') {
            // if the clicked link is already the displayed section, display text as "you're already here"
            changeBubbleText(["You\'re already here visitor.", "Choose another location."])
        } else {
            // else, navigate to new page
            hideAllSections();
            sectionToRender.style.display = "block";
            changeBubbleText(textSpeechArray);
        }
    });
};

navigateToPage(aboutMeLink, aboutMeSection, ["We have arrived homonid.", "Enjoy your stay. Scroll down"]);
navigateToPage(projectsLink, projectsSection, ["We have arrived homonid.", "Enjoy your stay. Scroll down"]);
navigateToPage(skillsLink, skillsSection, ["We have arrived homonid.", "Enjoy your stay. Scroll down"]);
navigateToPage(cyberLink, cyberSection, ["We have arrived homonid.", "Enjoy your stay. Scroll down"]);


goHome.addEventListener('click', () => {
    hideAllSections();
    
    changeBubbleText([
        "Welcome traveler.", 
        "I am 'The Gatekeeper'.", 
        "A sentient android built by Ivan.", 
        "How would you like to proceed human?"
    ]);

    clearTimeout(newLocationPrompt);
});

goHome.addEventListener('mouseover', () => {
    goHome.style.color = '#02EFEE';
    setTimeout(() => {
        goHome.style.color = 'blue';
    }, 500);
}, false);


// Clicking Robot Functionality
let numOfHits = 0

const firstHit = ["Hey! Stop that!"]
const secondHit = ["HEY!", "What did I ever do to you?!"]
const thirdHit = ["If you don't stop that right now,", "I'm gonna get really mad!"]
const fourthHit = ["RAAAHHHRRRRWEHWASDFGVSHKJNBCA!!!"]

robot.addEventListener('click', () => {
    numOfHits++
    if (numOfHits === 1) changeBubbleText(firstHit)
    else if (numOfHits === 2) changeBubbleText(secondHit)
    else if (numOfHits === 3) changeBubbleText(thirdHit)
    else if (numOfHits >= 4) changeBubbleText(fourthHit)
});










// ------------------------------------------------------------------------------------------

// removed after replacing with navigateToPage()

// aboutMeLink.addEventListener("click", () => {
//     hideAllSections();
//     aboutMeSection.style.display = "block";
//     changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
//     console.log(aboutMeLink)
//     console.log(aboutMeSection)
// });

// projectsLink.addEventListener("click", () => {
//     hideAllSections();
//     projectsSection.style.display = "block";
//     changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
// });

// skillsLink.addEventListener("click", () => {
//     hideAllSections();
//     skillsSection.style.display = "block";
//     changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
// });

// cyberLink.addEventListener("click", () => {
//     hideAllSections();
//     cyberSection.style.display = "block";
//     changeBubbleText(['We have arrived homonid', 'Enjoy your stay. Scroll down']);
// });