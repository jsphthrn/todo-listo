import locale from "./locale/locale.json";
import { createButtons } from "./helpers/page-helpers";
import { createHeader, createNavigation} from "./header-rendering";

export const pageProfile = document.getElementsByTagName("html")[0];

export let lang = pageProfile.getAttribute("lang");
export const pageHeader = document.getElementsByTagName("header")[0];

createHeader();
