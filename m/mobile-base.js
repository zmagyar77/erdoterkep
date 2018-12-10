
// initialize map when page ready
var map;
var gg = new OpenLayers.Projection("EPSG:4326");
var sm = new OpenLayers.Projection("EPSG:900913");

var init = function (onSelectFeatureFunction) {

    var vector = new OpenLayers.Layer.Vector("Az Ön helyzete", {});

    var geolocate = new OpenLayers.Control.Geolocate({
        id: 'locate-control',
        geolocationOptions: {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 7000
        }
    });
	

		
    // create map
    map = new OpenLayers.Map({
        div: "map",
        theme: null,
        projection: sm,
        units: "m",
        numZoomLevels: 18,
		center:  new OpenLayers.LonLat(2144000, 5982500),
		zoom: 8,
        /*maxResolution: 156543.0339,
        maxExtent: new OpenLayers.Bounds(
            1778000, 5726000,  2563400, 6217700
        ),*/
        controls: [
            new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.TouchNavigation({
                dragPanOptions: {
                    enableKinetic: true
                }
            }),
            geolocate
        ],
        layers: [
		
		OSM_outdoors = new OpenLayers.Layer.OSM(
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
			
			new OpenLayers.Layer.Bing({
                key: 'Atne0rjM97lD1nw1x-YqyP0-lX_NkL6sjfRr7B_GRtYFlnRVTy1kvQtePIb23vya',
                type: "AerialWithLabels",
                name: "Bing Aerial + cimkék",
                transitionEffect: 'resize'
            }),
			/*
			
            SatView = new OpenLayers.Layer.Google(
		"Google Satellite",
		{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 22},
		{singleTile: false, buffer: 0, isBaseLayer: true, transitionEffect: 'resize', alpha:0}
		),
		
			Hybrid = new OpenLayers.Layer.Google(
		"Google Hybrid", 
		{type: google.maps.MapTypeId.HYBRID, numZoomLevels: 22},
		{singleTile: false, buffer: 0, isBaseLayer: true, transitionEffect: 'resize', alpha:0}
		),

            Terrain = new OpenLayers.Layer.Google(
		"Google Terrain",
		{type: google.maps.MapTypeId.ROADMAP, numZoomLevels: 16},
		{singleTile: false, buffer: 0, isBaseLayer: true, transitionEffect: 'resize', alpha:0}
		),
            */
			
		
			igazgatosagok = new OpenLayers.Layer.WMS(
                    "Kormányhivatalok", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_IGG',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
			korzetek = new OpenLayers.Layer.WMS(
                    "Erdőtervezési körzetek", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'MV_KORZETEK',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),

                // setup single tiled layer
			helysegek = new OpenLayers.Layer.WMS(
                    "Erdészeti helységek", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'MV_HELYSEGEK',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),


                // setup single tiled layer
			reszletek = new OpenLayers.Layer.WMS(
                    "Erdőrészletek", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_RESZLET_VW',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
				
				// setup single tiled layer
			tag = new OpenLayers.Layer.WMS(
                    "Erdőtagok", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_TAG',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
			letesitmeny_regi = new OpenLayers.Layer.WMS(
                    "Régi közjóléti létesítmények", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KJ_LET_REGI_XE',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
			letesitmeny_uj = new OpenLayers.Layer.WMS(
                    "Új közjóléti létesítmények", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KJ_LET_UJ_XE',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
			rendeltetes = new OpenLayers.Layer.WMS(
                    "Elsődleges rendeltetés", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_RESZLET_VW',
						styles: 'rendeltetes',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
				                // setup single tiled layer
                natura = new OpenLayers.Layer.WMS(
                    "Natura2000", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_RESZLET_VW',
						styles: 'natura',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
				                // setup single tiled layer
                tulforma = new OpenLayers.Layer.WMS(
                    "Tulajdonforma", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_RESZLET_VW',
						styles: 'tulforma',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
				
				                // setup single tiled layer
                tuzveszely = new OpenLayers.Layer.WMS(
                    "Tűzveszélyesség", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_RESZLET_VW',
						styles: 'tuzveszely',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),

								                // setup single tiled layer
                vedettseg = new OpenLayers.Layer.WMS(
                    "Védettség", "https://erdoterkep.nebih.gov.hu/geoserver/nebih/wms",
                    {
                        layers: 'KUL_RESZLET_VW',
						styles: 'vedettseg',
                        srs: 'EPSG:23700',
                        format: 'image/png8',
                        transparent: 'TRUE'
                    },
                    {singleTile: true, ratio: 1}
                ),
			
			
            vector
        ]
    });
	
	letesitmeny_regi.setVisibility(false);
	letesitmeny_uj.setVisibility(false);
	rendeltetes.setVisibility(false);
	tulforma.setVisibility(false);
	vedettseg.setVisibility(false);
	natura.setVisibility(false);
	tuzveszely.setVisibility(false);
	

	
    var style = {
        fillOpacity: 0.1,
        fillColor: '#000',
        strokeColor: '#f00',
        strokeOpacity: 0.6
    };
    geolocate.events.register("locationupdated", this, function(e) {
        vector.removeAllFeatures();
        vector.addFeatures([
            new OpenLayers.Feature.Vector(
                e.point,
                {},
                {
                    graphicName: 'cross',
                    strokeColor: '#f00',
                    strokeWidth: 2,
                    fillOpacity: 0,
                    pointRadius: 10
                }
            ),
            new OpenLayers.Feature.Vector(
                OpenLayers.Geometry.Polygon.createRegularPolygon(
                    new OpenLayers.Geometry.Point(e.point.x, e.point.y),
                    e.position.coords.accuracy / 2,
                    50,
                    0
                ),
                {},
                style
            )
        ]);
        map.zoomToExtent(vector.getDataExtent());
    });

    

    }


