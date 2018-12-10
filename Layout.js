/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/** api: example[appdemo]
 *  Full App Demo
 *  -------------
 *  Full, self-contained, application demo showing basics of Hero configuration and styling/language options.
 */

Ext.namespace("Heron");
Ext.namespace("Heron.options");
Ext.namespace("Heron.geoportal");

/**
 * Defines the entire layout of a Heron webapp using ExtJS-style.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) components.
 * Each component is either a container of components (xtype: 'panel', i.e. an ExtJS Panel)
 * or a specific leaf component like a map panel (xtype: 'hr_mappanel') or simple HTML
 * panel (xtype: 'hr_htmlpanel'). Each component has a 'xtype' string and component-specific options.
 * The 'xtype' defines the component widget class .
 * For a container-type (xtype: 'panel') the options should include a 'layout' (like 'border' or 'card',
 * and an array of 'items' with each element being a component (another container or a leaf widget component).
 *
 * In order to distinguish ExtJS-specific config options from those that are Heron-specific,
 * the later are prefixed with "hr". These are defined outside this file to allow quick custimization.
 *
 * Specific config options for ExtJS components can be found in the API docs:
 * http://docs.sencha.com/ext-js/3-4/#!/api
 *
 **/
 /*
 Heron.geoportal.menuItems = [
	{
		id: 'hr-menu-bar',
		xtype: 'toolbar',
		floating: false,
		items:[
			{
				xtype: 'tbspacer',
				width: 240
			},
			{
				xtype: 'tbbutton',
				text: 'Map',
				card: 'hr-geo-main',
				handler: Heron.widgets.MenuHandler.onSelect
			},
			{
				xtype: 'tbspacer'
			},
			{
				xtype: 'tbbutton',
				text: 'Projects',
				menu: [
					{
						text: 'Project 1',
						card: 'hr-content-main',
						page: 'inspire',
						handler: Heron.widgets.MenuHandler.onSelect
					},
					{
						text: 'Project 2',
						card: 'hr-content-main',
						page: 'georzlab',
						handler: Heron.widgets.MenuHandler.onSelect
					},
					{
						text: 'iFramed Content',
						card: 'hr-content-main',
						page: 'iframed',
						handler: Heron.widgets.MenuHandler.onSelect
					},
					{
						text: 'External URL',
						card: 'hr-content-main',
						url: '/heron/latest/examples/geoportal/content/external-url.html',
						handler: Heron.widgets.MenuHandler.onSelect
					},
					{
						text: 'Dummy',
						handler: function (item) { alert("Any other handler may be specified")  }
					}
				]
			},
			{
				xtype: 'tbspacer'
			},
			{
				xtype: 'tbbutton',
				text: 'Help',
				menu: [
					{
						text: 'Item One',
						handler: function (item) { alert("text=" + item.text)  }
					},
					{
						text: 'Item Two',
						handler: function (item) { alert("text=" + item.text)  }
					},
					{
						text: 'Item Three',
						handler: function (item) { alert("text=" + item.text)  }
					}
				]
			}
		]
	}
];
*/

/*Time display setting*/
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy+'. '+mm+'. '+dd+'.';

Heron.layout = {
	xtype: 'panel',

	/* Optional ExtJS Panel properties, see ExtJS API docs. */
	id: 'hr-container-main',
	layout: 'border',
	border: true,

	items: [
		{
			/** North container: fixed banner plus Menu. */
			xtype: 'panel',
			id: 'hr-container-north',
			region: 'north',
			layout: 'border',
			width: '100%',
			height: 45,
			bodyBorder: false,
			border: false,
			items :  [
				{
					xtype: 'hr_htmlpanel',
					id: 'hr-logo-panel',
					region: 'center',
					bodyBorder: false,
					border: false,
					autoLoad: {
						url: 'header/header.html'
					},
					height: 48

				},
				{
					xtype: 'hr_menupanel',
					id: 'hr-menu-panel',
					region: 'south',
					bodyBorder: false,
					border: false,
					height: 0,
					/** Menu options, see widgets/MenuPanel */
					hropts: {
						pageRoot: 'content',
						cardContainer: 'hr-container-center',
						pageContainer: 'hr-content-main',
						defaultCard: 'hr-geo-main',
						defaultPage: 'hr-geo-main'
					},
					/** See above for the items. */
					items: Heron.geoportal.menuItems
				}
			]
		},
		{
			/**
			 * Content area: either map + navigation or plain (HTML) content driven by Menu.
			 * An ExtJS Card Layout is used to swap between Map view and HTML content views.
			 **/
			xtype: 'panel',
			id: 'hr-container-center',
			region: 'center',
			layout: 'card',
			border: false,
			header: false,
			activeItem: 'hr-content-main',
			width: '100%',

			items :  [
				{
					/** HTML content area in which HTML fragments from content/ dir are placed. */
					xtype: 'hr_htmlpanel',
					id: 'hr-content-main',
					layout: 'fit',
					autoScroll: true,
					height: '100%',
					width: '100%',
					preventBodyReset: true,
					bodyBorder: false,
					border: false
				},
				{
					/** "Geo" content area, i.e. the Map and the Accordion widgets on the left. */
					xtype: 'panel',
					id: 'hr-geo-main',
					layout: 'border',
					width: '100%',
					border: false,
					items: 	[	
		{
			xtype: 'panel',

			id: 'hr-menu-left-container',
			layout: 'accordion',
			region: "west",
			width: 260,
			collapsible: true,
			split: true,
			title: 'Info panel',
			border: false,
			defaults: {
            autoScroll:true,
			},
			layoutConfig: {
			titleCollapogc: true,
			animate: true,
			activeOnTop: false
			},
			items: [
				{
					xtype: 'hr_htmlpanel',
					id: 'hr-info-west',
					// See HTML content in Options.js
					html: Heron.options.info.html,
					preventBodyReset: true,
					collapsed: true,
					title: 'Üdvözlet!'
				},
			
				{
					xtype: 'hr_layertreepanel',
					collapsed: false,
					hropts : Heron.options.layertree 
				},
				
				{
                    xtype: 'hr_bookmarkspanel',
                    id: 'hr-bookmarks',
                    border: true,
					collapsed: true,
                    /** The map contexts to show links for in the BookmarksPanel. */
                    hropts: Heron.options.bookmarks
                },
				{
					xtype: 'hr_htmlpanel',
					id: 'hr-legend-west',
					// See HTML content in Options.js
					html: Heron.options.legend.html,
					preventBodyReset: true,
					collapsed: true,
					title: 'Jelmagyarázat'
				}			

				/** Populates Layer tree from WMS GetCapabilities. */
				/*				{
				 title: 'FAO WMS',
				 xtype: 'hr_capabilitiestreepanel',
				 autoScroll: true,
				 useArrows: true,
				 hropts: {
				 text: 'FAO WMS Layers',
				 preload: true,
				 url: 'http://data.fao.org/geo/wms?'
				 }
				 }, */

				

			]
		},
		{
			xtype: 'panel',

			id: 'hr-map-and-info-container',
			layout: 'border',
			region: 'center',
			width: '100%',
			// collapsible: true,
			split	: true,
			border: false,
			items: [
				{
					// The Map
					xtype: 'hr_mappanel',
					id: 'hr-map',
					//title: 'Erdőtérkép - Magyarországi Erdészeti Webtérkép  (2017.06.08-ai állapot)',					
					title: 'Erdőtérkép - Magyarországi Erdészeti Webtérkép - Napi frissítéssel (' + today + ' napi állapot)' + '  A térképi megjelenítés tájékoztató jellegű!' ,
					region: 'center',
					collapsible: false,
					border: false,
					// See Options.js
					hropts: Heron.options.map
				},

			]
		}/*,
		{
			xtype: 'panel',

			id: 'hr-menu-right-container',
			layout: 'accordion',
			region: "east",
			width: 200,
			collapsible: true,
			collapsed: false,
			split: true,
			border: false,
			items: [
				{
					xtype: 'hr_layerlegendpanel',

                    bodyStyle: 'padding:10px 10px',
                    border: false,
					defaults: {
						// see GeoExt
						labelCls: 'hr-legend-panel-header',
	 	 				useScaleParameter: true,
		 				baseParams: {
		     				// Override default image/gif in WMS GetLegendGraphic
			 				FORMAT: 'image/png',
			 				// legend parameters
			 				LEGEND_OPTIONS: 'forceLabels:on;fontName=Verdana;fontSize:11'
		 				}
	 				},
					hropts: {
						// Preload Legends on initial startup
						// Will fire WMS GetLegendGraphic's for WMS Legends
						// Otherwise Legends will be loaded only when Layer
						// becomes visible. Default: false
						prefetchLegends: false
					}
				}
			]
		}*/
		
	]
				}
			]
		}
	]
};
