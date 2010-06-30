P.PieceMaker = {
    blank : function(gridInfo) {
        return $("<div />")
            .addClass("puzzlePiece")
            .width(gridInfo.width / gridInfo.cols)
            .height(gridInfo.height / gridInfo.rows)
            .css({"position" : "absolute"})
    },

    make : function(gridInfo, image, pos) {
        return P.PieceMaker.blank(gridInfo)
            .css({
                "background-image" : "url(" + image + ")",
                "background-repeat" : "no-repeat",
                "background-position" : P.BackgroundPositionCalculator.calculate(gridInfo, pos)
            });
    },

    array : function(gridInfo, image) {
        var numSquares = gridInfo.numSquares;
        return _.map(_.range(numSquares), function(x) {
            return P.PieceMaker.make(gridInfo, image, x);
        });
    }
};
