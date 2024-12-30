var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KabupatenPoso_1 = new ol.format.GeoJSON();
var features_KabupatenPoso_1 = format_KabupatenPoso_1.readFeatures(json_KabupatenPoso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenPoso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenPoso_1.addFeatures(features_KabupatenPoso_1);
var lyr_KabupatenPoso_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenPoso_1, 
                style: style_KabupatenPoso_1,
                popuplayertitle: 'Kabupaten Poso',
                interactive: true,
                title: '<img src="styles/legend/KabupatenPoso_1.png" /> Kabupaten Poso'
            });
var format_SitusMegalitikdiLembahNapu_2 = new ol.format.GeoJSON();
var features_SitusMegalitikdiLembahNapu_2 = format_SitusMegalitikdiLembahNapu_2.readFeatures(json_SitusMegalitikdiLembahNapu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitusMegalitikdiLembahNapu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitusMegalitikdiLembahNapu_2.addFeatures(features_SitusMegalitikdiLembahNapu_2);
var lyr_SitusMegalitikdiLembahNapu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitusMegalitikdiLembahNapu_2, 
                style: style_SitusMegalitikdiLembahNapu_2,
                popuplayertitle: 'Situs Megalitik di Lembah Napu',
                interactive: true,
                title: '<img src="styles/legend/SitusMegalitikdiLembahNapu_2.png" /> Situs Megalitik di Lembah Napu'
            });
var format_SitusMegalitikdiLembahBada_3 = new ol.format.GeoJSON();
var features_SitusMegalitikdiLembahBada_3 = format_SitusMegalitikdiLembahBada_3.readFeatures(json_SitusMegalitikdiLembahBada_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitusMegalitikdiLembahBada_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitusMegalitikdiLembahBada_3.addFeatures(features_SitusMegalitikdiLembahBada_3);
var lyr_SitusMegalitikdiLembahBada_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitusMegalitikdiLembahBada_3, 
                style: style_SitusMegalitikdiLembahBada_3,
                popuplayertitle: 'Situs Megalitik di Lembah Bada',
                interactive: true,
                title: '<img src="styles/legend/SitusMegalitikdiLembahBada_3.png" /> Situs Megalitik di Lembah Bada'
            });
var format_SitusMegalitikdiLembahBehoa_4 = new ol.format.GeoJSON();
var features_SitusMegalitikdiLembahBehoa_4 = format_SitusMegalitikdiLembahBehoa_4.readFeatures(json_SitusMegalitikdiLembahBehoa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitusMegalitikdiLembahBehoa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitusMegalitikdiLembahBehoa_4.addFeatures(features_SitusMegalitikdiLembahBehoa_4);
var lyr_SitusMegalitikdiLembahBehoa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitusMegalitikdiLembahBehoa_4, 
                style: style_SitusMegalitikdiLembahBehoa_4,
                popuplayertitle: 'Situs Megalitik di Lembah Behoa',
                interactive: true,
                title: '<img src="styles/legend/SitusMegalitikdiLembahBehoa_4.png" /> Situs Megalitik di Lembah Behoa'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KabupatenPoso_1.setVisible(true);lyr_SitusMegalitikdiLembahNapu_2.setVisible(true);lyr_SitusMegalitikdiLembahBada_3.setVisible(true);lyr_SitusMegalitikdiLembahBehoa_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KabupatenPoso_1,lyr_SitusMegalitikdiLembahNapu_2,lyr_SitusMegalitikdiLembahBada_3,lyr_SitusMegalitikdiLembahBehoa_4];
lyr_KabupatenPoso_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SitusMegalitikdiLembahNapu_2.set('fieldAliases', {'No.': 'No.', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Koordinat': 'Koordinat', 'Temuan': 'Temuan', 'Foto': 'Foto', 'Link web': 'Link web', 'Ketinggian': 'Ketinggian', });
lyr_SitusMegalitikdiLembahBada_3.set('fieldAliases', {'No.': 'No.', 'Nama': 'Nama', });
lyr_SitusMegalitikdiLembahBehoa_4.set('fieldAliases', {'No.': 'No.', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Temuan': 'Temuan', 'Ketinggian': 'Ketinggian', 'Foto': 'Foto', 'link web': 'link web', 'Koordinat': 'Koordinat', });
lyr_KabupatenPoso_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SitusMegalitikdiLembahNapu_2.set('fieldImages', {'No.': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Koordinat': 'TextEdit', 'Temuan': 'TextEdit', 'Foto': 'ExternalResource', 'Link web': 'TextEdit', 'Ketinggian': 'TextEdit', });
lyr_SitusMegalitikdiLembahBada_3.set('fieldImages', {'No.': 'TextEdit', 'Nama': 'TextEdit', });
lyr_SitusMegalitikdiLembahBehoa_4.set('fieldImages', {'No.': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'Temuan': 'TextEdit', 'Ketinggian': 'TextEdit', 'Foto': 'ExternalResource', 'link web': 'TextEdit', 'Koordinat': '', });
lyr_KabupatenPoso_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SitusMegalitikdiLembahNapu_2.set('fieldLabels', {'No.': 'no label', 'Nama': 'inline label - visible with data', 'Alamat': 'no label', 'Koordinat': 'no label', 'Temuan': 'no label', 'Foto': 'no label', 'Link web': 'no label', 'Ketinggian': 'no label', });
lyr_SitusMegalitikdiLembahBada_3.set('fieldLabels', {'No.': 'no label', 'Nama': 'inline label - visible with data', });
lyr_SitusMegalitikdiLembahBehoa_4.set('fieldLabels', {'No.': 'no label', 'Nama': 'inline label - visible with data', 'Alamat': 'no label', 'Temuan': 'no label', 'Ketinggian': 'no label', 'Foto': 'no label', 'link web': 'no label', 'Koordinat': 'no label', });
lyr_SitusMegalitikdiLembahBehoa_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});