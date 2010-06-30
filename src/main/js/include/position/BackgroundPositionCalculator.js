P.BackgroundPositionCalculator = {
    calculate : function(gridInfo, index) {
        function position(size, pos) {
            // divide by (size - 1) looks weird - it's due to how background-position works. For 3 cols, we want 0% 50% 100%
            var percent =  Math.round(pos / (size - 1) * 100);
            return percent + "%";
        }

        var c = P.Coordinate.fromIndex(gridInfo, index);
        return position(gridInfo.cols, c.col) + " " + position(gridInfo.rows, c.row);
    }
};
