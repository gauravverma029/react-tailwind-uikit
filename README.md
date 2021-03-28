# Get started

React-tailwind-uikit is a reusable component library that helps to build UIs faster for React Js , Next js Web Projects and Supports TypeScript. The goal is to make building durable UIs more productive and satisfying.
Now you can Build your Web Application in 24 Hours.We are coming with more 100 component Ready to Implement.Please Support us.

## Install

Components are written in React,Typescript,Tailwind CSS.

Add Project to your project.

`npm install --save react-tailwind-uikit`

or

`yarn add react-tailwind-uikit`

### **Use**

Import components you want into your Project

`import { Button, ButtonProps} from 'react-tailwind-uikit';`

and use them like so

```
  const example = () => (
    <div>
      <Button content='Button'>
    </div>
  )

```

### **With SVG Button**

```
const YourComponentWithSVG = () => {
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
  const example = () => (
    <div>
      <Button content={<YourComponentWithSVG />}>
    </div>
  )
```

### **Browse SDS components in your own Storybook**

Once you add the package, update your .storybook/config.js to import all files ending in .stories.js.

```

import { configure } from "@storybook/react";
configure(require.context("../src", true, /.stories.js\$/), module);

```

### **Welcome For Contributes**

Clone the [GitHub project](https://github.com/gauravverma029/react-tailwind-uikit) then start Storybook.

`yarn && yarn storybook`

### **WHO AM I**

[LinkedIn Profile](https://www.linkedin.com/in/gauravverma029/)
