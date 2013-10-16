describe( 'how to use jasmine-jquery plugin/ 如何使用jasmine-jquery插件', function(){

    beforeEach(function(){
        jasmine.getFixtures().clearCache()
        jasmine.getFixtures().containerId = 'TDD-fixture';
        loadFixtures('../../../fixture/testFixture.html');
        loadStyleFixtures('../../../fixture/style.css');
    });
    it('should have sth in the fixture container', function(){
        expect( $('#TDD-fixture header') ).toHaveText('test me~');
    });

    it('could not able to load body in fixtureCtn ', function(){
        // 经证明, fixture不会加载body标签  只会加载内部的东西
        // expect( $('#TDD-fixture body') ).toContain('header');
    });
});

describe( ' learding some Matchers: toConatin, toBe, toBeChecked,toBeEmpty, toBeHidden, toHaveClass, toHaveData, toHaveLength, toggleClass', function(){

    beforeEach(function(){
        jasmine.getFixtures().clearCache()
        jasmine.getFixtures().containerId = 'TDD-fixture';

        loadFixtures('../../../fixture/testFixture.html');
        // 通过loadStyleFixtures来实现外部样式表的载入
        loadStyleFixtures('../../../fixture/style.css');
    });

    it('Matcher:  toContain', function(){
        expect( $('#TDD-fixture header') ).toContain('nav');
    });
    it('Matcher:  toBe', function(){
        expect( $('#TDD-fixture aside') ).toBe('#darkBlue');
    });
    it('Matcher:  toBeChecked', function(){
        // 并不像jquery  这里的matcher只会去检查第一个  即第一个input
        expect( $('#TDD-fixture section input') ).toBeChecked();
    });
    it('Matcher:  toBeEmpty', function(){
        expect( $('#TDD-fixture section.empty') ).toBeEmpty();
    });

    it('Matcher:  toBeHidden', function(){
        // 嗯,定义在头部的css样式是可以被载入的
        expect( $('#TDD-fixture section.hidden') ).toBeHidden();
        expect( $('#TDD-fixture section.hidden p') ).toBeHidden();
        // 外部样式表不可以吗?????? TODO
        // 不仅不可以  还会影响整个的it
        // 已解决
        expect( $('#TDD-fixture p.out-hidden') ).toBeHidden();
    });
    it('Matcher:  toHaveClass', function(){
        expect( $('#TDD-fixture aside') ).toHaveClass('collosip');
    });

    it('Matcher:  toHaveData', function(){
        // data属性的key会被它自动转化为小写```无语 以后只能用小写的dataset了
        expect( $('#TDD-fixture p#kbinfo') ).toHaveData('kbguid');
    });
    it('Matcher:  toHaveLength', function(){
        // 判断节点数目```
        expect( $('#TDD-fixture ul>li') ).toHaveLength( 4 );
        expect( $('#TDD-fixture section') ).toHaveLength( 3 );
    });

    it('should able to handle events: toggleClass ', function(){
        // 写在头部的onload不能执行啊```
        // 写在body中的脚本还是可以的
        // 外部脚本不行```

        /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         * 解决方案: 在specrunner页面引入需要测试的js文件,里面可以包含函数定义,然后在fixture页面进行事件绑定
         * 或者是抽出事件绑定函数, 同样在runner页面引入,然后在spec.js中,loadfixture后执行绑定函数
         * 总之,这并不是"妥协之举" 而是"便于测试的编码方式"
         * _______________________________________________________________________________*/
        $('#TDD-fixture header').trigger('click');
        expect( $('#TDD-fixture p#kbinfo') ).toHaveClass('wowo');
        $('#TDD-fixture header').trigger('click');
        expect( $('#TDD-fixture p#kbinfo') ).toHaveClass('haha');

        // 不能直接调用className等, 这也是jasmine-jquery为什么封装上述mathcer的原因~!
        // expect( $('#TDD-fixture p#kbinfo').className ).toEqual('haha');
    });
    // it('Matcher:  toContain', function(){
        // expect( $('#TDD-fixture section.empty') ).toBeEmpty();
    // });
});