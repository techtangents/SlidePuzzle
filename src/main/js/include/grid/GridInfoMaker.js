P.GridInfoMaker = {
    make : function (rows, cols, element) {
        return {
            rows : rows,
            cols : cols,
            numSquares : rows * cols,
            width : element.width(),
            height : element.height()
        }
    }
};
