require("../include/include.js");

function test() {
    function check(expected, pieceRow, pieceCol, blankRow, blankCol) {
        var pieceCoordinate = P.Coordinate.create(pieceRow, pieceCol);
        var blankCoordinate = P.Coordinate.create(blankRow, blankCol);
        var actual = P.MoveValidator.isValid(pieceCoordinate, blankCoordinate);
        assertEquals(actual, expected);
    }

    check(true,  0, 0, 0, 1);
    check(true,  0, 0, 1, 0);
    check(false, 0, 0, 1, 1);

    check(true,  2, 2, 1, 2);
    check(true,  2, 2, 2, 1);
    check(false, 2, 2, 1, 1);
    check(false, 2, 2, 0, 1);
    check(false, 2, 2, 0, 0);

    check(true,  1, 1, 1, 0);
    check(true,  1, 1, 2, 1);
    check(true,  1, 1, 0, 1);
    check(false, 1, 1, 2, 2);

}