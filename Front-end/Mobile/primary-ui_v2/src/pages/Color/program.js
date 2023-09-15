import {Navigation_bar_black,Navigation_bar_white} from "./uni_framework/Navigation_bar";
import {setTabBarStyle_black, setTabBarStyle_white} from "./uni_framework/tab_bar";
let theme = true;

const uni_switchThemes = () => {
    let theme = true;
  
    const switchThemes = () => {
      if (theme) {
        console.log("当前主题是白色，切换为黑色");
      } else {
        console.log("当前主题是黑色，切换为白色");
      }
      theme = !theme;
    }
  
    return {
      switchThemes,
      theme: theme
    };
  }
  
  export { uni_switchThemes };