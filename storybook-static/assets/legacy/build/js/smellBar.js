$(document).ready(function() {
    var data = [];
    var values = [];
    var colors = [];
    var index = document.getElementById("smellStats").className;    
    for (var i = 1; i <= index; i++) {
        var name = document.getElementById("id-" + i).className;
        var result = name.split(':::');

        data.push(parseFloat(result[1]));
        values.push(result[0]);            
        colors.push(result[2]);
    }

    $(".pieLoad").hide();
    $.jqplot('pie_ode', [data], {
        animate: !$.jqplot.use_excanvas,
        seriesColors: colors,
        seriesDefaults: {
            shadow: false,
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
                varyBarColor: true,
                barWidth: 40,
                barPadding: 5
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
                max: 3,
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
          show: false
        } 
    });
    //Changement de couleurs des pointslabels   
    for (i = 0; i < data.length; i++) {
        var cols = document.getElementsByClassName('jqplot-point-'+ i);
        cols[0].style.color = colors[i];
    }
    
});

