var controller;
var log = function(message){
			console.log(message);
		}
Ext.define('jandel.controller.Main', {
    extend: 'Ext.app.Controller',
	init: function(){
		log("[Controller] : Initializing... ");
		controller = this;
		Ext.Viewport.add(Ext.create('jandel.view.Main'));
		Ext.Viewport.setActiveItem(0);
	},
	config: {
		views: ['Main']
		/*stores: [],
		refs: {
		}, 
		control: {
		}
		*/
	}
});