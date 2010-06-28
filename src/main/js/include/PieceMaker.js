P.PieceMaker = {
    make : function(pos, image) {
        return $("<div />")
            .addClass("puzzlePiece")
            .attr("background-image", image);
    }
}