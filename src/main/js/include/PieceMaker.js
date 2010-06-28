P.PieceMaker = {
    make : function(image, pos) {
        return $("<div />")
            .addClass("puzzlePiece")
            .css({
                "background-image" : image,
                "background-repeat" : "no-repeat",
                "background-position" : P.BackgroundPositionCalculator.calculate(pos)
            });
    }
};