var c32check = require('c32check');

module.exports = {
    isValidAddress: function (address) {
        try {
            c32check.c32addressDecode(address);
            return true;
        } catch (e) {
            return false;
        }
    }
};
