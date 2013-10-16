var Page = require('webpage').create();
var sys = require('system');
var t, url;

if( sys.args.length === 1 ){
    console.log('did not get load Url:');
    console.log( sys.args );

    phantom.exit();
}

t = Date.now();
url = sys.args[1];

Page.open( url, function( status ){
    if( status === 'success' ){
        t = Date.now() - t;
        console.log('load page:' + url );
        console.log('takes ' + t + 'ms');
    }
    else{
        console.log( 'load page failed ');
    }

    phantom.exit();
});

