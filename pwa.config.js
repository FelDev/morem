// Add new PostCSS Plugin
exports.postcss = function (config) {
    config.plugins.push(
        require('postcss-focus-visible')
    );
};

// Export these pages during "pwa export" command
exports.routes = ['/'];