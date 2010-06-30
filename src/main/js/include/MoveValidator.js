P.MoveValidator = {
    // NOTE: assumes that no invalid positions are passed in
    isValid : function(piecePos, blankPos) {
        var deltaRow = Math.abs(piecePos.row - blankPos.row);
        var deltaCol = Math.abs(piecePos.col - blankPos.col);
        return (deltaRow === 1 && deltaCol === 0) || (deltaCol === 1 && deltaRow === 0);
    }
};