P.PieceMaker = {
    basic : function(totalWidth, totalHeight) {
        // FIX the float:left will probably change when we add animation

        return $("<div />")
            .addClass("puzzlePiece")
            .width(totalWidth / 3)
            .height(totalHeight / 3)
            .css({"position" : "absolute"})
    },

    make : function(image, pos, totalWidth, totalHeight) {
        return P.PieceMaker.basic(totalWidth, totalHeight)
            .css({
                "background-image" : "url(" + image + ")",
                "background-repeat" : "no-repeat",
                "background-position" : P.BackgroundPositionCalculator.calculate(pos)
            });
    },

    blank : function(totalWidth, totalHeight) {
        return P.PieceMaker.basic(totalWidth, totalHeight);
    },

    array : function(gridInfo, image) {
        var numSquares = gridInfo.numSquares;
        return _.map(_.range(numSquares), function(x) {
            return P.PieceMaker.make(image, x, gridInfo.width, gridInfo.height);
        });
    }
};