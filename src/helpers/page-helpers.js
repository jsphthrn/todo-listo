import locale from "../locale/locale.json";
import {lang} from "../index"

export function createButtons (classes, buttonList, container) {

    const containerTag = container.getAttribute("id");

    for (const element in buttonList) {

        let newButton = document.createElement("button");
        newButton.setAttribute("class", classes);
        newButton.setAttribute("id", containerTag + "-" + element);
        newButton.textContent = locale[lang][containerTag][element];

        container.appendChild(newButton);

    }

}
