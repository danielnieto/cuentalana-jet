/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
    baseUrl: 'js',

    // Path mappings for the logical module names
    paths:
    //injector:mainReleasePaths
    {
        'knockout': 'libs/knockout/knockout-3.4.0.debug',
        'jquery': 'libs/jquery/jquery-3.1.0',
        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
        'promise': 'libs/es6-promise/es6-promise',
        'hammerjs': 'libs/hammer/hammer-2.0.8',
        'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
        'ojs': 'libs/oj/v2.3.0/debug',
        'ojL10n': 'libs/oj/v2.3.0/ojL10n',
        'ojtranslations': 'libs/oj/v2.3.0/resources',
        'text': 'libs/require/text',
        'signals': 'libs/js-signals/signals',
        'customElements': 'libs/webcomponents/CustomElements',
        'proj4': 'libs/proj4js/dist/proj4-src',
        'css': 'libs/require-css/css'
    }
    //endinjector
    ,
    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    }
});

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojmodule'],
    function(oj, ko, $) {
        $(function() {
            function init() {

                ko.applyBindings({});

            }

            // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
            // event before executing any code that might interact with Cordova APIs or plugins.
            if ($(document.body).hasClass('oj-hybrid')) {
                document.addEventListener("deviceready", init);
            } else {
                init();
            }

        });
    }
);
