 define(function (require, exports, module) {

var rich = require('rich');
var template = require('hbs!../../templates/camera');

var CameraView = rich.ItemView.extend({
    template: template,
    cameraWidth: 0.6 * window.innerHeight,
    className: 'camera',
    size: function(){
        return [this.cameraWidth, true];
    },

    initialize: function(){

    },
});

exports.CameraView = CameraView;

});
