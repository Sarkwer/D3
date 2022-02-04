var GetMinMax = function (data, Objekey) {
    if (!Objekey) { Objekey = Object.keys(data[0])[0] };
    var min = d3.min(data, (d) => { return d[Objekey] });
    var max = d3.max(data, (d) => { return d[Objekey] });
    return { min, max }
}

var GetExtent = function (data, Objekey) {
    if (!Objekey) { Objekey = Object.keys(data[0])[0] };
    return d3.extent(data, (d) => { return d[Objekey] });
}

const isValidDate = function(date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

