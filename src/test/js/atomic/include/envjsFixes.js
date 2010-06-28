// env.js needs a print function and a console.log function - get them from Rhino
var print = function(x) {
    java.lang.System.out.println(String(x));
};
var console = { log: print };
