P.Coordinate = {
    fromIndex : function(index) {
        return {
            row : Math.floor(index / 3),
            col : index % 3
        }
    }
};