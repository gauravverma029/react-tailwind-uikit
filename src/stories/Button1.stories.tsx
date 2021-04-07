import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../index";

export default {
  title: "Components/Button1",
  component: Button,
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
} as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Variant: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} variant="default" css="m-6" />
    <Button {...args} variant="primary" css="m-6" />
    <Button {...args} variant="secondary" css="m-6" />
    <Button {...args} variant="success" css="m-6" />
    <Button {...args} variant="danger" css="m-6" />
    <Button {...args} variant="light" css="m-6" />
    <Button {...args} variant="dark" css="m-6" />
    <Button {...args} variant="disabled" css="m-6" />
    <Button {...args} variant="default-outline" css="m-6" />
    <Button {...args} variant="p-outline" css="m-6" />
    <Button {...args} variant="s-outline" css="m-6" />
    <Button {...args} variant="success-outline" css="m-6" />
    <Button {...args} variant="d-outline" css="m-6" />
    <Button {...args} variant="dark-outline" css="m-6" />
  </div>
);

export const Size: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} size="auto" css="m-6" />
    <Button {...args} size="xs" css="m-6" />
    <Button {...args} size="sm" css="m-6" />
    <Button {...args} size="base" css="m-6" />
    <Button {...args} size="lg" css="m-6" />
    <Button {...args} size="xl" css="m-6" />
    <Button {...args} size="xxl" css="m-6" />
  </div>
);

export const WithRightSvg: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} svgSpace="start" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="end" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="center" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="between" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="around" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="evenly" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="center-text-right-icon" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="center-text-left-icon" svgIconValue size="xxl" css="m-6" />
  </div>
);

export const WithLeftSvg: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} svgSpace="start" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="end" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="center" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="between" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="around" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="evenly" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="center-text-right-icon" svgIconValue size="xxl" css="m-6" />
    <Button {...args} svgSpace="center-text-left-icon" svgIconValue size="xxl" css="m-6" />
  </div>
);

Variant.args = {
  content: "Button",
};

Size.args = {
  content: "Button",
};

const WithLeftSvgComponent = () => {
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
      <div>Button</div>
    </React.Fragment>
  );
};

WithLeftSvg.args = {
  content: <WithLeftSvgComponent />,
};

const WithRightSvgComponent = () => {
  return (
    <React.Fragment>
      <div>Button</div>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
    </React.Fragment>
  );
};

WithRightSvg.args = {
  content: <WithRightSvgComponent />,
};
