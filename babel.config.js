module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@theme": "./src/theme",
            "@utils": "./src/utils",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
