require("ts-node").register({
  compilerOptions: {
    module: "CommonJS",
    noImplicitAny: false,
    declaration: true,
    declarationDir: "dist/types",
  },
  // and other tsconfig.json options as you like
});

module.exports = require("./rollup.config.ts");
