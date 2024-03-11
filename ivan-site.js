import { projectsArray } from "./projects.js"


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
        // adds work-in-progress icon to unifinished project's
        const projectImgContainer = document.createElement('div')
        projectImgContainer.className = 'project-img-container'

        const workInProgressIcon = document.createElement('img')
        workInProgressIcon.className = 'work-in-progress-icon'
        workInProgressIcon.src = 'images/work-in-progress.png'
        workInProgressIcon.alt = 'A work in progress sign'
        
        appAnchor.appendChild(workInProgressIcon)
        projectImgContainer.appendChild(appAnchor)
        projectDiv.appendChild(projectImgContainer)
        
    } else {
        projectDiv.appendChild(appAnchor)
    }
    
    return projectDiv
}

{/* 
<div class="project">
    <a href="https://github.com/IvanCastillo1986/art-gallery">
    <p class="title">Code Canvas Corner</p>
    </a>

    <p class="description">Art Gallery for coded art</p>
    
    <div class="project-img-container">
        <a href="https://code-canvas.netlify.app/">
            <img src="images/code-canvas-corner.png" alt="A screenshot of Code Canvas Corner web app" />
            <img class="work-in-progress-icon" src="images/work-in-progress.png" alt="A work in progress sign" />
        </a>
    </div>

</div> 
*/}

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
