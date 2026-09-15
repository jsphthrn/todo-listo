import locale from "../locale/locale.json";
import { currentLang, pageProfile} from "../index"
import { createHeader } from "../header-rendering";

export function createButtons (classes, buttonList, container) {

    const containerTag = container.getAttribute("id");

    for (const element in buttonList) {

        let newButton = document.createElement("button");
        newButton.setAttribute("class", classes);
        newButton.setAttribute("id", containerTag + "-" + element);
        newButton.textContent = locale[currentLang][containerTag][element];

        container.appendChild(newButton);

    }

}

export function changeLanguage (newLanguage) {

    pageProfile.setAttribute("lang", newLanguage);
    currentLang = newLanguage;
    createHeader();

}

export function createMenuSections (container, sectionTitleText, elements) {

    // elements is an object with a key refering to a function.

    let sectionClass = container.getAttribute("class");

    const section = document.createElement("div");
    section.setAttribute("class", sectionClass + " menu-section");

    const sectionTitle = document.createElement("div");
    sectionTitle.setAttribute("class", sectionClass + " section-title");
    sectionTitle.textContent = sectionTitleText;

    section.appendChild(sectionTitle);

    for (let element in elements) {

        const elementContainer = document.createElement("div");
        elementContainer.setAttribute("class", "element-container " + sectionClass)
        
        const elementLabel = document.createElement("div");
        elementLabel.setAttribute("class", "element-label " + sectionClass);
        elementLabel.textContent = elements[element]["label"];

        elementContainer.appendChild(document.createElement("img"));
        elementContainer.appendChild(elementLabel);

        elementContainer.addEventListener("click", elements[element]["function"]);

        section.appendChild(elementContainer);

    }

    container.appendChild(section);

}