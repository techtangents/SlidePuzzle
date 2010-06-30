require("../include/include.js");

function test() {
    var pieces = _.map(_.range(9), function() { return $("<div />"); });
    P.PieceInserter.setCoordinates(pieces);

    function check(x, expectedRow, expectedCol) {
        var coordinate = pieces[x].data("coordinate");
        assertEquals(expectedRow, coordinate.row);
        assertEquals(expectedCol, coordinate.col);
    }

    check(0, 0, 0);
    check(1, 0, 1);
    check(2, 0, 2);

    check(3, 1, 0);
    check(4, 1, 1);
    check(5, 1, 2);

    check(6, 2, 0);
    check(7, 2, 1);
    check(8, 2, 2);
}