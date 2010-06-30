(function() {
    var position = function(pos) {
        // divide by 2 looks weird - it's due to how background-position works. For 3 cols, we want 0% 50% 100%
        var percent =  Math.round(pos / 2 * 100);
        return percent + "%";
    }

    P.BackgroundPositionCalculator = {
        calculate : function(index) {
            var c = P.Coordinate.fromIndex(index);
            return position(c.col) + " " + position(c.row);
        }
    }
})();