require("../include/include.js");

var P = TechTangents.SlidePuzzle;

function testBasics() {
    assertTypeOf("object", P);
    assertTypeOf("function", P.create);
}

function testInit() {
    var element = $("<div />");
    var p = P.create(element);
    p.init();
    var pieces = element.find("div.puzzlePiece");
    assertEquals(9, pieces.length);
}