require("../include/include.js");

function checkCommon(p, expectedWidth, expectedHeight) {
    assertEquals("absolute", p.css("position"));
    assertEquals(expectedWidth, p.width());
    assertEquals(expectedHeight, p.height());
}

function testBackgrounds() {

    function check(pos, backgroundPos) {
        var p = P.PieceMaker.make("myimg.jpg", pos, 600, 900);
        assertEquals("url(myimg.jpg)", p.css("background-image"));
        assertEquals("no-repeat", p.css("background-repeat"));
        assertEquals(backgroundPos, p.css("background-position"));
        checkCommon(p, 200, 300);
    }

    check(0, "0% 0%");
    check(1, "50% 0%");
    check(2, "100% 0%");

    check(3, "0% 50%");
    check(4, "50% 50%");
    check(5, "100% 50%");

    check(6, "0% 100%");
    check(7, "50% 100%");
    check(8, "100% 100%");
}

function testBlank() {
    var p = P.PieceMaker.blank({width : 600, height : 900});
    checkCommon(p, 200, 300);
}