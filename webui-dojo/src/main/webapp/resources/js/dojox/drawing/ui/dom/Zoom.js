//>>built
define(["../../../.","dojo","dojox","dojo/require!dojox/drawing/plugins/_Plugin"],function(_1,_2,_3){
_2.provide("dojox.drawing.ui.dom.Zoom");
_2.require("dojox.drawing.plugins._Plugin");
_3.drawing.ui.dom.Zoom=_3.drawing.util.oo.declare(_3.drawing.plugins._Plugin,function(_4){
var _5=_4.node.className;
var _6=_4.node.innerHTML;
this.domNode=_2.create("div",{id:"btnZoom","class":"toolCombo"},_4.node,"replace");
this.makeButton("ZoomIn",this.topClass);
this.makeButton("Zoom100",this.midClass);
this.makeButton("ZoomOut",this.botClass);
},{type:"dojox.drawing.ui.dom.Zoom",zoomInc:0.1,maxZoom:10,minZoom:0.1,zoomFactor:1,baseClass:"drawingButton",topClass:"toolComboTop",midClass:"toolComboMid",botClass:"toolComboBot",makeButton:function(_7,_8){
var _9=_2.create("div",{id:"btn"+_7,"class":this.baseClass+" "+_8,innerHTML:"<div title=\"Zoom In\" class=\"icon icon"+_7+"\"></div>"},this.domNode);
_2.connect(document,"mouseup",function(_a){
_2.stopEvent(_a);
_2.removeClass(_9,"active");
});
_2.connect(_9,"mouseup",this,function(_b){
_2.stopEvent(_b);
_2.removeClass(_9,"active");
this["on"+_7]();
});
_2.connect(_9,"mouseover",function(_c){
_2.stopEvent(_c);
_2.addClass(_9,"hover");
});
_2.connect(_9,"mousedown",this,function(_d){
_2.stopEvent(_d);
_2.addClass(_9,"active");
});
_2.connect(_9,"mouseout",this,function(_e){
_2.stopEvent(_e);
_2.removeClass(_9,"hover");
});
},onZoomIn:function(_f){
this.zoomFactor+=this.zoomInc;
this.zoomFactor=Math.min(this.zoomFactor,this.maxZoom);
this.canvas.setZoom(this.zoomFactor);
this.mouse.setZoom(this.zoomFactor);
},onZoom100:function(evt){
this.zoomFactor=1;
this.canvas.setZoom(this.zoomFactor);
this.mouse.setZoom(this.zoomFactor);
},onZoomOut:function(evt){
this.zoomFactor-=this.zoomInc;
this.zoomFactor=Math.max(this.zoomFactor,this.minZoom);
this.canvas.setZoom(this.zoomFactor);
this.mouse.setZoom(this.zoomFactor);
}});
});
