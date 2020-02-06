var XLSX = require('xlsx');
var ee = require('@google/earthengine');

var workbook = XLSX.readFile('TDdata.xls');
var sheet_name_list = workbook.SheetNames;
console.log("read", sheet_name_list);
// console.log("read sheet 1",XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));
var features = [
    ee.Feature(ee.Geometry.Rectangle(30.01, 59.80, 30.59, 60.15), {name: 'Voronoi'}),
    ee.Feature(ee.Geometry.Point(-73.96, 40.781), {name: 'Thiessen'}),
    ee.Feature(ee.Geometry.Point(6.4806, 50.8012), {name: 'Dirichlet'})
  ];
  
  // Create a FeatureCollection from the list and print it.
  var fromList = ee.FeatureCollection(features);
  console.log(formList);

