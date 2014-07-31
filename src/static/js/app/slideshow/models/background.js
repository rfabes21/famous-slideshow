define(function( require, exports, module ){

var backbone = require('backbone');
var Background = backbone.Model.extend({
    defaults: {
        size: null,
        className: 'background',
        color: '#FFFFF5',
        content: null,
        tx: 0,
        ty: 0
    }
});

exports.Background = Background;

});
