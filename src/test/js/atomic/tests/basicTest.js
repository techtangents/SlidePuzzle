require("../include/include.js");

function testBasics() {
    assertTypeOf("object", P);
    assertTypeOf("function", P.create);
}

function init() {
    var element = $("<div />");
    P.create(element, "myimg.jpg", 3, 3);
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
        assertEquals("url(myimg.jpg)", $(this).css("background-image"));
    });
}
