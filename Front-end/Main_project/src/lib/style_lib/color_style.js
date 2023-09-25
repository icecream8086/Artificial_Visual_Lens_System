import { useDark } from "@vueuse/core";

const switchThemes = () =>{
    // Switch themes
    useDark().value = !useDark().value;
}

const checkDarkMode= () => {
    // Check if dark mode is enabled
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export { switchThemes, checkDarkMode }