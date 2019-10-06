// Add new PostCSS Plugin
exports.postcss = function (config) {
    config.plugins.push(
        require('postcss-focus-visible')
    );
};