P.InitialPositionChooser = {
    /** chooses the positions of squares 0-7 and the blank square, using the given randomizer
     *  randomizer is a function that returns an array of the numbers 0-8 in any order
     */
    choose : function(squares, blank, randomizer) {
        var s = P.InitialPositionChooser.chooseSquares(squares, blank);
        var order = randomizer(s.length);
        return _(order).map(function(x) {
            return s[x];
        });
    },

    chooseSquares : function(squares, blank) {
        var torso = P.Arrays.torso(squares)
        return torso.concat([blank]);
    }
};