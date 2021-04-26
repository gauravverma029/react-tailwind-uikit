import React, { Suspense } from "react";
// import IconProvider from "./IconProvider";
import { cn } from "../../global";

export interface IconProps {
  /**
   * stroke Width
   */
  strokeWidth?: "stroke-current	stroke-1" | "stroke-current	stroke-2" | "stroke-current	stroke-0";
  /**
   * SVG or Image Width
   */
  width?: "w-4" | "w-5" | "w-6" | "w-7" | "w-7" | "w-8";
  /**
   * SVG or Image Height
   */
  height?: "h-4" | "h-5" | "h-6" | "h-7" | "h-7" | "h-8";
  /**
   * Image SRC
   */
  src?: string;
  /**
   * viewBox eg.(0,0,16,16)?
   */
  viewBox?: string;
  /**
   * if is your image?
   */
  isImage?: boolean;
  /**
   * Icon name?
   */
  name?: any;
  /**
   * Image Alt Tag?
   */
  alt?: string;
  /**
   * Add Custom Css - Pass class Name or tailwind Css  (Eg. btn_custom)
   */
  css?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  css,
  isImage = false,
  src = "",
  name,
  viewBox,
  alt = "",
  width = "w-6",
  height = "h-6",
  strokeWidth = "stroke-current	text-gray-900 stroke-1",
  ...rest
}) => {
  const SvgContent = React.lazy(() => import(`./IconsList/${name}`));

  // eslint-disable-next-line import/no-dynamic-require
  return (
    <React.Fragment>
      {isImage ? (
        <img src={src} className={cn(strokeWidth, width, height, css)} {...rest} alt={alt} />
      ) : (
        <svg viewBox={viewBox ? viewBox : `0 0 16 16`} className={cn(strokeWidth, width, height, css)} aria-hidden="true" {...rest}>
          <Suspense fallback={<div />}>
            <SvgContent />
          </Suspense>
        </svg>
      )}
    </React.Fragment>
  );
};

export default Icon;
