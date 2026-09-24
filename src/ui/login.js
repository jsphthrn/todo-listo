import { clearCanvas, createForm} from "../helpers/page-helpers"
import { deployHeader } from "./header";
import { checkLogin } from "../app/login";
import locale from "../locale/locale.json"


export function deployLoginPage () {

    let lang = document.getElementById("root").getAttribute("lang");

    clearCanvas ();

    deployHeader ();

    const canvas = document.getElementById("canvas");

    const loginPanel = document.createElement("div");

    const appLogoLogin = document.createElement("img");

    const loginForm = document.createElement("div");

    createForm(loginForm, "login-form", "login-form", ["user", "password"]);

    const loginButton = document.createElement("button");
    loginButton.textContent = locale[lang]["forms"]["login-form"]["login"];
    loginButton.addEventListener("click", () => {

        let user = document.getElementById("login-form-user").value;
        let password = document.getElementById("login-form-password").value;

        (checkLogin(user, password)) ? deployAppPage() : alert(locale[lang]["forms"]["login-form"]["login-warning"]);

    });

    loginPanel.appendChild(appLogoLogin);
    loginPanel.appendChild(loginForm);
    loginPanel.appendChild(loginButton);

    canvas.appendChild(loginPanel);

}