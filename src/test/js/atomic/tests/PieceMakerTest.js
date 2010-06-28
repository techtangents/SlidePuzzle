require("../include/include.js");

function testBackgrounds() {
    var p = P.PieceMaker.make("myimg.jpg", 0);
    assertEquals(p.attr("background-image"), "myimg.jpg");
    assertEquals(p.attr("background-repeat"), "no-repeat");
}