var rtlLangs = ['ar','arc','arz','bcc','bgn','bqi','ckb','dv','fa','glk','he','kk-cn','kk-arab','khw','ks','ku-arab','lki','lrc','luz','mzn','nqo','pnb','ps','sd','sdh','ug','ur','yi'],
    translationsHash = '8d545ab2',
    /*
     This object is used by l10n scripts (page-localized.js, topten-localized.js)
     to reveal the page content after l10n json is loaded.
     A timer is also set to prevent JS from hiding page content indefinitelty.
     This script is inlined to safeguard againt script loading errors and placed
     at the top of the page to safeguard against any HTML loading/parsing errors.
    */
    wmL10nVisible = {
        ready: false,
        makeVisible: function(){
            if ( !wmL10nVisible.ready ) {
                wmL10nVisible.ready = true;
                document.body.className += ' jsl10n-visible';
            }
        }
    };
    window.setTimeout( wmL10nVisible.makeVisible, 1000 )

    src="assets/js/index-6afb9f3f0f.js">
<!--[if gt IE 9]><!-->
src="assets/js/gt-ie9-ce3fe8e88d.js">
<!--<![endif]-->
<!--[if lte IE 9]><!-->
