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

/**
 * Defines settings for the Heron App layout wihtin Layout.js.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) and GeoExt and Heron MC components.
 * For convenience specific settings within this layout are defined here
 * for structuring and reuse purposes.
 *
 **/

/*
 * Common settings for MapPanel
 * These will be assigned as "hropts" within the MapPanel config
 */
Ext.namespace("Heron.options");
Ext.namespace("Heron.scratch");
OpenLayers.ProxyHost = "https://erdoterkep.nebih.gov.hu/cgi-bin/proxy.cgi?url=";
Ext.BLANK_IMAGE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';

Ext.namespace("Heron.options.map");

/**
 * Check if bookmark passed in parms
 * TODO: move to heron core !!
 */
Ext.onReady(function() {
    // Bookmark e.g. http://sensors.geonovum.nl/heronviewer?bookmark=rivmriono2 may be passed in
    var queryParams = OpenLayers.Util.getParameters();
    var bookmark = (queryParams && queryParams['bookmark'] !== undefined) ? queryParams['bookmark'] : undefined;
    if (bookmark) {
        var bookmarksPanel = Ext.getCmp('hr-bookmarks');
        if (bookmarksPanel) {
            try {
                Heron.widgets.Bookmarks.setMapContext('hr-bookmarks', bookmark);
            } catch (err) {
                alert('could not load bookmark');
            }
        }
    }
});

Heron.options.map.settings = {
    projection: new OpenLayers.Projection("EPSG:900913"),
//    projection: 'EPSG:23700',
    displayProjection: new OpenLayers.Projection("EPSG:23700"),
    units: 'm',
    maxResolution: '156543.0339',
    numZoomLevels: 21,
    maxExtent: '1750000, 5700000, 2600000,6300000',
    center: '2170387,5969731',
    xy_precision: 0,
    zoom: 8,
    theme: null
};

Heron.options.map.statusbar = [
	{type: "measurepanel"},
	{type: "-"},
    {type: "any", options:{xtype: 'tbtext', text: 'EOV:'}},
    {type: "xcoord"},
    {type: "ycoord"}
];


Heron.scratch.urls = {
	GEOSERVER_WMS  : 'https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms?'
};


Heron.scratch.layermap = {

goohyb: new OpenLayers.Layer.Google(
		"Google Hybrid", 
		{type: google.maps.MapTypeId.HYBRID, visibility: true, numZoomLevels: 20},
		{singleTile: false, buffer: 0, isBaseLayer: true, transitionEffect: 'resize', alpha:0}
		),

goosat: new OpenLayers.Layer.Google(
		"Google Satellite",
		{type: google.maps.MapTypeId.SATELLITE, visibility: false, numZoomLevels: 22},
		{singleTile: false, buffer: 0, isBaseLayer: true, transitionEffect: 'resize', alpha:0}
		),
goord: new OpenLayers.Layer.Google(
		"Google Streets", // the default
		{type: google.maps.MapTypeId.ROADMAP, visibility: false, numZoomLevels: 20},
		{singleTile: false, buffer: 0, isBaseLayer: true, transitionEffect: 'resize',alpha:0}
		),
gootr: new OpenLayers.Layer.Google(
		"Google Terrain",
		{type: google.maps.MapTypeId.TERRAIN, visibility: false, numZoomLevels: 16},
		{singleTile: false, buffer: 0, isBaseLayer: true, transitionEffect: 'resize',alpha:0}
		),
		
OSM_outdoors:	new OpenLayers.Layer.OSM(
                "OSM Outdoors",
                [
					"https://a.tile.thunderforest.com/outdoors/${z}/${x}/${y}.png?apikey=94702f560c4141f794b2cef4cb590e17",
					"https://b.tile.thunderforest.com/outdoors/${z}/${x}/${y}.png?apikey=94702f560c4141f794b2cef4cb590e17",
					"https://c.tile.thunderforest.com/outdoors/${z}/${x}/${y}.png?apikey=94702f560c4141f794b2cef4cb590e17"
                ],
                {
                    visibility: true,
                    sphericalMercator: true,
                    isBaseLayer: true,
                    buffer: 3,
                    numZoomLevels: 19
                }
            ),

OSM_stamen_toner:	new OpenLayers.Layer.XYZ(
                "Stamen toner",
                [
                    "http://a.tile.stamen.com/toner/${z}/${x}/${y}.png",
					"http://b.tile.stamen.com/toner/${z}/${x}/${y}.png",
					"http://c.tile.stamen.com/toner/${z}/${x}/${y}.png"
                ],
                {
                    visibility: true,
                    sphericalMercator: true,
                    isBaseLayer: true,
                    buffer: 3,
                    numZoomLevels: 19
                }
            ),			
			

hikebike:	new OpenLayers.Layer.XYZ(
                "HikeBikeMap",
                [
                    "http://a.tiles.wmflabs.org/hikebike/${z}/${x}/${y}.png",
					"http://b.tiles.wmflabs.org/hikebike/${z}/${x}/${y}.png",
					"http://c.tiles.wmflabs.org/hikebike/${z}/${x}/${y}.png"
                ],
                {
                    visibility: true,
                    sphericalMercator: true,
                    isBaseLayer: true,
                    buffer: 3,
                    numZoomLevels: 22
                }
            ),			
			
arnyek: 	new OpenLayers.Layer.XYZ(
                "Domborzat árnyékolás",
                [
                    "http://a.tiles.wmflabs.org/hillshading/${z}/${x}/${y}.png",
					"http://b.tiles.wmflabs.org/hillshading/${z}/${x}/${y}.png",
					"http://c.tiles.wmflabs.org/hillshading/${z}/${x}/${y}.png"
                ],
                {
                    visibility: false,
                    sphericalMercator: true,
                    isBaseLayer: false,
                    buffer: 3,
                    numZoomLevels: 16
                }
            ),

turistautakhu:	new OpenLayers.Layer.XYZ(
                "turistautak.hu",
                [
                    "http://a.map.turistautak.hu/tiles/turistautak/${z}/${x}/${y}.png",
                    "http://b.map.turistautak.hu/tiles/turistautak/${z}/${x}/${y}.png",
                    "http://c.map.turistautak.hu/tiles/turistautak/${z}/${x}/${y}.png",
                    "http://d.map.turistautak.hu/tiles/turistautak/${z}/${x}/${y}.png",
                ],
                {
                    visibility: true,
                    sphericalMercator: true,
                    isBaseLayer: true,
                    buffer: 3,
                    numZoomLevels: 22
                }
            ),			

turistautak: 	new OpenLayers.Layer.XYZ(
                "Turistautak rávetítés",
                [
                    "http://a.tile.openstreetmap.hu/tt/${z}/${x}/${y}.png",
					"http://b.tile.openstreetmap.hu/tt/${z}/${x}/${y}.png",
					"http://c.tile.openstreetmap.hu/tt/${z}/${x}/${y}.png"
                ],
                {
                    visibility: false,
                    sphericalMercator: true,
                    isBaseLayer: false,
                    buffer: 3,
                    numZoomLevels: 19
                }
            ),
			
reszlet_pollen_jan:	new OpenLayers.Layer.WMS( "Januári pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_jan', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false,
    		featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),			
			
reszlet_pollen_feb:	new OpenLayers.Layer.WMS( "Februári pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_feb', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, 
    		featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),
			
reszlet_pollen_mar:	new OpenLayers.Layer.WMS( "Márciusi pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_mar', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),
			
reszlet_pollen_apr:	new OpenLayers.Layer.WMS( "Áprilils pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_apr', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),		
			
reszlet_pollen_maj:	new OpenLayers.Layer.WMS( "Májusi pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_maj', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),		
			
reszlet_pollen_jun:	new OpenLayers.Layer.WMS( "Júniusi pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_jun', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),	
			
reszlet_pollen_jul:	new OpenLayers.Layer.WMS( "Júliusi pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_jul', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml",yx: ['EPSG:900913']}
			),
			
reszlet_pollen_dec:	new OpenLayers.Layer.WMS( "Decemberi pollenkoncentráció", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "RESZLET_POLLEN", styles: 'reszlet_pollen_dec', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),			
			
tuzvesz:	new OpenLayers.Layer.WMS( "Tűzveszélyesség", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_RESZLET_VW", styles: 'tuzveszely', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, yx: ['EPSG:900913']}
			),
			
tulform:	new OpenLayers.Layer.WMS( "Tulajdonforma", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_RESZLET_VW", styles: 'tulforma', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, yx: ['EPSG:900913']}
			),

natura:		new OpenLayers.Layer.WMS( "Natura2000", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_RESZLET_VW", styles: 'natura', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, yx: ['EPSG:900913']}
			),
			
rendelt:	new OpenLayers.Layer.WMS( "Elsődleges rendeltetés", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_RESZLET_VW", styles: 'rendeltetes', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, yx: ['EPSG:900913']}
			),
			
vedett:		new OpenLayers.Layer.WMS( "Védettség", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_RESZLET_VW", styles: 'vedettseg', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, yx: ['EPSG:900913']}
			),			
			
reszlet:	new OpenLayers.Layer.WMS( "Erdőrészletek", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_RESZLET_VW", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true , 
    		featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),
szre:	new OpenLayers.Layer.WMS( "Szabad rendelkezésű erdők", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "SZRE_VW", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true}
			),				
			
hrszek:		new OpenLayers.Layer.WMS( "Földrészletek", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "kul_hrszek", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),			
			
tagok:		new OpenLayers.Layer.WMS( "Erdőtagok", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_TAG", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true, yx: ['EPSG:900913']}
			),			
 
helysegek: 	new OpenLayers.Layer.WMS( "Erdészeti helységek", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "MV_HELYSEGEK", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true, yx: ['EPSG:900913']}
			),
korzetek: 	new OpenLayers.Layer.WMS( "Erdőtervezési körzetek", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "MV_KORZETEK", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true, yx: ['EPSG:900913']}
			),
eov10: 	new OpenLayers.Layer.WMS( "EOTR 10 000 szelvényháló", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "ETT_EOV_RASZTER", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),			
igg: 		new OpenLayers.Layer.WMS( "Kormányhivatalok", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KUL_IGG", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true , yx: ['EPSG:900913']}
			),	
kj_let_regi: 	new OpenLayers.Layer.WMS( "Régi közjóléti létesítmények", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KJ_LET_REGI_XE", styles: 'kj_regi_let', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false , 
			featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),
kj_let_uj: 	new OpenLayers.Layer.WMS( "Új közjóléti létesítmények", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "KJ_LET_UJ_XE", styles: 'kj_uj_let', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false , 
			featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),
kj_ber_vonal:	new OpenLayers.Layer.WMS("Nyomvonalas berendezések",  Heron.scratch.urls.GEOSERVER_WMS,
			{layers: "KJ_BER_VONAL", styles: 'kj_nyomvonal',srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false, featureInfoFormat: "application/vnd.ogc.gml", maxResolution: 860.160}
			),		
k_2015_et: new OpenLayers.Layer.WMS( "Tervezési körzetek", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "NYILVANOS_KORZETEK", styles: 'et_korzet',  srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true , yx: ['EPSG:900913']}
			),			
r_2015_et: new OpenLayers.Layer.WMS( "Tervezett részletek", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "NYILVANOS_ERDOTERVI_ADATOK", srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true , 
			featureInfoFormat: "application/vnd.ogc.gml", yx: ['EPSG:900913']}
			),			
r_2015_et_rend: new OpenLayers.Layer.WMS( "Elsődleges rendeltetés", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "NYILVANOS_ERDOTERVI_ADATOK", styles: 'ET_elsrend', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false , yx: ['EPSG:900913']}
			),			
r_2015_et_umod: new OpenLayers.Layer.WMS( "Üzemmód", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "NYILVANOS_ERDOTERVI_ADATOK", styles: 'ET_uzemmod', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false , yx: ['EPSG:900913']}
			),			
r_2015_et_resfel: new OpenLayers.Layer.WMS( "Tervezett reszletjel", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "NYILVANOS_ERDOTERVI_ADATOK", styles: 'ET_reszlet_felirat', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: true , yx: ['EPSG:900913']}
			),			
r_2015_et_fahaszfel: new OpenLayers.Layer.WMS( "Fahasználat", Heron.scratch.urls.GEOSERVER_WMS,		
			{layers: "NYILVANOS_ERDOTERVI_ADATOK", styles: 'ET_fahasz_felirat', srs: 'EPSG:900913', format: "image/png8", transparent: true},
			{singleTile: true, isBaseLayer: false,  visibility: false ,  yx: ['EPSG:900913']}
			)				
};

Heron.options.map.layers = [
	/* ==================================
	 *            BaseLayers
	 * ==================================*/
	Heron.scratch.layermap.goohyb,
	Heron.scratch.layermap.goosat,
    Heron.scratch.layermap.goord,
	Heron.scratch.layermap.gootr,
	Heron.scratch.layermap.turistautakhu,
	Heron.scratch.layermap.hikebike,
	Heron.scratch.layermap.OSM_outdoors,
	Heron.scratch.layermap.OSM_stamen_toner,
	
	 /* ==================================
	 *            Overlays
	 * ==================================*/
	Heron.scratch.layermap.turistautak,
	Heron.scratch.layermap.reszlet_pollen_jan,
	Heron.scratch.layermap.reszlet_pollen_feb,
	Heron.scratch.layermap.reszlet_pollen_mar,
	Heron.scratch.layermap.reszlet_pollen_apr,
	Heron.scratch.layermap.reszlet_pollen_maj,
	Heron.scratch.layermap.reszlet_pollen_jun,
	Heron.scratch.layermap.reszlet_pollen_jul,
	Heron.scratch.layermap.reszlet_pollen_dec,
	Heron.scratch.layermap.arnyek,
	Heron.scratch.layermap.tuzvesz,
	Heron.scratch.layermap.tulform,
    Heron.scratch.layermap.natura,
	Heron.scratch.layermap.rendelt,
	Heron.scratch.layermap.vedett,
	Heron.scratch.layermap.reszlet,
	Heron.scratch.layermap.szre,	
	Heron.scratch.layermap.tagok,
	Heron.scratch.layermap.hrszek,
	Heron.scratch.layermap.helysegek,
	Heron.scratch.layermap.korzetek,
	Heron.scratch.layermap.eov10,
	Heron.scratch.layermap.igg,
	Heron.scratch.layermap.kj_let_uj,
	Heron.scratch.layermap.kj_let_regi,
	Heron.scratch.layermap.kj_ber_vonal,	
	Heron.scratch.layermap.k_2015_et,
	Heron.scratch.layermap.r_2015_et,
	Heron.scratch.layermap.r_2015_et_rend,
	Heron.scratch.layermap.r_2015_et_umod,
	Heron.scratch.layermap.r_2015_et_resfel,
	Heron.scratch.layermap.r_2015_et_fahaszfel
];

// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well. "-" denotes a separator item.
Heron.options.map.toolbar = [
	{type: "scale", options: {width: 110}},
	{type: "-"} ,
	{type: "featureinfo", options: {pressed: true,
	popupWindow: {
            width: 500,
            height: 560,
		featureInfoPanel: {
					maxFeatures: 10,
					showTopToolbar: true,
					showTopToolbar: true,
                displayPanels: ['Detail', 'Table'],
                exportFormats: ['CSV', 'XLS'],
		autoConfigMaxSniff: 10,		
					gridColumns: [ 
						 { 
							 featureType: 'KJ_LET_REGI_XE',
							 columns: [
								{ 
									 header: "Azonosító", 
									 width: 60, 
									 dataIndex: "AZONOSITO" 
								},							 
								{ 
									 header: "Név", 
									 width: 250, 
									 dataIndex: "NEV" 
								 },
								 { 
									 header: "Típus", 
									 width: 180, 
									 dataIndex: "TIP_NEV" 
								 },
								 { 
									 header: "Kezelő", 
									 width: 180, 
									 dataIndex: "KEZELO" 
								 },
								 { 
									 header: "Befogatóképesség", 
									 width: 120, 
									 dataIndex: "BEF" 
								 }, 
								 { 
									 header: "EOV X koordináta (KELET)", 
									 width: 180, 
									 dataIndex: "EOVX" 
								 },
								 { 
									 header: "EOV Y koordináta (ÉSZAK)", 
									 width: 180, 
									 dataIndex: "EOVY" 
								 }
							 ] 
						 },
						 { 
							 featureType: 'KJ_BER_VONAL',
							 columns: [
								{ 
									 header: "Létesítmény", 
									 width: 250, 
									 dataIndex: "NEV" 
								},							 
								{ 
									 header: "Mérőszám", 
									 width: 60, 
									 dataIndex: "MEROSZAM" 
								 },
								 { 
									 header: "Nyomvonal jelzése", 
									 width: 180, 
									 dataIndex: "NYOMVONAL_JELZESE" 
								 }
							 ] 
						 },	
						 { 
							 featureType: 'KJ_LET_UJ_XE',
							 columns: [
								{ 
									 header: "Azonosító", 
									 width: 60, 
									 dataIndex: "AZONOSITO" 
								},							 
								{ 
									 header: "Név", 
									 width: 250, 
									 dataIndex: "NEV" 
								 },
								 { 
									 header: "Típus", 
									 width: 180, 
									 dataIndex: "TIP_NEV" 
								 },
								 { 
									 header: "Kezelő", 
									 width: 180, 
									 dataIndex: "KEZELO" 
								 },
								 { 
									 header: "Befogatóképesség", 
									 width: 120, 
									 dataIndex: "BEF" 
								 }, 
								 { 
									 header: "EOV X koordináta (KELET)", 
									 width: 180, 
									 dataIndex: "EOVX" 
								 },
								 { 
									 header: "EOV Y koordináta (ÉSZAK)", 
									 width: 180, 
									 dataIndex: "EOVY" 
								 }
							 ] 
						 },

						 { 
							 featureType: 'KUL_RESZLET_VW',  
							 columns: [ 
								 { 
									 header: "Illetékes megyei kormányhivatal", 
									 width: 80, 
									 dataIndex: "IG" 
								 }, 
								 { 
									 header: "Körzet", 
									 width: 150, 
									 dataIndex: "KORZET" 
								 }, 							 
								 { 
									 header: "Helység /kód/", 
									 width: 120, 
									 dataIndex: "HEG" 
								 }, 
								 { 
									 header: "Tag", 
									 width: 50, 
									 dataIndex: "TAG" 
								 }, 
								 { 
									 header: "Részletjel /kód/", 
									 width: 90, 
									 dataIndex: "RES" 
								 },
								 { 
									 header: "Erdőgazdálkodó kód", 
									 width: 90, 
									 dataIndex: "EGO_KOD" 
								 }, 								 
								 { 
									 header: "Terület", 
									 width: 70, 
									 dataIndex: "TERULET" 
								 },
								 { 
									 header: "Erdészeti táj", 
									 width: 100, 
									 dataIndex: "ERD_TAJ" 
								 }, 
								 { 
									 header: "Tulajdonforma", 
									 width: 120, 
									 dataIndex: "TULF" 
								 }, 
								 { 
									 header: "Elsődleges rendeltetés", 
									 width: 150, 
									 dataIndex: "REND1" 
								 },
								 { 
									 header: "További rendeltetés 1", 
									 width: 150, 
									 dataIndex: "REND2" 
								 },
								 { 
									 header: "További rendeltetés 2", 
									 width: 150, 
									 dataIndex: "REND3" 
								 },
								 { 
									 header: "Natura2000", 
									 width: 150, 
									 dataIndex: "NATURA2000" 
								 },
								 { 
									 header: "Faállomány típus", 
									 width: 150, 
									 dataIndex: "FATI" 
								 }, 
								 { 
									 header: "Természetességi állapot", 
									 width: 150, 
									 dataIndex: "TERMMUT" 
								 }, 
								 { 
									 header: "Természetességi alapelvárás", 
									 width: 150, 
									 dataIndex: "TERMALAP" 
								 }, 								 
								 { 
									 header: "Erdősítési kötelezettség alá vont terület", 
									 width: 150, 
									 dataIndex: "KOT_TER" 
								 }, 
								 { 
									 header: "Védettség", 
									 width: 150, 
									 dataIndex: "VEDETT" 
								 }, 
								 { 
									 header: "Tűzveszélyesség", 
									 width: 190, 
									 dataIndex: "TUZCSOP" 
								 },
								 { 
									 header: "Következő tervezés éve", 
									 width: 80, 
									 dataIndex: "KOV_TERV_E" 
								 }, 
							 ] 
						 },

						 { 
							 featureType: 'NYILVANOS_ERDOTERVI_ADATOK',  
							 columns: [ 
								 { 
									 header: "Illetékes megyei kormányhivatal", 
									 width: 150, 
									 dataIndex: "IG" 
								 }, 
								 { 
									 header: "Körzet", 
									 width: 150, 
									 dataIndex: "KORZET" 
								 }, 							 
								 { 
									 header: "Helység /kód/", 
									 width: 120, 
									 dataIndex: "HEG" 
								 }, 
								 { 
									 header: "Tag", 
									 width: 50, 
									 dataIndex: "TAG" 
								 }, 
								 { 
									 header: "Részletjel /kód/", 
									 width: 90, 
									 dataIndex: "RES" 
								 }, 
								 { 
									 header: "Terület", 
									 width: 90, 
									 dataIndex: "TERULET" 
								 }, 
								 { 
									 header: "Természetességi állapot", 
									 width: 90, 
									 dataIndex: "TERMMUT" 
								 }, 
								 { 
									 header: "Természetességi alapelvárás", 
									 width: 150, 
									 dataIndex: "TERMALAP" 
								 }, 								 { 
									 header: "1 Rendeltetés", 
									 width: 90, 
									 dataIndex: "REND1" 
								 }, 
								 { 
									 header: "2 Rendeltetés", 
									 width: 90, 
									 dataIndex: "REND2" 
								 }, 
								 { 
									 header: "3 Rendeltetés", 
									 width: 90, 
									 dataIndex: "REND3" 
								 }, 
								 { 
									 header: "Vágásérettségi kor", 
									 width: 90, 
									 dataIndex: "VKOR" 
								 },
								 { 
									 header: "1 Fahasználat módja és érintett területe", 
									 width: 90, 
									 dataIndex: "FAH_MOD_TER1" 
								 }, 
								 { 
									 header: "2 Fahasználat módja és érintett területe", 
									 width: 90, 
									 dataIndex: "FAH_MOD_TER2" 
								 }, 
								 { 
									 header: "3 Fahasználat módja és érintett területe", 
									 width: 90, 
									 dataIndex: "FAH_MOD_TER3" 
								 }, 
								 { 
									 header: "Erdősítés módja 1", 
									 width: 90, 
									 dataIndex: "EES_MOD1" 
								 }, 
								 { 
									 header: "Erdősítés célállomány 1", 
									 width: 90, 
									 dataIndex: "EES_CELALL1" 
								 }, 
								 { 
									 header: "Erdősítés terv. vágáskor 1", 
									 width: 90, 
									 dataIndex: "EES_TERV_KOR1" 
								 }, 
								 { 
									 header: "Erdősítés módja 2", 
									 width: 90, 
									 dataIndex: "EES_MOD2" 
								 }, 
								 { 
									 header: "Erdősítés célállomány 2", 
									 width: 90, 
									 dataIndex: "EES_CELALL2" 
								 }, 
								 { 
									 header: "Erdősítés terv. vágáskor 2", 
									 width: 90, 
									 dataIndex: "EES_TERV_KOR2" 
								 },
								 { 
									 header: "Üzemmód", 
									 width: 90, 
									 dataIndex: "UZEMMOD" 
								 },
								 { 
									 header: "Natura2000", 
									 width: 150, 
									 dataIndex: "NATURA2000" 
								 }, 
								 { 
									 header: "Védettség", 
									 width: 150, 
									 dataIndex: "VEDETT" 
								 }, 
								 { 
									 header: "Faállománytípus", 
									 width: 90, 
									 dataIndex: "FATI" 
								 }, 
								 { 
									 header: "Szöveges tervelőírások (Megjegyzés)", 
									 width: 180, 
									 dataIndex: "MEGJEGYZES" 
								 }
							 ] 
						 },
						 
						{ 
							 featureType: 'ETT_EOV_RASZTER', 
							 columns: [ 
								 { 
									 header: "Szelvényszám", 
									 width: 110, 
									 dataIndex: "SZELVENYSZAM" 
								 }

							 ] 
						},
						 
						{ 
							 featureType: 'kul_hrszek', 
							 columns: [ 
								 { 
									 header: "Földhivatali helység", 
									 width: 110, 
									 dataIndex: "FTELEP" 
								 },
								 { 
									 header: "Helyrajzi szám", 
									 width: 60, 
									 dataIndex: "HRSZ" 
								 },
								 { 
									 header: "Alrészlet", 
									 width: 20, 
									 dataIndex: "ALRESZLET" 
								 }

							 ] 
						},
						 
						{ 
							 featureType: 'RESZLET_POLLEN', 
							 columns: [ 
								 { 
									 header: "Faállomány típus", 
									 width: 110, 
									 dataIndex: "FATI" 
								 },
								 { 
									 header: "Január", 
									 width: 60, 
									 dataIndex: "JANK" 
								 },
								 { 
									 header: "Február", 
									 width: 60, 
									 dataIndex: "FEBK" 
								 },
								 { 
									 header: "Március", 
									 width: 60, 
									 dataIndex: "MARK" 
								 },
								 { 
									 header: "Április", 
									 width: 60, 
									 dataIndex: "APRK" 
								 },
								 { 
									 header: "Május", 
									 width: 60, 
									 dataIndex: "MAJK" 
								 },
								 { 
									 header: "Június", 
									 width: 60, 
									 dataIndex: "JUNK" 
								 },
								 { 
									 header: "Július", 
									 width: 60, 
									 dataIndex: "JULK" 
								 },
								 { 
									 header: "December", 
									 width: 60, 
									 dataIndex: "DECK" 
								 }
							 ] 
						}
						 
					] 
}}}},
	{type: "-"} ,
	{type: "pan"},
	{type: "zoomin"},
	{type: "zoomout"},
	//{type: "zoomvisible"},
	{type: "-"} ,
	{type: "zoomprevious"},
	{type: "zoomnext"},
	{type: "-"},
	{type: "measurelength", options: {geodesic: true}},
	{type: "measurearea", options: {geodesic: true}},
	{type: "-"},
	{type: "addbookmark"},
	{type: "oleditor", options: {					

					// Options for OLEditor
					olEditorOptions: {
						editLayer: Heron.scratch.layermap.editor,
						activeControls: ['UploadFeature', 'DownloadFeature', 'Separator', 'Navigation', 'TransformFeature', 'Separator', 'DeleteAllFeatures', 'DeleteFeature', 'DragFeature', 'SelectFeature', 'Separator', 'DrawHole', 'ModifyFeature', 'Separator'],
						featureTypes: ['text', 'regular', 'polygon', 'path', 'point'],
						language: 'hu',
						DownloadFeature: {
							url: Heron.globals.serviceUrl,
							formats: [
								{name: 'Well-Known-Text (WKT EOV) ', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT', fileProjection: new OpenLayers.Projection('EPSG:23700')},
								{name: 'Well-Known-Text (WKT WGS84) ', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT', fileProjection: new OpenLayers.Projection('EPSG:4326')},
								//{name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: new OpenLayers.Format.GML.v2({featureType: 'oledit', featureNS: 'http://geops.de'})},
								//{name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                                {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                                {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                                {name: 'ESRI Shapefile (zipp-elt, EOV)', fileExt: '.zip', mimeType: 'application/zip', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'ESRI Shapefile', fileProjection: new OpenLayers.Projection('EPSG:23700')},
                                {name: 'ESRI Shapefile (zipp-elt, WGS84)', fileExt: '.zip', mimeType: 'application/zip', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'ESRI Shapefile', fileProjection: new OpenLayers.Projection('EPSG:4326')},
								//{name: 'CSV (X,Y EOV)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:23700')},
                                {name: 'OGC GeoPackage (EOV)', fileExt: '.gpkg', mimeType: 'application/binary', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'GPKG', fileProjection: new OpenLayers.Projection('EPSG:23700')}
								//{name: 'OGC GeoPackage (WGS84)', fileExt: '.gpkg', mimeType: 'application/binary', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'GPKG', fileProjection: new OpenLayers.Projection('EPSG:4326')}

							],
							// For custom projections use Proj4.js
							fileProjection: new OpenLayers.Projection('EPSG:4326')
						},
						UploadFeature: {
							url: Heron.globals.serviceUrl,
							formats: [
								{name: 'Well-Known-Text (WKT EOV)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT', fileProjection: new OpenLayers.Projection('EPSG:23700')},
								{name: 'Well-Known-Text (WKT WGS84)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT', fileProjection: new OpenLayers.Projection('EPSG:4326')},
								//{name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML'},
								//{name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
                                {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                                {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                                {name: 'CSV (X,Y EOV)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:23700')},
								{name: 'CSV (X,Y WGS84)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                                {name: 'ESRI Shapefile (zipp-elt, EOV)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:23700')},
                                {name: 'ESRI Shapefile (zipp-elt, WGS84)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')},
                                {name: 'OGC GeoPackage (EOV)', fileExt: '.gpkg', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:23700')}
                                //{name: 'OGC GeoPackage (1 réteg, WGS84)', fileExt: '.gpkg', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')}

                            ],
							// For custom projections use Proj4.js
							fileProjection: new OpenLayers.Projection('EPSG:4326')
						}
					}
				}
			},	
	/*{type: "printdirect", options: {url: 'http://11ikozp-dev2.aesz.hu:8080/print-servlet/pdf'
									 , mapTitle: 'My Header - Direct Print'
									 , mapTitleYAML: "mapTitle"		// MapFish - field name in config.yaml - default is: 'mapTitle'
									, mapComment: 'My Comment - Direct Print'
									 , mapCommentYAML: "comment"	// MapFish - field name in config.yaml - default is: 'mapComment'
									 , mapFooter: 'My Footer - Direct Print'
									 , mapFooterYAML: "mapFooter"	// MapFish - field name in config.yaml - default is: 'mapFooter'
									 , mapPrintLayout: "A4"			// MapFish - 'name' entry of the 'layouts' array or Null (=> MapFish default)
									 , mapPrintDPI: "75"				// MapFish - 'value' entry of the 'dpis' array or Null (=> MapFish default)
									 , mapPrintLegend: true
									 , legendDefaults: {
									     useScaleParameter : false,
									     baseParams: {FORMAT: "image/png8"}
									   }
									}},
	{type: "printdialog", options: {url: 'http://11ikozp-dev2.aesz.hu:8080/print-servlet/pdf', windowWidth: 360
									 , showTitle: true
									 , mapTitle: 'Térképcím'
									 , mapTitleYAML: "mapTitle"		// MapFish - field name in config.yaml - default is: 'mapTitle'
									 , showComment: true
									 , mapComment: 'Megjegyzés'
									 , mapCommentYAML: "comment"	// MapFish - field name in config.yaml - default is: 'mapComment'
									 , showFooter: true
									 , mapFooter: 'NÉBIH Erdészeti Igazgatóság'
									 , mapFooterYAML: "footer"	// MapFish - field name in config.yaml - default is: 'mapFooter'
									 , showRotation: true
									 , showLegend: true
									 , showLegendChecked: true
									 , mapLimitScales: false
									}},*/
	{type: "-"},
	{type: "coordinatesearch", options: {
				// see ToolbarBuilder.js
					  formWidth: 320
					, formPageX: 15
					, formPageY: 100
				// see CoordSearchPanel.js
					// , title: 'My title'
					, titleDescription: 'Kérem válasszon vetületi rendszert...<br><br>Majd adja meg a Hosszúság/Szélesség értékeket,<br> vagy az Y/X-koordinátákat a vetület szerint.<br>&nbsp;<br>'
					, titleDescriptionStyle: 'font-size:11px; color:dimgrey;'
					, bodyBaseCls: 'x-form-back'
					, bodyItemCls: 'hr-html-panel-font-size-11'
					, bodyCls: 'hr-html-panel-font-size-11'
					, fieldMaxWidth: 200
					, fieldLabelWidth: 80
					, fieldStyle: 'color: red;'
					, fieldLabelStyle: 'color: darkblue'
					, layerName: 'Helyzet Európában - Hossz/Szél'
					, onProjectionIndex: 1
					, onZoomLevel: 15
					, showProjection: true
					, showZoom: false
					, showAddMarkers: true
					, checkAddMarkers: true
					, showHideMarkers: true
					, checkHideMarkers: false
					, showResultMarker: false
					, fieldResultMarkerStyle: 'color: green;'
					, fieldResultMarkerText: 'Jelölő helyzete: '
					, fieldResultMarkerSeparator: ' | '
					, fieldResultMarkerPrecision: 4
					, removeMarkersOnClose: true
					, showRemoveMarkersBtn: false
					, buttonAlign: 'right'		// left, center, right
						/*
							http://spatialreference.org/ref/epsg/4326/
							EPSG:4326
							WGS 84
						    WGS84 Bounds: -180.0000, -90.0000, 180.0000, 90.0000
						    Projected Bounds: -180.0000, -90.0000, 180.0000, 90.0000

							http://spatialreference.org/ref/epsg/28992/    
							EPSG:28992
							Amersfoort / RD New
						    WGS84 Bounds: 3.3700, 50.7500, 7.2100, 53.4700
						    Projected Bounds: 12628.0541, 308179.0423, 283594.4779, 611063.1429
						*/
					, hropts: [
						{
							  projEpsg: 'EPSG:4326'
							, projDesc: 'WGS 84'
							, fieldLabelX: 'Hosszúság [17.8632]'
							, fieldLabelY: 'Szélesség [47.1753]'
							, fieldEmptyTextX: 'Adja meg a hosszúságot [lon]...'
							, fieldEmptyTextY: 'Adja meg a szélességet [lat]...'
							, fieldMinX: -180
							, fieldMinY: -90
							, fieldMaxX: 180
							, fieldMaxY: 90
							, fieldDecPrecision: 6
							, iconWidth: 32
							, iconHeight: 32
							, localIconFile: 'bluepin.png'
							, iconUrl: null
						}
						,
						{
							  projEpsg: 'EPSG:23700'
							, projDesc: 'Magyarországi EOV'
							, fieldLabelX: 'Y [m]'
							, fieldLabelY: 'X [m]'
							, fieldEmptyTextX: 'Adja meg a keleti koordinátát ...'
							, fieldEmptyTextY: 'Adja meg az északi koordinátát ...'
							, fieldMinX: 384000
							, fieldMinY: 32000
							, fieldMaxX: 960000
							, fieldMaxY: 384000
							, fieldDecPrecision: 2
							, iconWidth: 32
							, iconHeight: 32
							, localIconFile: 'redpin.png'
							, iconUrl: null
						}
					]

		// ====================================

	}},
	{type: "-"},
	{type: "help", options: {tooltip: 'Segítség a térkép használatához', contentUrl: '/help/help.htm'}},
	{type: "-"},
	{
		// Instead of an internal "type", or using the "any" type
		// provide a create factory function.
		// MapPanel and options (see below) are always passed
		create: function (mapPanel, options) {

			// A trivial handler
			/*options.handler = function () {
				alert(options.msg);
			};*/
			
			/*options.handler : function(){
               document.location = "http://erdoterkep.nebih.gov.hu/erdoterkep_TIR_turistautak.kmz";
            }*/

			// Provide an ExtJS Action object
			// If you use an OpenLayers control, you need to provide a GeoExt Action object.
			return new Ext.Action(options);
		},

		/* Options to be passed to your create function. */
		options: {
			tooltip: '2018.10.01. Részlet állapot Google Earth Erdőtérkép réteg',
			iconCls: "icon-earth",
			enableToggle: false,
			pressed: false,
			id: "myitem",
			toggleGroup: "toolGroup",
			/*handler : function(){
               href = "http://erdoterkep.nebih.gov.hu/erdoterkep_TIR_turistautak.kmz";
            }*/
			
			handler : function(){
               window.open(
			  'https://erdoterkep.nebih.gov.hu/tarhely/erdoterkep.kmz',
			  '_blank' // <- This is what makes it open in a new window.
			)
            }
		}
	}		
];

// The content of the HTML info panel.
Ext.namespace("Heron.options.info");
Heron.options.info.html =
			'<div class="hr-html-panel-body">' +
			'<h2>Kedves Látogató!</h2>' +
			'<p><strong>Új tematika</strong> Az erdőrészlet tematikák között új rétegcsoport szerepel, amely a pollenkoncentráció szerint jeleníti meg az erdőrészleteket. A modelltérképek által biztosított információk tájékoztató jellegűek, valamint az Állami Népegészségügyi és Tisztiorvosi Szolgálat (ÁNTSZ) 2015-évi pollenjelentésére támaszkodnak, a virágzás időpontja minden évben eltérő lehet.</p>' +
			'<p><strong>Új funkció:</strong> Az alakzat rajzolással elmentett, vagy külső forrásból származó elemeket is fel lehet tölteni a térképre. Így a térképen a korábban rajzolt alakzatok újból megjeleníthetők, megoszthatók, tovább szerkeszthetők! Hasznos infók a rajzoláshoz a kérdőjeles segítség ikon alatt! </p>' +
			'<p><strong>Új funkció:</strong> Alakzat rajzolás ikon az eszközsoron. A rajzolt elemeket le is lehet tölteni wkt, gpx, gml, kml fromátumban. Így a térképen rajzolt alakzatok, más eszközben (GPS, GoogleEarth, Asztali GIS) is felhasználhatók! </p>' +
			'<p>Egyéni könyvjelző megadása a Csillag ikonnal. Elmentheti az Ön által beállított rétegeket, kiterjedést, melyek a Könyvjelzők panelen jelennek meg az előre beállított könyvjelzők alatt. A böngésző a  Cookie-k között tárolja ezeket.</p>' +
            '<p>Az Erdőtérkép kibővült a közjóléti létesítmények típus szerinti ábrázolásával, mellyel segítséget kívánunk nyújtani erdei kirándulásaik megszervezéséhez.</p>' +
            '<p>Az "i" infógomb használatával a létesítményre vonatkozó általános adatokat jeleníthet meg. Az információkat folyamatosan frissítjük és bővítjük.</p>' +
			'<p>Ezen a bal oldali panelen találhatók a megjeleníthető rétegek listája.</p>' +
			'<p>A térképen lehetőség van koordinátás keresésre is. EOV és WGS84 vetületi rendszerben is megadhatóak a koordináták.</p>'
			'<p>Ikonnal is tudunk nagyítani, kicsinyíteni, valamint a korábbi vagy a következő térképhelyzetet váltogatni.</p>' +
			'<p>Külön "i" infógomb szolgál az erdőrészlet, és más elemek információinak megjelenítésére.</p>' +
			'<p>A kereséshez egy külön panel áll rendelkezésre, melyben a keresési eredményekre kattintva azok meg is jelennek a térképen. Duplán kattintva pedig a részletre is nagyít a térkép.</p>' +
			'<p>A jobb oldali panelen láthatók az egyes rétegek jelkulcsai.</p>' +
			'<p>Minden oldalpanel becsukható, és átméretezhetó. Lehetőség van arra, hogy a panel csak ideiglenesen nyiljon ki, ha csak a sávra és nem a kettős nyíl ikonra kattintunk.</p>' +
			'<p>Ez a térkép még fejlesztés alatt áll!</p>' +
			'<p>Kellemes térképböngészést kívánok:</p>' +
			'<a href="mailto:erdoterkep@gmail.com">Magyar Zsolt térinformatikus</a>' +
		'</div>';
Ext.namespace("Heron.options.legend");		
Heron.options.legend.html =
			'<div class="hr-html-panel-body">' +
			'<img src="https://erdoterkep.nebih.gov.hu/pic/jelmagy-kulso.jpg" style="margin-top:-5px; margin-left:-30px" id="viewer_north_img"/>'
		'</div>';		
		
// This is the default tree, used here just for reference
Ext.namespace("Heron.options.layertree");

// Define a minimal tree config to be instantiated as a Ext Tree with GeoExt (gx-layer) leaf nodes
Heron.options.layertree.tree = [
	{
		text:'Alap rétegek', iconCls: "pictogramBackgroundCapaBase", expanded: false, children:
			[	{nodeType: "gx_layer", layer: "Google Hybrid"},
				{nodeType: "gx_layer", layer: "Google Satellite"},	
				{nodeType: "gx_layer", layer: "Google Streets"},
				{nodeType: "gx_layer", layer: "Google Terrain"},
				{nodeType: "gx_layer", layer: "HikeBikeMap"},
				{nodeType: "gx_layer", layer: "OSM Outdoors"},
				{nodeType: "gx_layer", layer: "Stamen toner"},
				{nodeType: "gx_layer", layer: "turistautak.hu"},
				{nodeType: "gx_layer", layer: "Turistautak rávetítés"},
				{nodeType: "gx_layer", layer: "Domborzat árnyékolás"}
			]
	},
	{
		text:'Rávetítések', expanded: true, children: 
			[
				{
					text:'Igazgatási egységek', expanded: false, children:
						[
							{nodeType: "gx_layer", layer: "Kormányhivatalok"},
							{nodeType: "gx_layer", layer: "Erdőtervezési körzetek"},
							{nodeType: "gx_layer", layer: "Erdészeti helységek"},
							{nodeType: "gx_layer", layer: "EOTR 10 000 szelvényháló"}
						]
				},
				{
					text:'Közjóléti létesítmények', expanded: false, children:
						[
							{nodeType: "gx_layer", layer: "Új közjóléti létesítmények"},
							{nodeType: "gx_layer", layer: "Régi közjóléti létesítmények"},
							{nodeType: "gx_layer", layer: "Nyomvonalas berendezések"}
						]
				},
				{
					text:'Erdőrészlet', expanded: true, children:
						[
							{nodeType: "gx_layer", layer: "Erdőtagok"},
							{nodeType: "gx_layer", layer: "Földrészletek"},
							{nodeType: "gx_layer", layer: "Erdőrészletek"},
							{nodeType: "gx_layer", layer: "Szabad rendelkezésű erdők"},							
						]
				},
				{
					text:'Erdőrészlet tematikák', expanded: true, children:
						[
							{nodeType: "gx_layer", layer: "Tulajdonforma"},
							{nodeType: "gx_layer", layer: "Elsődleges rendeltetés"},
							{nodeType: "gx_layer", layer: "Védettség"},
							{nodeType: "gx_layer", layer: "Natura2000"},
							{nodeType: "gx_layer", layer: "Tűzveszélyesség"},
							{
					text:'Pollenkoncentráció havi eloszlása', expanded: false, children:
						[
							{nodeType: "gx_layer", layer: "Januári pollenkoncentráció"},
							{nodeType: "gx_layer", layer: "Februári pollenkoncentráció"},
							{nodeType: "gx_layer", layer: "Márciusi pollenkoncentráció"},
							{nodeType: "gx_layer", layer: "Áprilils pollenkoncentráció"},
							{nodeType: "gx_layer", layer: "Májusi pollenkoncentráció"},
							{nodeType: "gx_layer", layer: "Júniusi pollenkoncentráció"},
							{nodeType: "gx_layer", layer: "Júliusi pollenkoncentráció"},
							{nodeType: "gx_layer", layer: "Decemberi pollenkoncentráció"}							
						]
				},
							
						]
				},
				{    text:'Nyilvános erdőtervezési adatok', expanded: true, children: 

					[
							{nodeType: "gx_layer", layer: "Tervezési körzetek"},
							{nodeType: "gx_layer", layer: "Tervezett reszletjel"},
							{nodeType: "gx_layer", layer: "Tervezett részletek"},
						
							{
							text:'Erdőrészlet tematikák', expanded: true, children:
							[	
							{nodeType: "gx_layer", layer: "Fahasználat"},
							{nodeType: "gx_layer", layer: "Elsődleges rendeltetés"},
							{nodeType: "gx_layer", layer: "Üzemmód"}
							]
							}
					]

				}

				]	
	}
	
	
];
		


Heron.options.bookmarks =
		[
			{
				id: 'Orsz_nezet',
				name: '--- Alapbeállítás',
				desc: 'Országos nagyítás, kiinduló rétegek',
				layers: ['Erdőrészletek', 'Erdőtagok', 'Erdészeti helységek', 'Erdőtervezési körzetek', 'Kormányhivatalok', 'Google Hybrid' ],
				x: 2170387,
				y: 5969731,
				zoom: 8
			},
			{
				id: 'Kozjolet',
				name: 'Erdészeti közjóléti létesítmények',
				desc: 'Országos nagyítás, kiinduló rétegek',
				layers: ['Új közjóléti létesítmények', 'Régi közjóléti létesítmények','Erdőrészletek', 'Erdőtagok', 'Erdészeti helységek', 'Erdőtervezési körzetek', 'Kormányhivatalok', 'Google Hybrid'],
				x: 2170387,
				y: 5969731,
				zoom: 8
			},
			{
				id: 'Pelda_1',
				name: 'Példa: Tarnaleleszi körzet',
				desc: 'Turistautak.hu és az erdőtervezés alatt álló részletek, üzemmód',
				layers: ['2013 Tervezési körzetek', '2013 részletek', '2013 üzemmód','2013 reszletjel', 'Erdőrészletek', 'Erdőtagok', 'Erdészeti helységek', 'Erdőtervezési körzetek', 'Kormányhivatalok', 'turistautak.hu'],
				x: 2242424,
				y: 6119700,
				zoom: 15
			},
			{
				id: 'Pelda_2',
				name: 'Példa: Pilismarót tulajdonforma ',
				desc: 'Fehér háttér, tulajdonforma szerinti tematika',
				layers: ['Tulajdonforma', 'Erdőrészletek', 'Erdőtagok', 'Erdőtervezési körzetek', 'Erdészeti helységek', 'Erdészeti körzetek', 'Kormányhivatalok', 'Fehér háttér'],
				x: 2097700,
				y: 6072538,
				zoom: 15
			},
			{
				id: 'Pelda_3',
				name: 'Példa: Hegyesd Tűzveszélyesség ',
				desc: 'Google topográfia, tűzveszélyesség szerinti tematika',
				layers: ['Tűzveszélyesség', 'Erdőrészletek', 'Erdőtagok', 'Erdőtervezési körzetek', 'Erdészeti helységek', 'Erdészeti körzetek', 'Kormányhivatalok', 'Google Terrain'],
				x: 1949799,
				y: 5933345,
				zoom: 14
			},
			{
				id: 'Pollen',
				name: 'Pollenkoncentráció a Bükkben áprilisban',
				desc: 'Google topográfia, tűzveszélyesség szerinti tematika',
				layers: ['Áprilils pollenkoncentráció', 'Erdőrészletek', 'Erdőtagok', 'Erdészeti helységek', 'Erdőtervezési körzetek', 'Kormányhivatalok', 'Google Hybrid' ],
				x: 2242424,
				y: 6119700,
				zoom: 15
			}
		];
		
		
Ext.namespace("Heron.examples");

/** Create a config for the search panel. This panel may be embedded into the accordion
 * or bound to the "find" button in the toolbar. Here we use the toolbar button.
 */
Heron.examples.searchPanelConfig = {
	xtype: 'hr_searchcenterpanel',
	id: 'hr-searchcenterpanel',
	title: __('Keresés'),
	height: 600,
	hropts: {
		searchPanel: {
			xtype: 'hr_formsearchpanel',
			header: false,
			border: false,
			bodyStyle: 'padding: 6px',
			style: {
				fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
				fontSize: '12px'
			},
			protocol: new OpenLayers.Protocol.WFS({
				version: "1.1.0",
				url: ['https://erdoterkep.nebih.gov.hu/geoserver/nebih/wfs??','https://erdoterkep.nebih.gov.hu/geoserver/nebih/wfs?'],
				srsName: "EPSG:900913",
				//projection: "EPSG:23700",
				featureType: "KUL_RESZLET_VW",
				//featureNS: "http://www.nebhih.gov.hu/",
				geometryName: "ALAKZAT"
			}),srsName: "EPSG:900913",
			items: [
				{
					xtype: "textfield",
					name: "KERES__like",
					emptyText: 'Dudar 1/A',
					//value: 'Dudar 1/A',
					fieldLabel: "Részlet:"
				},
				{
					xtype: "label",
					id: "helplabel",
					html: 'Kérem írja be a részlet természetes azonosítóját!<br/>Ha csak tag-ra szerene keresni a szám után tegyen / -jelet!<br/><br/><en>Dupla kattintás=Nagyítás<br/><br/><br/><strong>Csak az első 50db részlet jelenik meg a listában</strong><br/>',
					style: {
						fontSize: '10px',
						color: '#000000'
					}
				}
			],
			hropts: {
                onSearchCompleteZoom: 10,
				autoWildCardAttach: true,
				caseInsensitiveMatch: true,
				logicalOperator: OpenLayers.Filter.Logical.AND,
                statusPanelOpts: {
                    html: '&nbsp;',
                    height: 'auto',
                    preventBodyReset: true,
                    bodyCfg: {
                        style: {
                            padding: '6px',
                            border: '0px'
                        }
                    },
                    style: {
                        marginTop: '2px',
                        paddingTop: '2px',
                        fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                        fontSize: '11px',
                        color: '#0000C0'
                    }
                }
            }
		},
		resultPanel: {
			xtype: 'hr_featselgridpanel',
			id: 'hr-featselgridpanel',
			title: __('Keresés'),
			header: false,
			columns: [
				{
					header: "Részlet",
					width: 200,
					dataIndex: "KERES",
					type: 'string'
				},
				{
					header: "Tulajdonforma",
					width: 100,
					dataIndex: "TULF",
					type: 'string'
				}
			],
			hropts: {
				showTopToolbar: false,
				zoomOnRowDoubleClick : true,
				zoomOnFeatureSelect : false,
				zoomLevelPointSelect : 8
			}
		}
	}
};

Heron.options.map.toolbar.push({type: "-"});

Heron.options.map.toolbar.push(
		{
			type: "searchcenter",
			// Options for SearchPanel window
			options : {
				searchWindow : {
					title: undefined,
					x: 100,
					y: undefined,
					width: 320,
					height: 400,
					items: [
					  Heron.examples.searchPanelConfig
					]
				}
			}
		}
);		
