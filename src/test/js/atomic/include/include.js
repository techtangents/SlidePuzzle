require("envjsFixes.js");

var root = "../../../../main/js/";
function doRequire(x) {
    require(root + x);
}

var includes = ["env.rhino.1.2.js", "jquery-1.4.2.min.js", "jquery-ui-1.8.2.custom.min.js", "slidepuzzle.js"];
includes.forEach(doRequire);

require("customAsserts.js");

