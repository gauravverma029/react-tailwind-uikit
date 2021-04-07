import React from "react";
import { addDecorator } from "@storybook/react";
import theme from "./theme";

import Layout from "./Layout";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  docs: {
    theme,
  },
};
