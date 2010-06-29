require("../include/include.js");

function testGetPos() {
    function check(expected, input) {
        var actual = P.Dom.getPos(input);
        assertEquals(expected.left, actual.left);
        assertEquals(expected.top, actual.top);
    }
    var e = $("<div />").css({left : "30px", top : "45px"});
    check({left : "30px", top : "45px"}, e);    
}