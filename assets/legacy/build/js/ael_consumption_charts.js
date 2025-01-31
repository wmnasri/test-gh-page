
var MONTH_NB = 13;
var RESP_RUPTURE_XXS = 600;
var RESP_RUPTURE_XS = 800;
var RESP_RUPTURE_SM = 1100;

var MONTHS_LIST = ["Janvier", "F&eacute;vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao&ucirc;t", "Septembre", "Octobre", "Novembre", "D&eacute;cembre"];

function drawError(messageErreur){
     $("#apierror_div").html("<p style='text-align:center;'>"+messageErreur+"</p>");
     $("#loadingBoxConsumption").hide();
     $("#list_div").hide();
	 $("#list_div").html("");
     $("#chart_div").hide();
	 $("#chart_div").html("");
     $(".div_chartDetail").hide();
     $("#apierror_div").show();
}


function populateMonthsOptions(cursorInf, cursorSup){
    // Suppression des elements dans le select
    $("#consumptionMonth").html("");

    // Chargement des 13 mois a afficher
    var monthsData = JSON.parse($("#monthData").val());
    var months = new Array();

    $.each(monthsData, function(key, month){
        months.push(month[3]);
    });

    // Creation du select
    var selectedLabel = "";
    var monthsList = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    function monthNameToNum(monthName) {
        var monthNumber = monthsList.indexOf(monthName.toLowerCase());
        return monthNumber + 1;
    }
    for(var i = 0; i< months.length; i++){
        var explodeData = months[i].split(" ");
        var year = explodeData[1];
        var month = monthNameToNum(explodeData[0]);
        if(i + 1 === months.length){
            selectedLabel = 'selected="selected"';
        }
        $("#consumptionMonth").append('<option value="'+month+'-'+year+'" '+selectedLabel+'>'+explodeData[0]+' '+year+'</option>');
    }
}

function selectMonthData(monthData, posInf, posSup){
    var selectTab = new Array();
    for(var i = parseInt(posInf); i < parseInt(posSup); i++){
        selectTab.push(monthData[i]);
    }
    return selectTab;
}

// Fonction qui retourne la somme d'une colonne (tableau de type google visualization)
function getSum(data, column, begin, end){
    var total = 0;
    for (i = begin; i <= end; i++){
        total = total + data.getValue(i, column);
    }
    return total;
}

// Fonction de construction d'un element SVG
function makeSVG(tag, attrs, value) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    el.appendChild(document.createTextNode(value));
    return el;
}

// Fonction qui permet d'obtenir le mois numérique
function getNumMonth(monthLabel){
    for(i = 0;i<MONTHS_LIST.length;i++){
        decodedLabel = MONTHS_LIST[i];
        decodedLabel = decodedLabel.replace("&eacute;","é");
        decodedLabel = decodedLabel.replace("&ucirc;","û");

        if(monthLabel === decodedLabel){
            return i+1;
        }
    }
    return 1;
}

//Fonction de gestion des positionnement des icon facture, en fonction de l'annotation
function setFacturePosition(annotationElement) {
    // Positionnemen de la facture
    if (annotationElement.html().match(/(.*)\+$/)) {
        facturePosition = parseInt(annotationElement.attr("y")) + 24;
        factureElement = makeSVG('text', {'text-anchor': "middle", 'x': annotationElement.attr("x"), 'y': facturePosition, 'font-family': "Arial", 'font-size': "16", 'font-weight': "bold", 'stroke': "none", 'stroke-width': "0", 'fill': "#a4c400"}, "€");
        annotationElement.after(factureElement);
        annotationElement.html(annotationElement.html().replace('+', ''));
    }
}

//Fonction de personnalisation de la tooltip
function customTooltip(jour, consommation, index) {
    return '<p class="ael-consumption-tooltips">' +
            '<br />' + jour + '<br /><strong>' + consommation + 'm3</strong><br/>index : ' + index + '</p>';
}

// Fonction de personnalisation de la position du tooltip
function updateTooltipPosition(margin) {
    currentPosition = parseInt($(".google-visualization-tooltip").css('left'));
    tooltipPosition = currentPosition - margin;
    $(".google-visualization-tooltip").css('left', tooltipPosition + "px");
}

// Fonction de personnalisation de l'annotation
function setAnnotationPosition(pos, val, annotationPosition) {
    $("#chart_div div div svg g g g g text:first-child").each(function() {
        position = parseInt($(this).attr(pos)) + val;
        annotationPosition.push(position);
        $(this).attr(pos, position);
    });
}

// Fonction Utilitaire pour l'affichage sous forme de liste
function addRowInformationDay(rowNum, date, consommation, index) {

    // creation de l'element
    rowClass = "odd";
    if (rowNum % 2 === 0) {
        rowClass = "even";
    }

    var htmlElement = '<div class="ael-conso-' + rowClass + ' row">';
    htmlElement += '<span class="ael-conso-element">';
    htmlElement += date + '</span>';
    htmlElement += '<span class="separator"></span>';
    htmlElement += '<span class="ael-conso-element">';
    htmlElement += '<b style="color:#c00453">' + consommation + ' m3</b></span>';
    htmlElement += '<span class="separator"></span>';
    htmlElement += '<span class="ael-conso-element">';
    htmlElement += 'Relevé : ' + index + '</span></div>';
    // insertion dans le bloc charts
    $("#list_div").append(htmlElement);
}

// Fonction Utilitaire pour l'affichage mensuelle sous forme de liste
function addRowInformationMonth(rowNum, date, consommation, index, mois) {

    // creation de l'element
    rowClass = "even";
    if (rowNum % 2 === 0) {
        rowClass = "odd";
    }

    var htmlElement = '<div class="ael-conso-' + rowClass + ' row ael-month-row" onclick="goToMonthView(\''+mois+'\')">';
    htmlElement += '<span class="ael-conso-element">' + date + '</span>';
    htmlElement += '<span class="separator"></span>';
    htmlElement += '<span class="ael-conso-element">';
    htmlElement += '<b style="color:#c00453">' + consommation + ' m3</b></span>';
    htmlElement += '<span class="separator"></span>';
    htmlElement += '<span class="ael-conso-index">';
    htmlElement += 'Relevé : ' + index + '</span></div>';

    // insertion dans le bloc charts
    $("#list_div").prepend(htmlElement);
}


// Fonction d'affichages des graph
function drawDayList(jsonSource) {

    // Chargement des données exemple
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Jour');
    data.addColumn('number', 'Consommation');
    data.addColumn('number', 'Index');
    //ex: [["02/04/2014",0.181,149.52],["03/04/2014",0.153,149.672]]
    data.addRows(eval(jsonSource));

    // Ajout de l'entete
    var htmlEntete = '';

    $("#list_div").html(htmlEntete);

    // Creation de la liste
    var sum = 0;
    for (var i = 0; i < data.getNumberOfRows(); i++) {
        date = data.getValue(i, 0);
        conso = data.getValue(i, 1);
        index = data.getValue(i, 2);
        addRowInformationDay(i, date, conso, index);

        // Consommation mensuelle totale
        sum += conso;
    }

    // Ajout de l'indicateur de consommation mensuelle
    var consommationLabel = 'Total '+$("#consumptionMonth :selected").text().toLowerCase()+' : <strong style="color:#c00453; font-size: 18px">'+sum.toFixed(3).replace(".", ",")+' m<sup>3</sup></strong>' ;
    $("#p_sum_days").html(consommationLabel);
}

function drawDayMobile(jsonSource) {
    var deviceWidth = $(window).width();

    // Calcul des tailles reponsive
    // Affichage Bar Chart
    if (deviceWidth < RESP_RUPTURE_XXS) {
        chartWidthRatio = 0.87;
        barWidth = 17;
        chartAreaWidth = "70%";
        chartHeigthRatio = 1.1;
    }
    else if (deviceWidth < RESP_RUPTURE_XS) {
        chartWidthRatio = 0.87;
        barWidth = 15.5;
        chartAreaWidth = "90%";
        chartHeigthRatio = 1.1;
    }
    else if (deviceWidth < RESP_RUPTURE_SM) {
        chartWidthRatio = 0.87;
        barWidth = 14;
        chartAreaWidth = "90%";
        chartHeigthRatio = 1.0;
    }

    chartWidth = deviceWidth * chartWidthRatio;
    chartHeigth = 650 * chartHeigthRatio;
    // Sauvegarde des positions des annotations
    var annotationPosition = new Array();
    // Chargement des données
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Jours');
    data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
    data.addColumn('number', 'Consommation');
    data.addColumn({'type': 'string', 'role': 'annotation'});

    //Formater la réponse envoyé par ws:
    //ex: [["02/04/2014",0.181,149.52],["03/04/2014",0.153,149.672]]
    var jsonSourceFormated = [];
    $.each(jsonSource, function(key, val){
        if(parseFloat(val[1]) === 0){
            annotation = "0";
        }else{
            annotation = String(val[1].toFixed(3));
        }
        jsonSourceFormated.push([val[0].substr(0, 2), 'customTooltip("' + val[0] + '",' + val[1] + ',' + val[2] + ')', val[1], annotation]);
    });

    // Suppresion des quotes qui genent ....
    jsonSource = JSON.stringify(jsonSourceFormated).replace(/"custom/g, "custom").replace(/\)"/g,")").replace(/\\/g,"");

    //Format attendu :
    //[["02",customTooltip("02/04/2014",0.181, 149.52),0.181,"0.181"],
    //["03",customTooltip("03/04/2014",0.153, 149.672),0.153,"0.153"]]
    data.addRows(eval(jsonSource));

    // Vue ajout anotation consommation
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }
    ]);
    // Set chart options
    var options = {
        tooltip: {
            isHtml: true
        },
        width: chartWidth,
        height: chartHeigth,
        focusTarget: 'category',
        chartArea: {width: chartAreaWidth, height: '100%'},
        legend: {position: "none"},
        vAxis: {
            textStyle: {
                color: '#404040',
                fontName: 'arial',
                fontSize: 12
            }
        },
        hAxis: {
            textPosition: "none",
            baselineColor: '#ffffff'
        },
        colors: ['#ccecf7', '#000'],
        gridlineColor: '#fff',
        bar: {
            groupWidth: barWidth
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    // Remet en place les annotations au dessus des column bar
    function updateAnnotationPosition() {

        $("#chart_div div div svg g g g g text:first-child").each(function(i) {
            AnnotationPosition = annotationPosition[i];
            $(this).attr("x", AnnotationPosition);
        });

        updateTooltipPosition();
    }

    // Gestion de la position du tooltip
    updateTooltipPosition(32.5);

    // Ajout de l'evenement hover
    google.visualization.events.addListener(chart, 'onmouseover', updateAnnotationPosition);
    google.visualization.events.addListener(chart, 'onmouseout', updateAnnotationPosition);

    // Affichage du graphique
    chart.draw(data, options);

    // Positionnement des annotations
    setAnnotationPosition("x", 45, annotationPosition);

    // Ajout de l'indicateur de de consommation mensuelle
    var sum = getSum(data, 2, 0, data.getNumberOfRows()-1);
    var consommationLabel = 'Total '+$("#consumptionMonth :selected").text().toLowerCase()+' : <strong style="color:#c00453; font-size: 18px">'+sum.toFixed(3)+' m3</strong>' ;
    $("#p_sum_days").html(consommationLabel);
}

function drawDay(jsonSource) {

    chartWidth = 650;
    barWidth = 15;
    // Sauvegarde des positions des annotations
    var annotationPosition = new Array();

    // Chargement des données
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Jours');
    data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
    data.addColumn('number', 'Consommation');

    //Formater la réponse envoyé par ws:
    //ex: [["02/04/2014",0.181,149.52],["03/04/2014",0.153,149.672]]
    var jsonSourceFormated = [];
    $.each(jsonSource, function(key, val){
        jsonSourceFormated.push([val[0].substr(0, 2), 'customTooltip("' + val[0] + '",' + val[1] + ',' + val[2] + ')', val[1]]);
    });

    // Suppresion des quotes qui genent ....
    jsonSource = JSON.stringify(jsonSourceFormated).replace(/"custom/g, "custom").replace(/\)"/g,")").replace(/\\/g,"");

    //Format attendu :
    //[["02",customTooltip("02/04/2014",0.181, 149.52),0.181,"0.181"],
    data.addRows(eval(jsonSource));

    // Set chart options
    var options = {
        tooltip: {
            isHtml: true
        },
        width: chartWidth,
        height: 300,
        focusTarget: 'category',
        chartArea: {width: '90%', height: '90%'},
        legend: {position: "none"},
        vAxis: {
            baselineColor: '#ffffff',
            viewWindow: {
              min: 0.001
            },
            gridlines: {
              count: 3
            },
            textStyle: {
                color: '#686868',
                fontName: 'arial',
                fontSize: 9
            }
        },
        hAxis: {
            textStyle: {
                color: '#686868',
                fontName: 'arial',
                fontSize: 9
            }
        },
        colors: ['#ccecf7', '#000'],
        gridlineColor: '#e8e8e8',
        bar: {
            groupWidth: barWidth
        }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    // Remet en place les annotations au dessus des column bar
    function updateAnnotationPosition() {
        updateTooltipPosition();
    }

    // Gestion de la position du tooltip
    updateTooltipPosition(32.5);
    // Ajout de l'evenement hover
    google.visualization.events.addListener(chart, 'onmouseover', updateAnnotationPosition);
    google.visualization.events.addListener(chart, 'onmouseout', updateAnnotationPosition);
    // Affichage du graphique
    chart.draw(data, options);

    // Ajout de l'indicateur de de consommation mensuelle
    var sum = getSum(data, 2, 0, data.getNumberOfRows()-1);
    var consommationLabel = 'Total '+$("#consumptionMonth :selected").text().toLowerCase()+' : <strong style="color:#c00453; font-size: 18px">'+sum.toFixed(3)+' m3</strong>' ;
    $("#p_sum_days").html(consommationLabel);
}

function drawMonthList(JsonSource) {
    // Chargement des données exemple
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Mois');
    data.addColumn('number', 'Consommation');
    data.addColumn('number', 'Index');
    data.addColumn('string', 'Mois');
    data.addRows(eval(JsonSource));

    // Ajout de l'entete
    $("#list_div").html("");

    // Creation de la liste
    //M11962 Affichage des consommations mensuelles en liste : il manque le premier mois
    for (var i = 0; i < data.getNumberOfRows(); i++) {
        conso = data.getValue(i, 1);
        index = data.getValue(i, 2);
        date = data.getValue(i, 0);
        date = date.charAt(0).toUpperCase() + date.substring(1);
        mois = data.getValue(i, 3);
        addRowInformationMonth(i, date, conso, index, mois);
    }
}

function drawMonth(JsonSource, sumCurrentYear, sumLastYear) {
    var deviceWidth = $(window).width();

    var splitSumLastYear = sumLastYear.split(".");
    var RoundedDecimalPart = 0;
    if ($.trim(splitSumLastYear[1]) != '') {
        RoundedDecimalPart = splitSumLastYear[1].substring(0, 3);
    }
    sumLastYear = splitSumLastYear[0].concat(',', RoundedDecimalPart, ' ');

    var splitSumCurrentYear = sumCurrentYear.split(".");
    var RoundedDecimalPartCY = 0;
    if ($.trim(splitSumCurrentYear[1]) != '') {
        RoundedDecimalPartCY = splitSumCurrentYear[1].substring(0, 3);
    }
    sumCurrentYear = splitSumCurrentYear[0].concat(',', RoundedDecimalPartCY, ' ');

    // Calcul des tailles reponsive
    barLabelAngle = 65;
    chartAreaWidth = "90%";
    viewWindowScaleMax = $("#monthConsumtionMaxValue").val();

    if (deviceWidth < RESP_RUPTURE_XXS) {
        chartWidthRatio = 0.85;
        barWidthRatio = 0.05;
        barLabelAngle = 75;
        chartAreaWidth = "85%";
    }
    else if (deviceWidth < RESP_RUPTURE_XS) {
        chartWidthRatio = 0.85;
        barWidthRatio = 0.04;
    }
    else if (deviceWidth < RESP_RUPTURE_SM) {
        chartWidthRatio = 0.87;
        barWidthRatio = 0.04;
    }
    else {
        deviceWidth = 650;
        chartWidthRatio = 1;
        barWidthRatio = 0.05;
    }

    chartWidth = deviceWidth * chartWidthRatio;
    barWidth = deviceWidth * barWidthRatio;

    // Chargement des données
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Mois');
    data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
    data.addColumn('number', 'Consommation');
    data.addColumn({'type': 'string', 'role': 'date'});
    data.addColumn({'type': 'string', 'role': 'detail'});

    //Format attendu['janv. 13', 10, '10', 1],['févr. 13', 8, '8', 0]]
    var jsonSourceFormated = [];
    $.each(JsonSource, function(key, val){
        jsonSourceFormated.push([String(val[0]), 'customTooltip("' + String(val[3]) + '",' + val[1] + ',' + val[2] + ')' ,val[1], String(val[3]), String(val[2])]);
    });

    // Suppresion des quotes qui genent ....
    JsonSource = JSON.stringify(jsonSourceFormated).replace(/"custom/g, "custom").replace(/\)"/g,")").replace(/\\/g,"");
    data.addRows(eval(JsonSource));

    // Set chart options
    var options = {
        tooltip: {
            isHtml: true
        },
        width: chartWidth,
        height: 350,
        focusTarget: 'category',
        chartArea: {width: chartAreaWidth, height: '70%'},
        legend: {position: "none"},
        vAxis: {
            baselineColor: '#ffffff',
            viewWindow: {
              min: 0.001,
			  max: viewWindowScaleMax
            },
            textStyle: {
                color: '#686868',
                fontName: 'arial',
                fontSize: 9
            }
        },
        hAxis: {
            textStyle: {
                color: '#686868',
                fontName: 'arial',
                fontSize: 12
            },
            showTextEvery: 1,
            gridlines: {count: 13},
            slantedText: true,
            slantedTextAngle: barLabelAngle
        },
        colors: ['#ccecf7', '#000'],
        gridlineColor: '#e8e8e8',
        bar: {
            groupWidth: barWidth
        }
    };

    // Gestion de la position du tooltip
    updateTooltipPosition(32.5);

    // Ajout de l'evenement hover
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

    function onClickBar() {
        if($(window).width() >= RESP_RUPTURE_SM){
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
                goToMonthView(data.getValue(selectedItem.row, 3));
            }
        }
    }

    // Ajout de l'evenement hover
    google.visualization.events.addListener(chart, 'select', onClickBar);

    // Affichage du graphique
    chart.draw(data, options);

    var curr_date = new Date();

    // Ajout de l'indicateur de de consommation mensuelle
    var lastYearConsumption = 'Total '+(curr_date.getFullYear()-1)+' : <strong style="color:#c00453; font-size: 18px">'+sumLastYear+'m<sup>3</sup></strong>';
    var currentYearConsumption = 'Encours '+curr_date.getFullYear()+' : <strong style="color:#0099cc; font-size: 18px">'+sumCurrentYear+'m<sup>3</sup></strong>';

    //$("#div_chartDetail").html("htmlConsommmation");
    $("#p_curr_month").html(currentYearConsumption);
    $("#p_last_month").html(lastYearConsumption);
}

function showDays(){
    // Gestion de l'affichage
    $("#consumptionMonth").show();
    $("#button_day").addClass("consumptionButtonActive");
    $("#button_month").removeClass("consumptionButtonActive");

    // Chargement et affichage des données
    loadDayData();

    // Activation du bouton
    $("#selectedChart").val("day");

    // Affichage des details
    $(".div_monthDetail").hide();
}


function showMonths(){
    // Gestion de l'affichage
    $("#consumptionMonth").hide();
    $("#button_month").addClass("consumptionButtonActive");
    $("#button_day").removeClass("consumptionButtonActive");

    // Chargement et affichage des données
    loadMonthData();

    // Activation du bouton
    $("#selectedChart").val("month");
}

function goToMonthView(dateLabel){
    var dateSelected = dateLabel.split(' ');
    var monthSelected = getNumMonth(dateSelected[0]);

    // Selection du mois
    $('#consumptionMonth').val(monthSelected + '-' + dateSelected[1]);

    $('#button_day').parent().attr('class', 'tab tab-small col-xs-4 col-sm-2');
    $('#button_month').parent().attr('class', 'tab tab-small col-xs-4 col-sm-3 tab-current');


    // Activation de l'onglet
    showDays();
}

            
function moveMonthBack(){
   if($("#monthNavSup").val() > MONTH_NB){
        $("#monthNavInf").val($("#monthNavInf").val() - 1);
        $("#monthNavSup").val($("#monthNavSup").val() - 1);
        loadMonthData();
        $("#div_monthNav a:nth-child(2)").show();

        if($("#monthNavSup").val() <= MONTH_NB){
            $("#div_monthNav a:first-child").hide();
        }

        populateMonthsOptions($("#monthNavInf").val(),$("#monthNavSup").val());          

        return false;
   }
}

function moveMonthNext(){
    if($("#monthNavSup").val() < $("#monthNavMax").val() ){
        $("#monthNavInf").val(parseInt($("#monthNavInf").val()) + 1);
        $("#monthNavSup").val(parseInt($("#monthNavSup").val()) + 1);
        loadMonthData();
        $("#div_monthNav a:first-child").show();

        if($("#monthNavSup").val() >= $("#monthNavMax").val()){
            $("#div_monthNav a:nth-child(2)").hide();
        }

        populateMonthsOptions($("#monthNavInf").val(),$("#monthNavSup").val());

        return false;
    }
}

