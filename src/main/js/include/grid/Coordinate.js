P.Coordinate = {
    create : function(row, col) {
        return {row : row, col : col}
    },
    
    fromIndex : function(index) {
        return {
            row : Math.floor(index / 3),
            col : index % 3
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