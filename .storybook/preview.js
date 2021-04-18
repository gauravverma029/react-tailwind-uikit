import React from "react";
import { addDecorator } from "@storybook/react";
import theme from "./theme";

import Layout from "./Layout";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

const order = ["intro-", "getting-started-", "quick-start-", "docs-", "components-"];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  options: {
    storySort: (a, b) => {
      const aName = a[0];
      const bName = b[0];

      if (aName.includes("docs-") || bName.includes("docs-")) {
        const aIdx = order.findIndex((i) => aName.indexOf(i) > -1);
        const bIdx = order.findIndex((i) => bName.indexOf(i) > -1);
        return aIdx - bIdx;
      }

      return aName < bName ? -1 : 1;
    },
  },
  docs: {
    theme,
  },
};
