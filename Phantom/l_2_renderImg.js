var page = require('webpage').create();
var sys = require('system');

var url = sys.args.length > 1 ? sys.args[1] : 'http://www.baidu.com';
page.open( url , function( status ){
    if( status === 'success' ){
        page.render('chenllosBlog.png');
    }
    else{
        console.log(' unable to load page: stauts == ' + status );
    }
    phantom.exit();
});