define(["require", "exports"], function (require, exports) {
    "use strict";
    var textController = (function () {
        function textController() {
        }
        textController.prototype.contructor = function ($scope) {
            this.textSample = "";
        };
        textController.$inject = ["$scope"];
        return textController;
    }());
    exports.textController = textController;
});
