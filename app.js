/// <reference path="./typings/requirejs/require.d.ts" />
require.config({
    paths: {
        angular: 'node_modules/angular/angular.min',
        jQuery: 'node_modules/jquery/dist/jquery.min',
        'EmptyText': 'EmptyTextFilter',
    },
    shim: {
        'angular': { deps: ['jQuery'], 'exports': 'angular' },
        'EmptyText': { deps: ['angular'] }
    },
    waitSeconds: 20
});
//Application bootstrap
require(['angular', 'EmptyText', 'textController'], function (ng, etxt, textCtrl) {
    var app = angular.module('textFilterSample', ['EmptyTextFilter']);
    app.controller('textController', textCtrl.textController);
    angular.bootstrap(document, ['textFilterSample']);
});
//# sourceMappingURL=require-config.js.map 
