(function() {

    function getData(key) {
        return function(piece) {
            return piece.data(key);
        }
    }

    function setData(key) {
        return function(piece, value) {
            piece.data(key, value);
        }
    }

    P.Coordinate = {
        create : function(row, col) {
            return {row : row, col : col}
        },

        fromIndex : function(gridInfo, index) {
            return {
                row : Math.floor(index / gridInfo.cols),
                col : index % gridInfo.cols
            }
        },

        getCorrect : getData("correctCoordinate"),
        setCorrect : setData("correctCoordinate"),

        get : getData("coordinate"),
        set : setData("coordinate"),

        equals : function(c1, c2) {
            return c1.row === c2.row && c1.col === c2.col;
        },

        swap : function(a, b) {
            var ca = P.Coordinate.get(a);
            var cb = P.Coordinate.get(b);
            P.Coordinate.set(a, cb);
            P.Coordinate.set(b, ca);
        }
    };
})();