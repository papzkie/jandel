Ext.define("jandel.view.Main", {
    extend: 'Ext.Container',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Welcome',
				layout: 'fit',
                styleHtmlContent: true,
                items: [{
					xtype: 'panel',
					 html: [
						"You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
						"contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
						"and refresh to change what's rendered here."
					].join("")
				}]
               
            }
        ]
    }
});