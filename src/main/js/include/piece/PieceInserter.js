P.PieceInserter = {
    insert : function(gridInfo, pieceContainer, shuffledPieces) {
        _(shuffledPieces).each(function(x, i) {
            // FIX pass gridInfo instead
            var pos = P.PositionCalculator.fromIndexCss(gridInfo, i);
            x.css(pos);
            pieceContainer.append(x);
        });
        P.PieceInserter.setCoordinates(gridInfo, shuffledPieces);
    },

    setCoordinates : function(gridInfo, shuffledPieces) {
        _(shuffledPieces).each(function(x, i) {
            var c = P.Coordinate.fromIndex(gridInfo, i);
            x.data("coordinate", c);
        });
    }
};
