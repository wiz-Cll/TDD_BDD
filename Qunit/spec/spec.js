module('qunit入门学习');

test('isToken()函数的测试', function() {
  //列举各种可能的情况，注意使用 ! 保证表达式符合应该的逻辑
  ok( !isToken('feafgoawj0'), '过短的字符串 不是token' );
  ok( isToken('508a402e5ef2c75d76bc7609c2dc5f49s5mwtec3wjj6bx'), '实际的token可以通过测试' );
});

test('最开始的页面的url是没有token的',function(){
    ok( !hasToken(), '本页面没有token');
});

module('Money',{
    setup: function(){
        this.dollar = new Money({amount: 13.5});
        this.euro = Money.euro(14.5);
    }
});

test('Money can be added', function(){
    equal( this.dollar.amount,  13.5);
    this.dollar.add(10);
    equal( this.dollar.amount,  23.5);
});
