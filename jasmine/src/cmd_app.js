define( function( require, exports, module){
    function toggleClass(){
        var node = document.querySelector('#kbinfo');
        if( node.className == 'wowo'){
            node.className = 'haha';
        }
        else{
            node.className = 'wowo';
        }
    }

    // 专门定义一个绑定函数  方便执行
    function bind(){
        document.querySelector('header').onclick = toggleClass;
    }

    exports.toggleClass = toggleClass;
    exports.bind = bind;
} );