require("../include/include.js");

function testBasics() {
    assertTypeOf("object", TechTangents.SlidePuzzle);
    assertTypeOf("function", TechTangents.SlidePuzzle.create());
}