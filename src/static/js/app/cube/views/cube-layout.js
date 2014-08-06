define(function (require, exports, module) {

var rich = require('rich');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var app = require('app/famous/core');
var CubeView = require('./cube-view').CubeView;

//cube height
var cubeHeight = window.innerHeight;

var CubeLayout = rich.LayoutView.extend({
    name: 'CubeLayout',
    shouldInitializeRenderable: false,
    regions:{
        cube: rich.Region.extend({
            size: [true, cubeHeight],
            modifier: function(){
                return new Modifier({
                    origin: [0.5, 0.5]
                });
            },
        }),
    },

    onShow : function(){
        this.cube.show(new CubeView({
            origin: [0.5, 0.5]
        }));
    },

});

exports.CubeLayout = CubeLayout;

});
