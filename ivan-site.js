import { projectsArray } from "./projects.js"
import { cyberDocsArray, cyberPapersArray } from "./cyber-projects.js"

/*
renderWebProject()  :  takes project objects from projects.js and converts them to entry in Projects page
addWorkInProgressIcon()  :  creates a workInProgress img to add to unfinished projects in renderWebProject()

hideAllSections()  :  

changeBubbleText()  :  

navigateToPage()  :  

*/


const body = document.querySelector('body')

const homeLink = document.getElementById('go-home')
const aboutMeSection = document.getElementById("about-me")
const projectsSection = document.getElementById("projects")
const skillsSection = document.getElementById("skills")
const cyberSection = document.getElementById("cyber")

const aboutMeLink = document.getElementById("nav-about")
const projectsLink = document.getElementById("nav-projects")
const skillsLink = document.getElementById("nav-skills")
const cyberLink = document.getElementById("nav-cyber")

const navPrompt = document.getElementById("nav-prompt")
const robot = document.getElementById("robot-container")
const spritesheet = document.getElementById("spritesheet")





// ------------------------------ Projects Page ------------------------------------


const renderWebProject = (project) => {
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
    const projectImgContainer = document.createElement('div');
    projectImgContainer.className = 'project-img-container';
    
    const workInProgressIcon = document.createElement('img');
    workInProgressIcon.className = 'work-in-progress-icon';
    workInProgressIcon.src = 'images/assets/icon/work-in-progress.png';
    workInProgressIcon.alt = 'A work in progress sign';
    
    appAnchor.appendChild(workInProgressIcon);
    projectImgContainer.appendChild(appAnchor);
    return projectImgContainer;
};

// We will map through each item in projectsArray, and append each item to Projects section in index.html
for (const project of projectsArray) {
    projectsSection.appendChild(renderWebProject(project));
}



// ------------------------------ Cyber Page ------------------------------------


const renderCyberDocument = (doc) => {
    // take in document{} as args
    // create a <div> element for it
    const docDiv = document.createElement('div')
    // set the className, the url
    docDiv.className = 'cyber-doc'
    // create a <p> for title
    const docTitle = document.createElement('p')
    docTitle.className = 'title'
    docTitle.textContent = doc.docTitle
    // create a <p> for description
    const docDescription = document.createElement('p')
    docDescription.className = 'description'
    // set the textContent to document{} description property
    docDescription.textContent = doc.docDescription
    // create anchor
    const docImgAnchor = document.createElement('a')
    docImgAnchor.className = 'doc-img-anchor'
    docImgAnchor.href = doc.docUrl
    // create img
    const img = document.createElement('img')
    img.src = doc.imgSrc
    img.alt = doc.imgAlt
    // attach img to anchor
    docImgAnchor.appendChild(img)
    // attach title, description, anchor to docDiv
    docDiv.appendChild(docTitle)
    docDiv.appendChild(docDescription)
    docDiv.appendChild(docImgAnchor)
    // return the document, to be called and appended in loop
    return docDiv
}

const cyberDocsSection = document.getElementById('cyber-documentations')
const cyberDocsContainer = document.createElement('div')
cyberDocsContainer.className = 'cyber-docs-container'
for (const cyberDoc of cyberDocsArray) {
    // cyberDocsSection.appendChild(renderCyberDocument(cyberDoc))
    cyberDocsContainer.appendChild(renderCyberDocument(cyberDoc))
}
cyberDocsSection.appendChild(cyberDocsContainer)

const cyberPapersSection = document.getElementById('cyber-papers')
const cyberPapersContainer = document.createElement('div')
cyberPapersContainer.className = 'cyber-papers-container'
for (const cyberPaper of cyberPapersArray) {
    // cyberPapersSection.appendChild(renderCyberDocument(cyberPaper))
    cyberPapersContainer.appendChild(renderCyberDocument(cyberPaper))
}
cyberPapersSection.appendChild(cyberPapersContainer)




// ------------------------------ Nav ------------------------------------

// hide every <Section> on nav link click, so that we can display new section
const hideAllSections = () => {
    aboutMeSection.style.display = 'none';
    projectsSection.style.display = 'none';
    skillsSection.style.display = 'none';
    cyberSection.style.display = 'none';
};


let newLocationPrompt;

// change Robot's text. Will call whenever a nav link is clicked
const changeBubbleText = (textArr) => {
    // remove any lingering timeouts
    clearTimeout(newLocationPrompt);

    // remove all elements from navPrompt
    navPrompt.innerHTML = '';

    // declare function to create new line
    function createNewLine(idx) {
        const newLine = document.createElement('div');
        newLine.id = 'line' + (idx + 1);
        newLine.textContent = textArr[idx];
        return newLine;
    };
    // forEach el in textArr, create new line element, and append it to navPrompt
    for (let i = 0; i < textArr.length; i++) {
        navPrompt.appendChild(createNewLine(i));
    }
    
    newLocationPrompt = setTimeout(function() {
        navPrompt.innerHTML = '';
        textArr = ["You\'re still here homosapien?", "Do you have a new location in mind?"];

        for (let i = 0; i < textArr.length; i++) {
            navPrompt.appendChild(createNewLine(i));
        }
    }, 4000);
};


function navigateToPage(anchorElement, sectionToRender, textSpeechArray) {
    anchorElement.addEventListener("click", () => {
        if (sectionToRender.style.display === 'block') {
            // if the clicked link is already the displayed section, display text as "you're already here"
            changeBubbleText(["You\'re already here visitor.", "Choose another location."]);
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


homeLink.addEventListener('click', () => {
    hideAllSections();
    
    changeBubbleText([
        "Welcome traveler.", 
        "I am 'The Gatekeeper'.", 
        "A sentient android built by Ivan.", 
        "How would you like to proceed human?"
    ]);

    clearTimeout(newLocationPrompt);
});

homeLink.addEventListener('mouseover', () => {
    homeLink.style.color = '#02EFEE';
    setTimeout(() => {
        homeLink.style.color = 'blue';
    }, 500);
}, false);


// Clicking Robot Functionality
let numOfHits = 0;

const firstHit = ["Hey! Stop that!"];
const secondHit = ["HEY!", "What did I ever do to you?!"];
const thirdHit = ["If you don't stop that right now,", "I'm gonna get really mad!"];
const fourthHit = ["RAAAHHHRRRRWEHWASDFGVSHKJNBCA!!!"];

const bubblePointer = document.getElementById('bubble-pointer');

// ToDo: reflow the animation element by removing it, then adding it back on

function hitRobotAnimation (currentClass) {
    spritesheet.src = 'images/assets/mega-man/mega-man-hit.png';

    const hitTimeout = setTimeout(() => {
        spritesheet.src = 'images/assets/mega-man/mega-man-blink-frown.png';
        spritesheet.classList.remove('hit');
        spritesheet.classList.add('blinking');
    }, 900);

    if (currentClass === 'hit') {
        clearTimeout(hitTimeout)
    } 
    
    if (currentClass === 'blinking') {
        spritesheet.classList.remove('blinking');
        void body.offsetWidth;
        spritesheet.classList.add('hit');
    } else {  // if clicked during .hit animation, restart .hit
        spritesheet.classList.remove('hit');
        void spritesheet.offsetWidth;
        spritesheet.classList.add('hit');
    }
}


robot.addEventListener('click', () => {
    // CSS animation class .useRobotClick changes the style of selected body element
    // we need to trigger a reflow so that it happens on each click
    
    // remove the animation class
    body.classList.remove('useRobotClick');
    // trigger reflow
    void body.offsetWidth;
    // re-add the class
    body.classList.add('useRobotClick');

    // here we add a .negativeSpace property to the classList element, since we can't directly access pseudo-elements
    // we are adding 'negativeSpace' to the bubblePointer's classList (DOMTokenList)
    // we then have the following selector defined in the CSS file to execute animation:
    // #bubble-pointer.negativeSpace::after { background-color: black; transition: background-color 0.5s ease; }
    bubblePointer.classList.remove('negativeSpace');
    void bubblePointer.offsetWidth;
    bubblePointer.classList.add('negativeSpace');

    // get current animation class, to pass into hitRobotAnimation()
    function getSpritesheetClass() {
        if (spritesheet.classList.contains('blinking')) return 'blinking'
        else return 'hit'
    }

    hitRobotAnimation(getSpritesheetClass())

    
    numOfHits++;
    if (numOfHits === 1) changeBubbleText(firstHit);
    else if (numOfHits === 2) changeBubbleText(secondHit);
    else if (numOfHits === 3) changeBubbleText(thirdHit);
    else if (numOfHits >= 4) changeBubbleText(fourthHit);
});


const paragraphs = document.querySelectorAll('.dialogue')
function typeText(pIdx) {
    
    const displayDialogue = setInterval(() => {
        if (pIdx < paragraphs.length) {
            paragraphs[pIdx].classList.add('typed')
            pIdx++
        } else {
            clearInterval(displayDialogue)
        }
    }, 1500)
}
typeText(0)