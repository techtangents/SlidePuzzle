P.PieceMover = {
    create : function(blankPiece) {
        var animation = P.Switch.create(true); // prevent simultaneous moves

        // jquery event handler
        return function() {
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
    }
};
