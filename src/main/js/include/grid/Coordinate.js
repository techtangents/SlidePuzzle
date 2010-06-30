P.Coordinate = {
    create : function(row, col) {
        return {row : row, col : col}
    },
    
    fromIndex : function(gridInfo, index) {
        return {
            row : Math.floor(index / gridInfo.rows),
            col : index % gridInfo.cols
        }
    },

    get : function(piece) {
        return piece.data("coordinate");
    },

    set : function(piece, coordinate) {
        piece.data("coordinate", coordinate);
    },

    swap : function(a, b) {
        var ca = P.Coordinate.get(a);
        var cb = P.Coordinate.get(b);
        P.Coordinate.set(a, cb);
        P.Coordinate.set(b, ca);
    }
};