P.Animator = {

    slide : function(piece, blankPiece, callback) {
        var blankPos = P.Dom.getPos(blankPiece);
        var piecePos = P.Dom.getPos(piece);

        var container = blankPiece.parent();
        blankPiece.detach();

        piece.animate(blankPos, {
            duration : 'fast',
            complete : function() {
                blankPiece.css(piecePos);
                container.append(blankPiece);
                callback();
            }
        });
    },

    // this could be a jquery plugin, attaching to $.fn, but kept internal to avoid dependency and to use underscore js
    shake : function(element, callback) {
        var left = element.position().left;
        var positions = [left - 5, left, left + 5, left];
        var duration = 20;

        function shakeOnce() {
            _(positions).each(function(x) {
                element.animate({ left: x}, duration);
            });
        }
        _.each(_.range(2), shakeOnce);
        element.animate({left:left}, 1, callback);
    }
};
