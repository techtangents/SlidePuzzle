(function() {

    // FIX rounding might induce rendering glitches
    var position = function(pos) {
        var percent =  Math.round(-(pos / 3) * 100);
        return percent + "%";
    }

    P.BackgroundPositionCalculator = {
        calculate : function(pos) {
            var row = Math.floor(pos / 3);
            var col = pos % 3;
            return position(col) + " " + position(row);
        }
    }
})();