require("../include/include.js");

function test() {

    // using strings in place of pieces - doesn't matter in this instance
    var squares = ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
    var blank = "blank";

    // board consists of pieces 0-7 and a blank square. piece 8 is replaced with the blank square.
    var order = [3, 1, 2,
                 6, 7, 8,
                 0, 5, 4];

    // size assumed to be 8
    function predictableRandomizer(size) {
        assertEquals(9, size);
        return order;
    }

    var actual = P.PieceShuffler.shuffle(squares, blank, predictableRandomizer);
    var expected = ["s3", "s1", "s2", "s6", "s7", "blank", "s0", "s5", "s4"];
    
    assertArrayEquals(expected, actual);
}