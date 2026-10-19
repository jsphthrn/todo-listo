import { dummyFunction } from "../helpers/dummy-functions";
import { clearCanvas } from "../helpers/page-helpers";
import { createMenuSections } from "../helpers/page-helpers";


export function deployAppPage () {

    const lang = document.getElementById("root").getAttribute("lang");

    const canvas = document.getElementById("canvas")

    canvas.setAttribute("mode", "app");
    clearCanvas();

    // left panel

    const leftPanel = document.createElement("div");
    leftPanel.setAttribute("id", "app-left-panel");

    const leftPanelHeader = document.createElement("div");
    leftPanelHeader.setAttribute("class", "panel-header");

    const avatarSmall = document.createElement("img");
    avatarSmall.setAttribute("class", "avatar");

    const userName = document.createElement("div");
    userName.textContent = "First Last";
    userName.setAttribute("class", "panel-header username " + lang)

    leftPanelHeader.appendChild(avatarSmall);
    leftPanelHeader.appendChild(userName);

    leftPanel.appendChild(leftPanelHeader);

    canvas.appendChild(leftPanel);

    const rightSection = document.createElement("div");
    rightSection.setAttribute("id", "right-section");
    
    canvas.appendChild(rightSection);

    // sections

    const taskSection = document.createElement("div");

    createMenuSections(taskSection, "Tasks", {

        "new-task": dummyFunction,
        "today": dummyFunction,
        "this-week": dummyFunction,

    });

    leftPanel.appendChild(taskSection);

    // checklists

    const checklistSection = document.createElement("div");

    createMenuSections(checklistSection, "Lists", {

        "new-list": dummyFunction,
        "tags": dummyFunction,

    });

    leftPanel.appendChild(checklistSection);

    // projects

    const projectSection = document.createElement("div");

    createMenuSections(projectSection, "Projects", {

        "new-project": dummyFunction (),
        "my-projects": dummyFunction (),
        "upcoming-deadlines": dummyFunction (),

    });

    leftPanel.appendChild(projectSection);

    // notes

    const noteSection = document.createElement("div");

    createMenuSections(noteSection, "Notes", {

        "new-note": dummyFunction,
        "my-notes": dummyFunction,

    });

    leftPanel.appendChild(noteSection);

    

}