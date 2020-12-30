var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reseaux_1 = new ol.format.GeoJSON();
var features_Reseaux_1 = format_Reseaux_1.readFeatures(json_Reseaux_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reseaux_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reseaux_1.addFeatures(features_Reseaux_1);
var lyr_Reseaux_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reseaux_1, 
                style: style_Reseaux_1,
                interactive: true,
                title: '<img src="styles/legend/Reseaux_1.png" /> Reseaux'
            });
var format_Chambres_2 = new ol.format.GeoJSON();
var features_Chambres_2 = format_Chambres_2.readFeatures(json_Chambres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chambres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chambres_2.addFeatures(features_Chambres_2);
var lyr_Chambres_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chambres_2, 
                style: style_Chambres_2,
                interactive: true,
                title: '<img src="styles/legend/Chambres_2.png" /> Chambres'
            });
var group_Map = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Reseaux_1,lyr_Chambres_2,],
                                title: "Map"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Reseaux_1.setVisible(true);lyr_Chambres_2.setVisible(true);
var layersList = [group_Map];
lyr_Reseaux_1.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'level': 'level', 'color': 'color', 'linewidth': 'linewidth', });
lyr_Chambres_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', });
lyr_Reseaux_1.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'level': 'TextEdit', 'color': 'TextEdit', 'linewidth': 'TextEdit', });
lyr_Chambres_2.set('fieldImages', {'id': '', 'fid': '', });
lyr_Reseaux_1.set('fieldLabels', {});
lyr_Chambres_2.set('fieldLabels', {});
lyr_Chambres_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});