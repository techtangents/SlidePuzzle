P.EventWirer = {
    wire : function(picturePieces, blankPiece) {
        var mover = P.PieceMover.create(blankPiece);
        _(picturePieces).each(function(x) {
            x.click(mover);
        });
    }
};