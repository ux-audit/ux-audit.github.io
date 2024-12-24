import DefaultTheme from "vitepress/theme";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component("FaIcon", FontAwesomeIcon);
  },
};
