P.MoveValidator = {
    // NOTE: assumes that no invalid positions are passed in
    coordinate : function(pieceCoordinate, blankCoordinate) {
        var deltaRow = Math.abs(pieceCoordinate.row - blankCoordinate.row);
        var deltaCol = Math.abs(pieceCoordinate.col - blankCoordinate.col);
        return (deltaRow === 1 && deltaCol === 0) || (deltaCol === 1 && deltaRow === 0);
    },

    piece : function(piece, blank) {
        var pieceCoordinate = P.Coordinate.get(piece);
        var blankCoordinate = P.Coordinate.get(blank);
        return P.MoveValidator.coordinate(pieceCoordinate, blankCoordinate);
    }
};
