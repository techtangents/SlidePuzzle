P.PositionCalculator = {
    fromIndex : function(gridInfo, index) {
        var c = P.Coordinate.fromIndex(gridInfo, index);
        return P.PositionCalculator.fromCoordinate(gridInfo, c);
    },

    fromCoordinate : function(gridInfo, coordinate) {
        var pieceWidth = gridInfo.width / gridInfo.cols;
        var pieceHeight = gridInfo.height / gridInfo.rows;
        return {
            x : coordinate.col * pieceWidth,
            y : coordinate.row * pieceHeight
        };
    },

    fromIndexCss : function(gridInfo, index) {
        var c = P.PositionCalculator.fromIndex(gridInfo, index);
        return {
            left : c.x + "px",
            top : c.y + "px"
        }
    }
};
