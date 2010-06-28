require("envjsFixes.js");

var root = "../../../../main/js/";
function doRequire(x) {
    require(root + x);
}

var includes = [
    "env.rhino.1.2.js",
    "jquery-1.4.2.min.js",
    "jquery-ui-1.8.2.custom.min.js",
    "underscore.js",
    "slidepuzzle.js"
];
includes.forEach(doRequire);

require("customAsserts.js");

assertEquals(undefined, this.P);
var P = TechTangents.SlidePuzzle; //shortcut for brevity