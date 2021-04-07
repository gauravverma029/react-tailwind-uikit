import buildCSS from "./tailwind.css";
import realCSS from "../src/tailwind.css";
const exportedStyles = process.env.NODE_ENV === "production" ? buildCSS : realCSS;
export default exportedStyles;
