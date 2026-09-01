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
