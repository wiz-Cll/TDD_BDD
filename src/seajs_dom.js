define(function( require, exports, module ){
    function addClass( dom, str ){
        if( dom ){
            dom.className = str;
        }
        return false;
    }

    window.onload =function(){
        var btn = document.querySelector('.btn');

        btn.onclick = function(){
            addClass( document.body,  'active');
        };
    };
});