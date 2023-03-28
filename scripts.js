function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(button.classList.contains(darkModeClass)) {
        button.innerHTML = LightMode;
        h1.innerHTML = darkMode + "ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + "ON"; 

}

const darkModeClass = 'dark-mode';
const button = document.getElementByld('mode-selector');
const h1 = document.getElementByld('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);