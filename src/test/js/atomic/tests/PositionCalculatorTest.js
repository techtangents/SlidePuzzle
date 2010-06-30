require("../include/include.js");

var testGridInfo = {width : 600, height : 900, rows : 3, cols : 3, numSquares : 9};

function test() {
    function check(index, expectedX, expectedY) {
        (function() {
            var actual =  P.PositionCalculator.fromIndex(testGridInfo, index);
            assertEquals(actual.x, expectedX);
            assertEquals(actual.y, expectedY);
        })();

        (function() {
            var actual =  P.PositionCalculator.fromIndexCss(testGridInfo, index);
            assertEquals(actual.left, expectedX + "px");
            assertEquals(actual.top, expectedY + "px");
        })();
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