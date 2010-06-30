P.EventWirer = {

    wire : function(pieceContainer, picturePieces, blankPiece) {

        var animation = P.Switch.create(true); // prevent simultaneous moves

        function clickHandler() {
            if (!animation.isOn()) return;
            animation.turnOff();

            var piece = $(this);
            if (P.MoveValidator.piece(piece, blankPiece)) {
                P.Coordinate.swap(piece, blankPiece);
                P.Animator.slide(piece, blankPiece, animation.turnOn);
            } else {
                P.Animator.shake(piece, animation.turnOn);
            }
        }

        _(picturePieces).each(function(x) {
            x.click(clickHandler);
        });
    }
}