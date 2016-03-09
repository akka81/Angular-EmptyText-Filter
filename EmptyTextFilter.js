define(["require", "exports"], function (require, exports) {
    "use strict";
    var EmptyText = (function () {
        function EmptyText() {
        }
        EmptyText.checkText = function () {
            return function (dataText) {
                if (!dataText || dataText.length <= 0 || /^\s+$/.test(dataText))
                    return " - ";
                else
                    return dataText;
            };
        };
        return EmptyText;
    }());
    exports.EmptyText = EmptyText;
    angular.module('EmptyTextFilter', []).filter('EmptyText', EmptyText.checkText);
});
