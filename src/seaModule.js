define( function( require, exports, module ){
    function isToken( str ){
        var tokenReg = /[0-9a-zA-Z]{46}/;
        return tokenReg.test(str);
    }

    function hasToken(){
        var tokenReg = /[\?&]token=[0-9a-zA-Z]{46}&?/;
        return tokenReg.test( window.location.href );
    }

    var Money = function( option ){
        this.amount = option.amount;
        this.template = '';
        this.symbol = option.symbol || '$';
        return this;
    };

    Money.prototype = {
        add: function( addMount ){
            this.amount = this.amount + addMount;
        }
    };

    // 所谓的工厂模式```?工厂方法?
    Money.euro = function( amount ){
        return new Money({ amount: amount, symbol: 'EUR' });
    };

    exports.Money = Money;
} );