define( function( require, exports, module){
    var app = require('../src/cmd_app');
    var toggleClass = app.toggleClass, bind = app.bind;

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

        it('should able to handle events: toggleClass ', function(){
            bind();
            $('#TDD-fixture header').trigger('click');
            expect( $('#TDD-fixture p#kbinfo') ).toHaveClass('wowo');
            $('#TDD-fixture header').trigger('click');
            expect( $('#TDD-fixture p#kbinfo') ).toHaveClass('haha');
        });
    });



    // (function() {
    //     var jasmineEnv = jasmine.getEnv();
    //     jasmineEnv.updateInterval = 1000;

    //     var htmlReporter = new jasmine.HtmlReporter();

    //     jasmineEnv.addReporter(htmlReporter);

    //     jasmineEnv.specFilter = function(spec) {
    //         return htmlReporter.specFilter(spec);
    //     };

    //     var currentWindowOnload = window.onload;

    //     window.onload = function() {
    //         if (currentWindowOnload) {
    //         currentWindowOnload();
    //     }
    //     execJasmine();
    //     };

    //     function execJasmine() {
    //         jasmineEnv.execute();
    //     }
    // })();
} );