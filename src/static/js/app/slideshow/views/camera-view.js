define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/camera');

var CameraView = rich.ItemView.extend({
    template: template,
    camerWidth: 0.6 * window.innerHeight,
    zIndex: 1,
    className: 'camera',
    size: function(){
        return [this.camerWidth, true];
    },

    initialize: function(){

    },
});

exports.CameraView = CameraView;

});
