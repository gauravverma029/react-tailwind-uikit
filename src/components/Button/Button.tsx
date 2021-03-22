import React, { ReactNode } from "react";
import "./Button.module.css";
import "../../tailwind.css";

import { cn } from "../../global";

export interface ButtonProps {
  /**
   * Button will be only Text Link?
   */
  textLink?: boolean;
  /**
   * Link Url?
   */
  href?: string;
  /**
   * Target anchor link
   */
  target?: string;
  /**
   * How large should the button be?
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Button variant Like
   */
  variant?: "primary";
  /**
   * Button contents
   */
  disabled?: boolean;
  /**
   * contents
   */
  content?: ReactNode;
  /**
   * Optional click handler
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
const Button: React.FC<ButtonProps> = ({ textLink = false, variant = "primary", size = "md", content, ...props }) => {
  return (
    <button type="button" className={cn("bg-red-100 text-red-800")} {...props}>
      {content}
    </button>
  );
};

export default Button;
