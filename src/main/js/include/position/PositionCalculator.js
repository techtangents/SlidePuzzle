P.PositionCalculator = {
    fromIndex : function(totalWidth, totalHeight, index) {
        var c = P.Coordinate.fromIndex(index);
        return P.PositionCalculator.fromCoordinate(totalWidth, totalHeight, c);
    },

    fromCoordinate : function(totalWidth, totalHeight, coordinate) {
        var pieceWidth = totalWidth / 3;
        var pieceHeight = totalHeight / 3;
        return {
            x : coordinate.col * pieceWidth,
            y : coordinate.row * pieceHeight
        };
    },

    fromIndexCss : function(totalWidth, totalHeight, index) {
        var c = P.PositionCalculator.fromIndex(totalWidth, totalHeight, index);
        return {
            left : c.x + "px",
            top : c.y + "px"
        }
    }
};