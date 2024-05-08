// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...getOtherPlugins(), // Include your existing plugins here
  },
};

function getOtherPlugins() {
  // Your existing PostCSS plugins can be added here
  // For example:
  const plugins = [];

  // Add more plugins as needed
  // plugins.push(require('postcss-plugin'));

  return plugins;
}
