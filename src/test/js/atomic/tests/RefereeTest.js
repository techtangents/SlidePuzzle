require("../include/include.js");

function test() {
    function check(expected, actualRow, actualCol, correctRow, correctCol) {
        var piece = $("<div />");
        piece.data("coordinate", P.Coordinate.create(actualRow, actualCol));
        piece.data("correctCoordinate", P.Coordinate.create(correctRow, correctCol));
        var msg = "(" + actualRow + "," + actualCol + ") (" + correctRow + "," + correctCol + ")";
        assertEquals(msg, expected, P.Referee.isPieceCorrect(piece));
    }
    for (var row = 0; row < 100; row++) {
        for (var col = 0; col < 100; col++) {
            check(true, row, col, row, col);
        }
    }
    check(false, 0, 1, 1, 1)
    check(false, 0, 0, 1, 1);
    check(false, 3, 4, 3, 5);
}