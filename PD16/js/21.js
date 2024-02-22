function square(aukstis,ilgis,plotis, sqrt){
    calculation = sqrt(aukstis,ilgis,plotis);
    return 'squareroot ' + calculation + ' m^3';
}
function sqrt(aukstis,ilgis,plotis){
    var plotas = aukstis * ilgis * plotis;
    return plotas;
}
console.log(squarea(2,3,4,sqrt));

