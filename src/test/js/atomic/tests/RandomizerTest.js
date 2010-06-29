require("../include/include.js");

function test() {
    function check() {
        var expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        var actual = P.Randomizer.array(8);
        actual.sort();
        assertArrayEquals(expected, actual);
    }
    _.each(_.range(1), check);
}