// This file is only used to support alias in webstorm

module.exports = {
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src"),
      "@assets": require("path").resolve(__dirname, "src/assets"),
      "@img": require("path").resolve(__dirname, "src/assets/images"),
    },
  },
};
