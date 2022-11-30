const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
});
