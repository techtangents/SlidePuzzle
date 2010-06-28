this.TechTangents = this.TechTangents || {};

TechTangents.SlidePuzzle = {
    create : function(element) {
        return {
            init : function() {
                var makeElement = function() {
                    return $("<div />").addClass("puzzlePiece");
                };

                var elements = _.map(_.range(9), makeElement);
                _(elements).each(function(x){ element.append(x); });
            }
        }
    }
}