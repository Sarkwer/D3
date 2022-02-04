var TemperatureLogic = function () {

    var tempcsv = "timestamp,temperature\n\
2015-03-20T21:00:00.000Z,23.9516625615764\n\
2015-03-20T22:00:00.000Z,23.0728888291688\n\
2015-03-20T23:00:00.000Z,22.2708190476318\n\
2015-03-21T00:00:00.000Z,21.3394373423804\n\
2015-03-21T01:00:00.000Z,20.1010743049325\n\
2015-03-21T02:00:00.000Z,18.4150717551479\n\
2015-03-21T03:00:00.000Z,17.7483817583905\n\
2015-03-21T04:00:00.000Z,17.6589726749868\n\
2015-03-21T05:00:00.000Z,17.0922334804965\n\
2015-03-21T06:00:00.000Z,17.9022626474071\n\
2015-03-21T07:00:00.000Z,17.9134315019288\n\
2015-03-21T08:00:00.000Z,17.9623415917395\n\
2015-03-21T09:00:00.000Z,18.6299049947767\n\
2015-03-21T10:00:00.000Z,18.7246461115231\n\
2015-03-21T11:00:00.000Z,18.3452032121395\n\
2015-03-21T12:00:00.000Z,17.9509405148159\n\
2015-03-21T13:00:00.000Z,17.6459367384257\n\
2015-03-21T14:00:00.000Z,18.0026108196051\n\
2015-03-21T15:00:00.000Z,18.6413944821435\n\
2015-03-21T16:00:00.000Z,19.3671431509997\n\
2015-03-21T17:00:00.000Z,20.8082012083461\n\
2015-03-21T18:00:00.000Z,22.5238576663828\n\
2015-03-21T19:00:00.000Z,24.4214051463704\n\
2015-03-21T20:00:00.000Z,26.2049693716955\n\
2015-03-21T21:00:00.000Z,26.579802484894\n\
2015-03-21T22:00:00.000Z,26.5525094442272\n\
2015-03-21T23:00:00.000Z,23.9758724990251\n\
2015-03-22T00:00:00.000Z,20.7705334007582\n\
2015-03-22T01:00:00.000Z,19.5826361563267\n\
2015-03-22T02:00:00.000Z,18.7265399946616\n\
2015-03-22T03:00:00.000Z,18.2886029132647\n\
2015-03-22T04:00:00.000Z,17.4904771411586\n\
2015-03-22T05:00:00.000Z,17.1831430954037\n\
2015-03-22T06:00:00.000Z,17.2898856656444\n\
2015-03-22T07:00:00.000Z,17.8578100360021\n\
2015-03-22T08:00:00.000Z,18.1992192220978\n\
2015-03-22T09:00:00.000Z,18.13420905954\n\
2015-03-22T10:00:00.000Z,18.5888149684944\n\
2015-03-22T11:00:00.000Z,18.6733003026984\n\
2015-03-22T12:00:00.000Z,19.1600833190036\n\
2015-03-22T13:00:00.000Z,19.207095797011\n\
2015-03-22T14:00:00.000Z,18.9847082241235\n\
2015-03-22T15:00:00.000Z,19.4293802064908\n\
2015-03-22T16:00:00.000Z,20.8493124700409\n\
2015-03-22T17:00:00.000Z,21.5898145184046\n\
2015-03-22T18:00:00.000Z,22.3397182467298\n\
2015-03-22T19:00:00.000Z,22.7891858876349\n\
2015-03-22T20:00:00.000Z,23.3412628564144\n\
2015-03-22T21:00:00.000Z,23.4926420057589\n\
2015-03-22T22:00:00.000Z,23.0962283240861\n\
2015-03-22T23:00:00.000Z,22.2667502918227\n\
2015-03-23T00:00:00.000Z,21.0266142557277\n\
2015-03-23T01:00:00.000Z,20.0093349857605\n\
2015-03-23T02:00:00.000Z,18.9851414732381\n\
2015-03-23T03:00:00.000Z,18.5245615004214\n\
2015-03-23T04:00:00.000Z,18.290694254732\n\
2015-03-23T05:00:00.000Z,18.0595508666643\n\
2015-03-23T06:00:00.000Z,18.4732789951039\n\
2015-03-23T07:00:00.000Z,18.7258481532495\n\
2015-03-23T08:00:00.000Z,18.5595128641976\n\
2015-03-23T09:00:00.000Z,18.179674037842\n\
2015-03-23T10:00:00.000Z,17.7681299392415\n\
2015-03-23T11:00:00.000Z,17.443021321053\n\
2015-03-23T12:00:00.000Z,17.3451205175492\n\
2015-03-23T13:00:00.000Z,17.4374701133724\n\
2015-03-23T14:00:00.000Z,17.8929191631296\n\
2015-03-23T15:00:00.000Z,18.9122039984753\n\
2015-03-23T16:00:00.000Z,19.6161969984469\n\
2015-03-23T17:00:00.000Z,20.7299868156002\n\
2015-03-23T18:00:00.000Z,21.7689130719553\n\
2015-03-23T19:00:00.000Z,22.5533898355016\n\
2015-03-23T20:00:00.000Z,22.8372668296634\n\
2015-03-23T21:00:00.000Z,23.2014773800322\n\
2015-03-23T22:00:00.000Z,22.5682062882985\n\
2015-03-23T23:00:00.000Z,22.3205675513796\n\
2015-03-24T00:00:00.000Z,20.8661118605035\n\
2015-03-24T01:00:00.000Z,18.5360183512352\n\
2015-03-24T02:00:00.000Z,17.5156724451801\n\
2015-03-24T03:00:00.000Z,17.2066897483676\n\
2015-03-24T04:00:00.000Z,17.1974604599623\n\
2015-03-24T05:00:00.000Z,17.3377835934013\n\
2015-03-24T06:00:00.000Z,17.28662295757\n\
2015-03-24T07:00:00.000Z,17.4291104924263\n\
2015-03-24T08:00:00.000Z,17.4228793012653\n\
2015-03-24T09:00:00.000Z,17.4209561166271\n\
2015-03-24T10:00:00.000Z,17.141757829703\n\
2015-03-24T11:00:00.000Z,17.3048584589793\n\
2015-03-24T12:00:00.000Z,17.337482794781\n\
2015-03-24T13:00:00.000Z,17.7016509341158\n\
2015-03-24T14:00:00.000Z,17.5637528905341\n\
2015-03-24T15:00:00.000Z,18.8276163388499\n\
2015-03-24T16:00:00.000Z,19.4404648699534\n\
2015-03-24T17:00:00.000Z,20.5646049670802\n\
2015-03-24T18:00:00.000Z,21.9525507884113\n\
2015-03-24T19:00:00.000Z,21.9040221846194\n\
2015-03-24T20:00:00.000Z,22.8197541616282\n\
2015-03-24T21:00:00.000Z,22.2390831913042\n\
2015-03-24T22:00:00.000Z,22.4688244906963\n\
2015-03-24T23:00:00.000Z,21.9461828791739\n\
2015-03-25T00:00:00.000Z,21.3218883084538\n\
2015-03-25T01:00:00.000Z,19.9688738415096\n\
2015-03-25T02:00:00.000Z,18.9409031033049\n\
2015-03-25T03:00:00.000Z,18.1829931467353\n\
2015-03-25T04:00:00.000Z,17.6071132686007\n\
2015-03-25T05:00:00.000Z,17.4155712472229\n\
2015-03-25T06:00:00.000Z,17.8112238813252\n\
2015-03-25T07:00:00.000Z,18.0118371454174\n\
2015-03-25T08:00:00.000Z,17.9925110740977\n\
2015-03-25T09:00:00.000Z,17.9146107460869\n\
2015-03-25T10:00:00.000Z,17.6354297651737\n\
2015-03-25T11:00:00.000Z,17.2990959392658\n\
2015-03-25T12:00:00.000Z,16.8942534144482\n\
2015-03-25T13:00:00.000Z,17.0215911252788\n\
2015-03-25T14:00:00.000Z,17.5370547200027\n\
2015-03-25T15:00:00.000Z,19.6239569219906\n\
2015-03-25T16:00:00.000Z,21.4284862546897\n\
2015-03-25T17:00:00.000Z,22.5971622932944\n\
2015-03-25T18:00:00.000Z,24.4516364021043\n\
2015-03-25T19:00:00.000Z,26.314179825294\n\
2015-03-25T20:00:00.000Z,27.2966725797272\n\
2015-03-25T21:00:00.000Z,27.8594008881709\n\
2015-03-25T22:00:00.000Z,26.98771523591\n\
2015-03-25T23:00:00.000Z,26.1419652896808\n\
2015-03-26T00:00:00.000Z,24.2967135065912\n\
2015-03-26T01:00:00.000Z,21.2627783997077\n\
2015-03-26T02:00:00.000Z,19.6223366524463\n\
2015-03-26T03:00:00.000Z,18.9702936572059\n\
2015-03-26T04:00:00.000Z,18.64173108115\n\
2015-03-26T05:00:00.000Z,18.5430028446263\n\
2015-03-26T06:00:00.000Z,18.2597209484404\n\
2015-03-26T07:00:00.000Z,17.8251835175158\n\
2015-03-26T08:00:00.000Z,17.4726877440558\n\
2015-03-26T09:00:00.000Z,17.651946077925\n\
2015-03-26T10:00:00.000Z,17.7491791888976\n\
2015-03-26T11:00:00.000Z,17.5917881825657\n\
2015-03-26T12:00:00.000Z,17.5239416379086\n\
2015-03-26T13:00:00.000Z,17.5307201091079\n\
2015-03-26T14:00:00.000Z,18.2489964460844\n\
2015-03-26T15:00:00.000Z,20.2797517883074\n\
2015-03-26T16:00:00.000Z,21.888709612845\n\
2015-03-26T17:00:00.000Z,23.8693783046019\n\
2015-03-26T18:00:00.000Z,25.6434924437705\n\
2015-03-26T19:00:00.000Z,27.3338701714523\n\
2015-03-26T20:00:00.000Z,30.235307632747\n\
2015-03-26T21:00:00.000Z,31.6784014189275\n\
2015-03-26T22:00:00.000Z,32.4243323492878\n\
2015-03-26T23:00:00.000Z,33.1688980688728\n\
2015-03-27T00:00:00.000Z,30.8713221141196\n\
2015-03-27T01:00:00.000Z,26.8944097638179\n\
2015-03-27T02:00:00.000Z,24.6128150483182\n\
2015-03-27T03:00:00.000Z,22.889746429207\n\
2015-03-27T04:00:00.000Z,21.7148736202902\n\
2015-03-27T05:00:00.000Z,20.8438711038614\n\
2015-03-27T06:00:00.000Z,19.2559699722154\n\
2015-03-27T07:00:00.000Z,18.337368653838\n\
2015-03-27T08:00:00.000Z,17.6177708093268\n\
2015-03-27T09:00:00.000Z,17.1977444392481\n\
2015-03-27T10:00:00.000Z,16.7043132969425\n\
2015-03-27T11:00:00.000Z,16.2471811295094\n\
2015-03-27T12:00:00.000Z,16.087861898997\n\
2015-03-27T13:00:00.000Z,15.6362635324538\n\
2015-03-27T14:00:00.000Z,15.692528763157\n\
2015-03-27T15:00:00.000Z,16.1186855064984\n\
2015-03-27T16:00:00.000Z,17.3886258325874\n\
2015-03-27T17:00:00.000Z,18.2540910121364\n\
2015-03-27T18:00:00.000Z,19.5148327389508\n\
2015-03-27T19:00:00.000Z,20.6023266315466\n\
2015-03-27T20:00:00.000Z,21.3854066767194\n\
2015-03-27T21:00:00.000Z,21.9084983994613"


    var div = ".ChartDiv4";


    var margin = { top: 20, right: 15, bottom: 65, left: 80 },
        width = { min: 0, max: 935 },
        height = { min: 0, max: 350 },
        innermaxwidth = width.max - margin.left - margin.right,
        innermaxheight = height.max - margin.top - margin.bottom,
        xcol = "time",
        ycol = "temp",
        xAxisLabelText = "Time",
        xAxisLabelOffset = height.max - 20,
        yAxisLabelText = "Temperature °C",
        yAxisLabelOffset = 45,
        //temp mark control object
        Mark1 = {},
        Mark2 = {}

    // draw in svg
    var svg = d3.select(div).append("svg")
        .attr("class", "CanvasSVG")
        .attr("width", width.max)
        .attr("height", height.max);



    var _trans = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


    // rec that will clip the line chart
    _trans.append("clipPath")
        .attr("id", "clipclass")
        .append("rect")
        .attr("x", width.min)
        .attr("y", height.min)
        .attr("width", innermaxwidth)
        .attr("height", innermaxheight);




    //draw axys and labels

    var xAxisG = _trans.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + innermaxheight + ")");

    // xscale Title
    var xAxisLabel = _trans.append("text")
        .attr("class", "axis_label")
        .style("text-anchor", "middle")
        .attr("transform", "translate(" + (innermaxwidth / 2) + "," + xAxisLabelOffset + ")")
        .text(xAxisLabelText);

    // xScale Line
    var xAxisLine = _trans
        .append("g")
        .append("rect")
        .attr("class", "dotted")
        .attr("stroke-width", "1px")
        .attr("width", "0.5px")
        .attr("height", innermaxheight)


    var yAxisG = _trans.append("g")
        .attr("class", "y axis");

    //yScale Title 
    var yAxisLabel = _trans.append("text")
        .attr("class", "axis_label")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innermaxheight / 2) + ") rotate(-90)")
        .text(yAxisLabelText);

    //yScale Line    
    var yAxisLine = _trans
        .append("g")
        .append("rect")
        .attr("class", "dotted")
        .attr("stroke-height", "1px")
        .attr("height", "0.5px")
        .attr("width", innermaxwidth)
        .on('click', mouseclick)
        .attr("clip-path", "url(#clipclass)");



    // Mark Temp   
    var xTempMark1 = _trans
        .append("g")
        .append("rect")
        .attr("class", "dotted")
        .attr("stroke-width", "1px")
        .attr("stroke", "orange")
        .attr("width", "0.5px")
        .attr("height", innermaxheight)
        .style("opacity", 0)
        .attr("clip-path", "url(#clipclass)");


    var xTempMark2 = _trans
        .append("g")
        .append("rect")
        .attr("class", "dotted")
        .attr("stroke-width", "1px")
        .attr("stroke", "red")
        .attr("width", "0.5px")
        .attr("height", innermaxheight)
        .style("opacity", 0)
        .attr("clip-path", "url(#clipclass)");

    //tooltip

    var focus = svg
        .append('g')
        .append('circle')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .style("fill", "black")
        .attr("stroke", "black")
        .attr('r', 3)
        .style("opacity", 0)
        .attr("clip-path", "url(#clipclass)");


    var xFocusText = _trans
        .append('g')
        .append('text')
        .attr("class", "focusTextRect")
        .style("opacity", 0)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")


    var yFocusText = _trans
        .append('g')
        .append('text')
        .attr("class", "focusTextRect")
        .style("opacity", 0)
        .attr("text-anchor", "right")
        .attr("alignment-baseline", "middle")







    // this rect will create a area that will capture mouse events inside
    var rectMouseEvent = svg
        .append('rect')
        .attr("transform", "translate(" + margin.left + ",0)")
        .style("fill", "none")
        .style("pointer-events", "all")
        .attr("class", "rectMouseControler")
        .attr("width", innermaxwidth)
        .attr("height", height.max - margin.bottom)
        .on('dblclick', mousedoubleclick)
        .on('mouseover', mouseover)
        .on('mousemove', mousemove)
        .on('mouseout', mouseout)
        .on('click', mouseclick)



    // line
    var Linepath = _trans.append("path")
        .attr("clip-path", "url(#clipclass)");




    //scale
    var xScale = d3.scaleTime().range([width.min, innermaxwidth]),
        xScaleRescale = xScale,
        yScale = d3.scaleLinear().range([innermaxheight, height.min]),
        yScaleRescale = yScale,
        xAxis = d3.axisBottom().scale(xScale),
        yAxis = d3.axisLeft().scale(yScale)

    //xgrid Lines
    var xGrid = _trans.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + innermaxheight + ")")

    //yGridLines
    var yGrid = _trans.append("g")
        .attr("class", "grid")


    //zoom  && Pan
    var zoomfunction = function (event) {

        xScaleRescale = event.transform.rescaleX(xScale);
        yScaleRescale = event.transform.rescaleY(yScale);
        xAxis = d3.axisBottom(xScaleRescale)
        yAxis = d3.axisLeft(yScaleRescale)

        //Redraw Chart
        renderLineChart(dataparce, xScaleRescale, yScaleRescale)
        redrawFocuslanes(event)
        // Reset any setting for temp calculations~
        repositionmarks(xScaleRescale)


    }

    //zoom
    var zoom = d3.zoom()
        .scaleExtent([0.8, 5])
        .translateExtent([[0, 0], [width.max - margin.left - margin.right, height.max - margin.top - margin.bottom]])
        .extent([[0, 0], [width.max - margin.left - margin.right, height.max - margin.top - margin.bottom]])
        .on("zoom", zoomfunction);

    svg.call(zoom)



    renderLineChart = function (_data, _xScale, _yScale, _xAxis, _yAxis) {
        //Default values
        _xScale = _xScale || xScale
        _yScale = _yScale || yScale
        _xAxis = _xAxis || xAxis
        _yAxis = _yAxis || yAxis

        //Draw Axis
        xAxisG
            .call(_xAxis)

        yAxisG
            .call(_yAxis)
        //.ticks(5, "0f");

        //Draw Grids
        xGrid.call(make_x_axis()
            .tickSize(-innermaxheight, 0, 0)
            .tickFormat("")
        )

        yGrid.call(make_y_axis()
            .tickSize(-innermaxwidth, 0, 0)
            .tickFormat("")
        )

        //Draw Line
        _line = d3.line()
            .curve(d3.curveCatmullRom)
            .x(function (d) { return _xScale(d[xcol]); })
            .y(function (d) { return _yScale(d[ycol]); });

        Linepath.attr("d", function (d) { return _line(_data) })

    }

    function make_x_axis() {
        return d3.axisBottom()
            .scale(xScaleRescale)
            .ticks(5)
    }

    function make_y_axis() {
        return d3.axisLeft()
            .scale(yScaleRescale)
            .ticks(5)
    }


    var processObject = function (d) {
        var _newObject = {};
        _newObject.time = new Date(d["timestamp"]);
        _newObject.temp = +d["temperature"];

        return _newObject;

    }

    //mouse movement for tooltip

    var bisect = d3.bisector(function (d) { return d[xcol]; }).left;

    function mouseover(event) {

        focus.style("opacity", 1)
        xFocusText.style("opacity", 1)
        yFocusText.style("opacity", 1)
        xAxisLine.style("opacity", 1)
        yAxisLine.style("opacity", 1)
    }

    function mousedoubleclick(event) {
        event.stopPropagation();

    }

    function mousemove(event) {

        redrawFocuslanes(event)
    }

    redrawFocuslanes = function (event) {

        data = dataparce;
        var x0 = xScaleRescale.invert(d3.pointer(event)[0]);
        var i = bisect(data, x0, 1);
        var selectedData = data[i - 1]



        xAxisLine.attr("x", xScaleRescale(x0));
        yAxisLine.attr("y", yScaleRescale(selectedData[ycol]));

        focus
            .attr("cx", xScaleRescale(x0))
            .attr("cy", yScaleRescale(selectedData[ycol]))

        xFocusText
            .html(x0.getDate() + "-" + x0.getMonth() + "-" + x0.getFullYear())
            .attr("x", xScaleRescale(x0))
            .attr("y", 10)

        yFocusText
            .html(Math.round(selectedData[ycol]))
            .attr("x", 0)
            .attr("y", yScaleRescale(selectedData[ycol]))



    }


    function mouseout() {
        focus.style("opacity", 0)
        xFocusText.style("opacity", 0)
        yFocusText.style("opacity", 0)
        xAxisLine.style("opacity", 0)
        yAxisLine.style("opacity", 0)


    }

    function mouseclick(event) {
        data = dataparce;
        var x0 = xScaleRescale.invert(d3.pointer(event)[0]);
        var i = bisect(data, x0, 1);
        var selectedData = data[i - 1]

        var result = setTemps(selectedData[ycol], x0, xScaleRescale, yScaleRescale)

        if (result.iscalc == 1) {

            console.log("Difference of the two values is " + result.temp + "°C. Values reseted")
        }
        else if (result.iscalc == 0) {
            console.log("Value set to " + Math.round(Mark1.temp) + "°C, choose another point.")
        } else {
            console.log("Values reseted")
        }
    }



    resetTemp = function () {
        Mark1.temp = null
        Mark1.time = null
        Mark2.temp = null
        Mark2.time = null
        xTempMark1
            .style("opacity", 0)
        xTempMark2
            .style("opacity", 0)
    }

    repositionmarks = function (_xScale) {

        if (!Mark1.time == false) {
            xTempMark1.attr("x", _xScale(Mark1.time))
        }
        if (!Mark2.time == false) {
            xTempMark2.attr("x", _xScale(Mark2.time))
        }
    }


    setTemps = function (_yValue, _xValue, _xScale, _yScale) {
        var result = {}

        if (Mark1.temp == null) {
            Mark1.temp = _yValue
            Mark1.time = _xValue
            xTempMark1
                .style("opacity", 1)
            repositionmarks(_xScale)
            result.iscalc = 0

        } else if (Mark2.temp == null) {
            Mark2.temp = _yValue
            Mark2.time = _xValue
            xTempMark2
                .style("opacity", 1)
                .attr("x", _xScale(_xValue))
            result.temp = Math.round(Mark2.temp - Mark1.temp)
            result.iscalc = 1


        } else {

            resetTemp()
            result.iscalc = 2
        }


        return result
    }

    //-------------------------------------------- MAIN --------------------------------------------


    var dataparce = d3.csvParse(tempcsv, processObject);
    // Set scale domain after get data
    xScale.domain(GetExtent(dataparce, xcol));
    yScale.domain(GetExtent(dataparce, ycol));
    // Draw chart
    renderLineChart(dataparce);


    //-------------------------------------------- MAIN --------------------------------------------

}

TemperatureLogic();
