module.exports = {
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require("postcss-px2rem")({
              remUnit: 1,
              propList: ["*"],
              mediaQuery: false,
              exclude: "/node_modules/",
              minPixelValue: 2,
              selectorBlackList: []
            })
          ]
        }
      }
    }
  };