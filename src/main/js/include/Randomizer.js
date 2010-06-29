P.Randomizer = {
    num : function(x) {
        var index = Math.floor(Math.random() * x);
        if (index === x) index--; // prevent (rare) chance of getting x - see https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Math/random
        return index;
    },

    /** Returns an array of the numbers [0..size) in a random order. Each number is used exactly once. */
    array : function(size) {
        function pick(picked, remaining) {
            var len = remaining.length;
            if (len === 0) return picked;

            var index = P.Randomizer.num(len);
            var chosen = remaining[index];
            picked.push(chosen);
            remaining.splice(index, 1);
            return pick(picked, remaining);
        }

        var remaining = _.range(size);
        return pick([], remaining);
    }
};