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
  textTransform?: "normal-case" | "uppercase" | "capitalize" | "lowercase";
  /**
   * How Width Button should the button be?
   */
  size?:
    | "auto"
    | "w-screen"
    | "w-full"
    | "w-32"
    | "w-36"
    | "w-40"
    | "w-44"
    | "w-48"
    | "w-52"
    | "w-56"
    | "w-60"
    | "w-64"
    | "w-72"
    | "w-80"
    | "w-96";
  /**
   * How Border Radius should the button be?
   */
  borderRadius?:
    | "rounded-none"
    | "rounded-sm"
    | "rounded"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl"
    | "rounded-3xl"
    | "rounded-full";
  /**
   * How variant should the button be?
   */
  variant?: "pb" | "pob" | "suc-b" | "suc-ob" | "sob" | "wb" | "wob" | "db" | "dob" | "dab" | "daob" | "disabled" | "light";
  /**
   * Hollow Border Dotted
   */
  hollow?: boolean;

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
  pb: "ui_btn_pb",
  pob: "ui_btn_pob",
  sob: "ui_btn_sob",
  "suc-b": "ui_btn_suc-b",
  "suc-ob": "ui_btn_suc-ob",
  wb: "ui_btn_wb",
  wob: "ui_btn_wob",
  db: "ui_btn_db",
  dob: "ui_btn_dob",
  dab: "ui_btn_dab",
  daob: "ui_btn_daob",
  disabled: "ui_btn_disabled",
  hollow: "ui_btn_hollow",
  light: "ui_btn_light",
  link: "ui_btn_link",
};

const BUTTON_SIZE_MAPS: BUTTON_SIZE_MAPS_PROPS = {
  auto: "w-auto min-w-max",
  "w-screen": "w-screen",
  "w-full": "w-full",
  "w-32": "w-32",
  "w-36": "w-36",
  "w-40": "w-40",
  "w-44": "w-44",
  "w-48": "w-48",
  "w-52": "w-52",
  "w-56": "w-56",
  "w-60": "w-60",
  "w-64": "w-64",
  "w-72": "w-72",
  "w-80": "w-80",
  "w-96": "w-96",
};

const Button: React.FC<ButtonProps> = ({
  href = "",
  variant = "pb",
  size = "auto",
  iconPosition = "",
  icon = false,
  css = "",
  children,
  textTransform = "normal-case",
  target = "_blank",
  borderRadius = "rounded-sm",
  hollow = false,
  ...props
}) => {
  return (
    <React.Fragment>
      {href ? (
        <a
          href={href}
          target={target}
          rel="noreferrer"
          className={cn(
            "font-sans items-center align-middle text-center cursor-pointer ease-in-out select-none p-2 h-auto overflow-clip",
            BUTTON_VARIANT_MAPS[variant],
            css,
            BUTTON_SIZE_MAPS[size],
            `${borderRadius}`,
            icon ? `inline-flex flex-row justify-${iconPosition}` : "",
            icon && iconPosition === "center-text-right-icon" ? `justify-between ui_btn_svg` : "",
            icon && iconPosition === "center-text-left-icon" ? `justify-between ui_btn_svg` : "",
            textTransform && `${textTransform}`,
            hollow && "ui_btn_hollow"
          )}
          {...props}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          className={cn(
            "font-sans items-center align-middle text-center cursor-pointer ease-in-out select-none p-2 h-auto overflow-clip",
            BUTTON_VARIANT_MAPS[variant],
            css,
            BUTTON_SIZE_MAPS[size],
            `${borderRadius}`,
            icon ? `inline-flex flex-row justify-${iconPosition}` : "",
            icon && iconPosition === "center-text-left-icon"
              ? `group inline-flex items-center py-2 px-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md focus:bg-amber-600 focus:outline-none`
              : "",
            icon && iconPosition === "center-text-right-icon"
              ? `group inline-flex items-center py-2 px-4 bg-amber-500 text-white font-semibold rounded-lg shadow-md focus:bg-amber-600 focus:outline-none`
              : "",
            textTransform && `${textTransform}`,
            hollow && "ui_btn_hollow"
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
