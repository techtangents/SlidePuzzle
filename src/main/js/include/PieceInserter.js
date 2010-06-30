P.PieceInserter = {
    insert : function(gridInfo, pieceContainer, shuffledPieces) {
        _(shuffledPieces).each(function(x, i) {
            // FIX pass gridInfo instead
            var pos = P.PositionCalculator.fromIndexCss(gridInfo.width, gridInfo.height, i);
            x.css(pos);
            pieceContainer.append(x);
        });
        P.PieceInserter.setCoordinates(shuffledPieces);
    },

    setCoordinates : function(shuffledPieces) {
        _(shuffledPieces).each(function(x, i) {
            var c = P.Coordinate.fromIndex(i);
            x.data("coordinate", c);
        });
    }
}