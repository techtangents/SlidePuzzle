P.PieceMaker = {
    make : function(image, pos, totalWidth, totalHeight) {
        return $("<div />")
            .addClass("puzzlePiece")
            .css({
                "background-image" : image,
                "background-repeat" : "no-repeat",
                "background-position" : P.BackgroundPositionCalculator.calculate(pos)
            })
            .width(totalWidth / 3)
            .height(totalHeight / 3);
    }
};