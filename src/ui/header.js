import locale from "../locale/locale.json"
import { changeLanguage, createButtons } from "../helpers/page-helpers";

export function deployHeader () {

    const profile = document.getElementById("root");

    let lang = profile.getAttribute("lang");
    let theme = profile.getAttribute("theme");

    const canvas = document.getElementById("canvas");

    const header = document.createElement("header");

    const appTitle = document.createElement("div");
    appTitle.textContent = "TodoListo!";
    appTitle.setAttribute("class", "app-title generic");

    const navigation = document.createElement("nav");
    navigation.setAttribute("id", "nav-bar");

    const languageSelector = document.createElement("select");
    languageSelector.setAttribute("name", "lang");
    languageSelector.value = lang;

    for (let entry in locale) {

        const option = document.createElement("option");
        option.setAttribute("for", "lang");
        option.setAttribute("value", entry);
        (entry === lang) ? option.setAttribute("selected", "") : console.log("");
        option.textContent = locale[entry]["name"];

        languageSelector.appendChild(option);

    }
    
    languageSelector.addEventListener("change", () => {

        changeLanguage(languageSelector.value);

    })


    createButtons(lang + " menu-option", locale[lang]["nav-bar"], navigation);

    const rightContainer = document.createElement("div");
    rightContainer.setAttribute("id", "header-right");
    rightContainer.appendChild(navigation);
    rightContainer.appendChild(languageSelector);

    header.appendChild(appTitle);

    header.appendChild(rightContainer);

    canvas.appendChild(header);

}