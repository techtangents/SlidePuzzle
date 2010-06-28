require("../include/include.js");

function testBackgrounds() {
    var p = P.PieceMaker.make("myimg.jpg", 0);
    assertEquals("myimg.jpg", p.css("background-image"));
    assertEquals("no-repeat", p.css("background-repeat"));
    assertEquals("0% 0%", p.css("background-position"));
}