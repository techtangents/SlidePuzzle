P.Referee = {
    isPieceCorrect : function(piece) {
        var current = P.Coordinate.get(piece);
        var correct = P.Coordinate.getCorrect(piece);
        return P.Coordinate.equals(current, correct);
    },

    allPiecesCorrect : function(pieces) {
        return _(pieces).all(P.Referee.isPieceCorrect);
    }
};
