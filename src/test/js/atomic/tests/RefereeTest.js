require("../include/include.js");

function testIsPieceCorrect() {
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

function testAllPiecesCorrect() {
    var correctPositions = [
        {row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2},
        {row: 1, col: 0}, {row: 1, col: 1}, {row: 1, col: 2},
        {row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}
    ];

    function check(expected, actualPositions) {
        var pieces = _.map(actualPositions, function(x, i) {
            var piece = $("<div />");
            P.Coordinate.set(piece, x);
            P.Coordinate.setCorrect(piece, correctPositions[i]);
            return piece;
        });
        assertEquals(expected, P.Referee.allPiecesCorrect(pieces));    
    }

    check(true, [
        {row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2},
        {row: 1, col: 0}, {row: 1, col: 1}, {row: 1, col: 2},
        {row: 2, col: 0}, {row: 2, col: 1}
    ]);

    check(false, [
        {row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2},
        {row: 1, col: 0}, {row: 1, col: 2}, {row: 1, col: 1},
        {row: 2, col: 0}, {row: 2, col: 1}
    ]);
}