require("../include/include.js");

function test() {
    function check(index, expectedX, expectedY) {
        var actual =  P.PositionCalculator.fromIndex(600, 900, index);
        assertEquals(actual.x, expectedX);
        assertEquals(actual.y, expectedY);
    }

    check(0, 0, 0);
    check(1, 200, 0);
    check(2, 400, 0);

    check(3, 0, 300);
    check(4, 200, 300);
    check(5, 400, 300);

    check(6, 0, 600);
    check(7, 200, 600);
    check(8, 400, 600);
}