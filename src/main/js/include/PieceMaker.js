P.PieceMaker = {
    basic : function(totalWidth, totalHeight) {
        // FIX the float:left will probably change when we add animation

        return $("<div />")
            .addClass("puzzlePiece")
            .css({"float" : "left"})
            .width(totalWidth / 3)
            .height(totalHeight / 3)
    },

    make : function(image, pos, totalWidth, totalHeight) {
        return P.PieceMaker.basic(totalWidth, totalHeight)
            .css({
                "background-image" : "url(" + image + ")",
                "background-repeat" : "no-repeat",
                "background-position" : P.BackgroundPositionCalculator.calculate(pos),
            });
    },

    blank : function(totalWidth, totalHeight) {
        return P.PieceMaker.basic(totalWidth, totalHeight);
    }
};