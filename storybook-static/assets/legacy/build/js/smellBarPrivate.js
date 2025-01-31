$(document).ready(function() {
    var data = [];
    var values = [];
    var colors = [];
    var index = document.getElementById("smellStats").className;    
    for (i = 1; i <= index; i++) {
        var name = document.getElementById("id-" + i).className;
        var result = name.split(':::');

        data.push(parseFloat(result[1]));
        values.push(result[0]);            
        colors.push(result[2]);
    }

    var barWidth = 30;
    if(window.innerWidth <= 375)
    {
        barWidth = 20;
    }

    $(".pieLoad").hide();
    $.jqplot('pie_observer', [data], {
        animate: !$.jqplot.use_excanvas,
        seriesColors: colors,
        seriesDefaults: {
            shadow: false,
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
                varyBarColor: true,
                barWidth: barWidth,
                barPadding: -10
            },
            pointLabels: {
                show: true,
                formatString: '%s %%'
            }
        },
        axes: {
            xaxis: {
                showTicks: false,
                tickOptions: {
                    showGridline: false
                },
                min: 0,
                max: 9,
                renderer: $.jqplot.CategoryAxisRenderer,
                rendererOptions: {
                    drawBaseline: false
                }
            },
            yaxis: {
                showTicks: false,
                tickOptions: {
                    showGridline: false
                },
                min: 0,
                max: 110,
                rendererOptions: {
                    drawBaseline: false
                }
            }
        },
        legend: {
          show: false,
        } 
    });

    var dataObservatory = [];
    var valuesObservatory = [];
    var colorsObservatory = [];
    var indexObservatory = document.getElementById("smellStatsObservatory").className;    
    for (i = 1; i <= index; i++) {
        var name = document.getElementById("id-observatory-" + i).className;
        var result = name.split(':::');

        dataObservatory.push(parseFloat(result[1]));
        valuesObservatory.push(result[0]);            
        colorsObservatory.push(result[2]);
    }

    $.jqplot('pie_observatory', [dataObservatory], {
        animate: !$.jqplot.use_excanvas,
        seriesColors: colorsObservatory,
        seriesDefaults: {
            shadow: false,
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
                varyBarColor: true,
                barWidth: barWidth,
                barPadding: -5
            },
            pointLabels: {
                show: true,
                formatString: '%s %%'
            }
        },
        axes: {
            xaxis: {
                showTicks: false,
                tickOptions: {
                    showGridline: false
                },
                min: 0,
                max: 9,
                renderer: $.jqplot.CategoryAxisRenderer,
                rendererOptions: {
                    drawBaseline: false
                }
            },
            yaxis: {
                showTicks: false,
                tickOptions: {
                    showGridline: false
                },
                min: 0,
                max: 110,
                rendererOptions: {
                    drawBaseline: false
                }
            }
        },
        legend: {
          show: false,
        } 
    });
    $('.observationsJdrGraph').hide();
});

