import { useDark } from "@vueuse/core";
import{uni_switchThemes} from "./Color/program.js";

const switchThemes = () => {
    // @ts-ignore
    useDark().value = !useDark().value;
    // console.log(useDark().value +' Statu')
    // true : 白色
    // false : 黑色

}

const checkDarkMode = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const fuck_it= () => {
    setInterval(() => {
      switchThemes();
    }, 1);
  }



export{
    switchThemes,
    checkDarkMode,
    fuck_it

}