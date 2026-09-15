import locale from "./locale/locale.json";
import { createMenuSections } from "./helpers/page-helpers";
import { dummyFunction } from "./helpers/dummy-functions";

function createMenu (appContainer) {

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu-panel");
    menu.setAttribute("class", "left-panel");

    // section toolkit

    const toolkit = document.createElement("div");
    
    // following code is for testing purposes.

    let options = {

        "add-task": {

            "label": "Add new task",
            "function": dummyFunction

        },

        "today": {

            "label": "Today",
            "function": dummyFunction

        }

    }

    createMenuSections (toolkit, "Start", options)

    // end of testing code. */

    menu.appendChild(toolkit);

    appContainer.appendChild (menu);

}

function createMain (appContainer) {

    const canvas = document.createElement("div");
    canvas.setAttribute("class", "canvas");
    canvas.setAttribute("id", "main-canvas");

    appContainer.appendChild(canvas);

}


export function deployApp () {

    const root = document.getElementsByClassName("app-container")[0];

    createMenu (root);
    createMain (root);


}





