P.EventWirer = {
    wire : function(picturePieces, blankPiece) {
        function moveComplete() {
            if (P.Referee.allPiecesCorrect(picturePieces)) {
                alert("Win!");
            }
        };
        var mover = P.PieceMover.create(blankPiece, moveComplete);
        _(picturePieces).each(function(x) {
            x.click(mover);
        });
    }
};
