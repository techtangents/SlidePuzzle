P.PieceShuffler = {
    /** chooses the positions of squares 0-7 and the blank square, using the given randomizer
     *  randomizer is a function that returns an array of the numbers 0-8 in any order
     */
    shuffle : function(squares, blank, randomizer) {
        var s = P.PieceShuffler.choose(squares, blank);
        var order = randomizer(s.length);
        return _(order).map(function(x) {
            return s[x];
        });
    },

    choose : function(squares, blank) {
        var torso = P.Arrays.torso(squares);
        torso.push(blank);
        return torso;
    }
};