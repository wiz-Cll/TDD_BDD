describe('my first karma auto_test', function(){

    beforeEach(function(){
        this.dollar  = new Money({
            amount: 13.5,
            symbol: '$'
        });
        this.euro = Money.euro( 14.5 );
    });

    it('shoud have add method in Money Object', function(){

        this.dollar.add( 10 );

        expect( this.dollar.amount ).toEqual( 23.5 );

    });
    it('should have a factory func called Money.euro', function(){
        expect( this.euro.amount ).toEqual(14.5);
    });
});