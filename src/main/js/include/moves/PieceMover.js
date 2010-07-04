P.PieceMover = {
    create : function(blankPiece, moveComplete) {
        var animation = P.Switch.create(true); // prevent simultaneous moves

        // jquery event handler
        return function() {
            if (!animation.isOn()) return;
            animation.turnOff();

            var piece = $(this);
            if (P.MoveValidator.piece(piece, blankPiece)) {
                P.Coordinate.swap(piece, blankPiece);
                P.Animator.slide(piece, blankPiece, function() {
                    animation.turnOn();
                    moveComplete();
                });
            } else {
                P.Animator.shake(piece, animation.turnOn);
            }
        }
    }
};
