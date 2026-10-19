import locale from "../locale/locale.json";
import { deployLoginPage } from "../ui/login";


export function createButtons (classes, buttonList, container) {

    let lang = document.getElementById("root").getAttribute("lang")

    const containerTag = container.getAttribute("id");

    for (const element in buttonList) {

        let newButton = document.createElement("button");
        newButton.setAttribute("class", classes);
        newButton.setAttribute("id", containerTag + "-" + element);
        newButton.textContent = locale[lang][containerTag][element];

        container.appendChild(newButton);

    }

}

export function changeLanguage (newLanguage) {

    document.getElementById("root").setAttribute("lang", newLanguage);

    let mode = document.getElementById("canvas").getAttribute("mode");

    (mode === "Login") ? deployLoginPage() : deployAppPage();


}

export function createMenuSections (container, sectionTitleText, elements) {

    // elements is an object with a key refering to a function.
    
    let lang = document.getElementById("root").getAttribute("lang");

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
        elementLabel.textContent = locale[lang]["menu-sections"]["Tasks"][element];

        elementContainer.appendChild(document.createElement("img"));
        elementContainer.appendChild(elementLabel);

        elementContainer.addEventListener("click", elements[element]);

        section.appendChild(elementContainer);

    }

    container.appendChild(section);

}

export function clearCanvas () {

    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "";

}

export function clearRightSection () {

    const rightSection = document.getElementById("right-section");
    rightSection.innerHTML = "";

}

export function createForm (container, formID, classes, fields) {

    let lang = document.getElementById("root").getAttribute("lang");

    for (let i in fields) {

        const fieldLabel = document.createElement("label");
        fieldLabel.setAttribute("for", fields[i]);
        fieldLabel.textContent = locale[lang]["forms"][formID][fields[i]];
        fieldLabel.setAttribute("class", classes + " form-label " + lang);

        const fieldInput = document.createElement("input");
        fieldInput.setAttribute("name", fields[i]);
        fieldInput.setAttribute("class", classes + " form-input " + lang);
        fieldInput.setAttribute("id", formID + "-" + fields[i]);
        (fields[i] === "password") ? fieldInput.setAttribute("type", "password") : console.log();

        const fieldContainer = document.createElement("div");
        fieldContainer.setAttribute("class", classes + " field-container");

        fieldContainer.appendChild(fieldLabel);
        fieldContainer.appendChild(fieldInput);

        container.appendChild(fieldContainer);

    }

}