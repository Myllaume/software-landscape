const yml = require("js-yaml");

const bulma = require.resolve('bulma/css/bulma.min.css')
    , mermaid = require.resolve('mermaid/dist/mermaid.min.js');

module.exports = function (e) {
    e.addDataExtension("yml", contents => yml.load(contents));

    e.addPassthroughCopy({
        './assets/style.css': './assets/style.css',
        './assets/main.js': './assets/main.js',
        [bulma]: './assets/bulma.css',
        [mermaid]: './assets/mermaid.js'
    });

    return {
        dir: {
            input: "./",
            output: "../",
            includes: "includes",
            layouts: "layouts",
            data: "data"
        }
    };
}