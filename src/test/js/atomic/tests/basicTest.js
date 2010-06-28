require("../include/include.js");

function testBasics() {
    assertTypeOf("object", P);
    assertTypeOf("function", P.create);
}

function init() {
    var element = $("<div />");
    var p = P.create(element, "myimg.jpg");
    p.init();
    return {
        pieces :element.find("div.puzzlePiece")
    }
}

function testPieceDivsAdded() {
    var o = init();
    assertEquals(9, o.pieces.length);
}

function testPieceBackgrounds() {
    var o = init();
    o.pieces.each(function() {
        assertEquals("myimg.jpg", $(this).attr("background-image"));
    });
}
