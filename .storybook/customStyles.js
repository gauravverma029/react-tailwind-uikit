import buildCSS from "./styles.css";
import realCSS from "../src/styles.css";
const customStyles = process.env.NODE_ENV === "production" ? buildCSS : realCSS;
export default customStyles;
