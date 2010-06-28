require("../include/include.js");

function testBackgrounds() {

    function check(pos, backgroundPos) {
        var p = P.PieceMaker.make("myimg.jpg", pos, 600, 900);
        assertEquals("myimg.jpg", p.css("background-image"));
        assertEquals("no-repeat", p.css("background-repeat"));
        assertEquals(backgroundPos, p.css("background-position"));
        assertEquals(200, p.width());
        assertEquals(300, p.height());
    }

    check(0, "0% 0%");
    check(1, "-33% 0%");
    check(2, "-67% 0%");

    check(3, "0% -33%");
    check(4, "-33% -33%");
    check(5, "-67% -33%");

    check(6, "0% -67%");
    check(7, "-33% -67%");
    check(8, "-67% -67%");
}