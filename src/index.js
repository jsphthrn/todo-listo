import locale from "./locale/locale.json";
import { createButtons } from "./helpers/page-helpers";
import { createHeader, createNavigation} from "./header-rendering";
import "./style.css";
import { deployApp } from "./app-render";

export const pageProfile = document.getElementsByTagName("html")[0];

console.log(pageProfile);

export let currentLang = pageProfile.getAttribute("lang");
export const pageHeader = document.getElementsByTagName("header")[0];

function changeLanguage (newLanguage) {

    pageProfile.setAttribute("lang", newLanguage);
    currentLang = newLanguage;
    createHeader();

}


createHeader();

deployApp();