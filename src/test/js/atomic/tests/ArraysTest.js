require("../include/include.js");

function testTorso() {
    function check(expected, input) {
        var actual = P.Arrays.torso(input);
        assertArrayEquals(expected, actual);
    }
    check([1], [1, 2]);
    check([1, 2], [1, 2, 3]);
}