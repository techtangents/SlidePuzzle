P.Switch = {
    create : function(value) {
        return {
            turnOn : function() { value = true; },
            turnOff : function() { value = false; },
            isOn : function() { return value; }
        }
    }
};