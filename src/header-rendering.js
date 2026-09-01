import locale from "./locale/locale.json";
import { currentLang, pageProfile } from "./index";
import { changeLanguage, createButtons } from "./helpers/page-helpers";

export const APP_NAME = "TodoListo!";

export function createHeader () {

    
    const headerLeftContainer = document.createElement("div");
    headerLeftContainer.setAttribute("id", "header-left-container");
    headerLeftContainer.setAttribute("class", "header container");


    const headerRightContainer = document.createElement("div");
    headerRightContainer.setAttribute("id", "header-right-container");
    headerRightContainer.setAttribute("class", "header container");

    const appLogo = document.createElement("img");

    const appName = document.createElement("div");
    appName.textContent = APP_NAME;
    appName.setAttribute("class", "header logo generic");

    headerLeftContainer.appendChild(appLogo);
    headerLeftContainer.appendChild(appName);

    const appHeader = document.getElementsByTagName("header")[0];

    appHeader.appendChild(headerLeftContainer);
    appHeader.appendChild(headerRightContainer);

    createNavigation();

    
}

export function createNavigation () {

    const navigationMenu = document.createElement("nav");
    navigationMenu.setAttribute("id", "nav-bar");
    navigationMenu.setAttribute("class", "header nav-bar");

    createButtons ("header nav-bar button", locale[currentLang]["nav-bar"], navigationMenu);

    const container = document.getElementById("header-right-container");
    container.appendChild(navigationMenu);

    const langaugeSelector = document.createElement("select");

    langaugeSelector.setAttribute("name", "langauge");
    langaugeSelector.setAttribute("id", "language-selector");

    for (const language in locale) {

        const newLanguage = document.createElement("option");
        newLanguage.setAttribute("value", language);
        newLanguage.textContent = locale[language]["name"];
        langaugeSelector.appendChild(newLanguage);

    }

    container.appendChild(langaugeSelector);

    langaugeSelector.addEventListener("change", () => {
        console.log(pageProfile);
        changeLanguage(langaugeSelector.getAttribute("value"));
        console.log(pageProfile);
        console.log(currentLang);

    })

}





