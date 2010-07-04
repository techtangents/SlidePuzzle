P.PieceShuffler = {
    /** shuffles the given squares using the given randomizer
     *  randomizer is a function that returns an array of the numbers 0-8 in any order
     */
    shuffle : function(squares, randomizer) {
        var order = randomizer(squares.length);
        return _(order).map(function(x) {
            return squares[x];
        });
    }
};
