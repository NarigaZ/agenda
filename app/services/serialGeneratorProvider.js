angular.module("listaTelefonica").provider("serialGenerator", function () {
    var _lenght = 10;

    this.getLength = function () {
        return _lenght;
    };

    this.setLenght = function (length) {
        _lenght = length;
    }

    this.$get = function () {
        return {
            gerenate: function () {
                var serial = "";
                while(serial.length < _lenght){
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32)
                }
                return serial;
            }
        }
        
    }
});