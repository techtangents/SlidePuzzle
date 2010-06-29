P.PieceInserter = {
    insert : function(gridInfo, pieceContainer, shuffledPieces) {
        _(shuffledPieces).each(function(x, i) {
            // FIX pass gridInfo instead
            var pos = P.PositionCalculator.fromIndexCss(gridInfo.width, gridInfo.height, i);
            x.css(pos);
            pieceContainer.append(x);
        });
    }
}