P.EventWirer = {

    wire : function(pieceContainer, picturePieces, blankPiece) {

        var animationEnabled = true;
        _(picturePieces).each(function(x) {
            x.click(function() {
                if (!animationEnabled) return;

                animationEnabled = false;
                var blankPos = P.Dom.getPos(blankPiece);
                var piecePos = P.Dom.getPos(x);
                blankPiece.detach();

                x.animate(blankPos, {
                    duration : 'fast',
                    complete : function() {
                        blankPiece.css(piecePos);
                        pieceContainer.append(blankPiece);
                        animationEnabled = true;
                    }
                });
            });
        });
    }
}