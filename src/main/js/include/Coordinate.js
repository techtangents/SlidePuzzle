P.Coordinate = {
    create : function(row, col) {
        return {row : row, col : col}
    },
    
    fromIndex : function(index) {
        return {
            row : Math.floor(index / 3),
            col : index % 3
        }
    }
};