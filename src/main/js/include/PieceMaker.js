P.PieceMaker = {
    make : function(image, pos) {
        return $("<div />")
            .addClass("puzzlePiece")
            .attr("background-image", image);
    }
}