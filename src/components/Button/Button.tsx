import React from "react";

import { cn } from "../../global";

export interface ButtonProps {
  /**
   * Link Url?
   */
  href?: string;
  /**
   * Target anchor link
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * How large Font should the button be?
   */
  fontsize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  /**
   * How large Font should the button be?
   */
  textTransform?: "normal-case" | "uppercase" | "capitalize" | "lowercase";
  /**
   * How large Button should the button be?
   */
  size?: "auto" | "lg" | "xl" | "xxl" | "exl" | "90w" | "75w" | "50w" | "80w" | "full";

  /**
   * How variant should the button be?
   */
  variant?:
    | "default"
    | "text-link"
    | "underlineTextLink"
    | "secondary"
    | "success"
    | "danger"
    | "light"
    | "dark"
    | "disabled"
    | "default-outline"
    | "p-outline"
    | "s-outline"
    | "success-outline"
    | "d-outline"
    | "dark-outline";

  /**
   * Button disabled
   */
  disabled?: boolean;
  /**
   * Set Position between Button Text and Icon
   */
  iconPosition?: "start" | "end" | "center" | "between" | "around" | "evenly" | "center-text-right-icon" | "center-text-left-icon";
  /**
   * Make True if Icon Added with Button
   */
  icon?: boolean;
  /**
   * Add Custom Css - Pass class Name or tailwind Css  (Eg. btn_custom)
   */
  css?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */

interface BUTTON_VARIANT_MAPS_PROPS {
  [rounded: string]: string;
}

interface BUTTON_SIZE_MAPS_PROPS {
  [size: string]: string;
}

const BUTTON_VARIANT_MAPS: BUTTON_VARIANT_MAPS_PROPS = {
  default: "ui_default_btn_text",
  "text-link": "ui_btn_text_link",
  underlineTextLink: "ui_btn_underline_text_link",
  secondary: "shadow bg-gray1 text-white hover:bg-gray1",
  success: "shadow bg-green-600 text-white hover:bg-green-700",
  danger: "shadow bg-red-600 text-white hover:bg-red-700",
  light: "shadow bg-gray-100 text-gray-900 hover:bg-gray-200",
  dark: "shadow bg-gray-900 text-white hover:bg-gray-800",
  disabled: "shadow bg-gray1 text-white hover:bg-gray1 select-none",
  "default-outline": "border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white",
  "p-outline": "border border-primary bg-white text-primary hover:bg-primary hover:text-white",
  "s-outline": "border border-gray1 bg-white text-gray1 hover:bg-gray1 hover:text-white",
  "success-outline": "border border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white",
  "d-outline": "border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white",
  "dark-outline": "border border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white",
};

const BUTTON_SIZE_MAPS: BUTTON_SIZE_MAPS_PROPS = {
  xs: "p-1 w-1",
  auto: "p-2 w-auto",
  sm: "p-1.5 w-4",
  base: "p-1.5 w-12",
  lg: "p-2 w-24",
  xl: "p-2.5 w-32",
  xxl: "p-3 w-64",
  exl: "p-6 w-96",
  "90w": "p-1.5 w-screen-90",
  "75w": "p-1.5 w-screen-75",
  "50w": "p-1.5 w-screen-50",
  "80w": "p-1.5 w-screen-80",
  full: "p-1.5 w-screen",
};

const Button: React.FC<ButtonProps> = ({
  href = "",
  variant = "default",
  fontsize = "base",
  size = "auto",
  iconPosition = "",
  icon = false,
  css,
  children,
  textTransform = "normal-case",
  target = "_blank",
  ...props
}) => {
  return (
    <React.Fragment>
      {href ? (
        <a
          href={href}
          target={target}
          className={cn(
            "ui_btn",
            BUTTON_VARIANT_MAPS[variant],
            BUTTON_SIZE_MAPS[size],
            `text-${fontsize}`,
            icon ? `inline-flex flex-row justify-${iconPosition}` : "",
            icon && iconPosition === "center-text-right-icon" ? `justify-between ui_btn_svg` : "",
            icon && iconPosition === "center-text-left-icon" ? `justify-between ui_btn_svg` : "",
            textTransform && `${textTransform}`,
            css
          )}
          {...props}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          className={cn(
            "ui_btn",
            BUTTON_VARIANT_MAPS[variant],
            BUTTON_SIZE_MAPS[size],
            `text-${fontsize}`,
            icon ? `inline-flex flex-row justify-${iconPosition}` : "",
            icon && iconPosition === "center-text-left-icon"
              ? `group inline-flex items-center py-2 px-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md focus:bg-amber-600 focus:outline-none`
              : "",
            icon && iconPosition === "center-text-right-icon"
              ? `group inline-flex items-center py-2 px-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md focus:bg-amber-600 focus:outline-none`
              : "",
            textTransform && `${textTransform}`,
            css
          )}
          {...props}
        >
          {children}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
