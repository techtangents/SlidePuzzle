P.EventWirer = {

    wire : function(pieceContainer, picturePieces, blankPiece) {

        // FIX sideways?
        function startSlide(x, blankPiece, callback) {
            var blankPos = P.Dom.getPos(blankPiece);
            var piecePos = P.Dom.getPos(x);
            blankPiece.detach();

            x.animate(blankPos, {
                duration : 'fast',
                complete : function() {
                    blankPiece.css(piecePos);
                    pieceContainer.append(blankPiece);
                    callback();
                }
            });
        }

        var animationEnabled = true; // prevent simultaneous moves
        function clickHandler() {
            if (!animationEnabled) return;

            var piece = $(this);
            if (P.MoveValidator.piece(piece, blankPiece)) {
                animationEnabled = false;
                startSlide(piece, blankPiece, function() {
                    P.Coordinate.swap(piece, blankPiece);
                    animationEnabled = true;
                });
            } else {
                // shake?
            }
        }

        _(picturePieces).each(function(x) {
            x.click(clickHandler);
        });
    }
}