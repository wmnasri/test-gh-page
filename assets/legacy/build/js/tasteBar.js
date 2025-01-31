/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {    
	var width = 50;
    if(((screen.width >= 650)&&(screen.width <= 750))||(screen.width <= 450)){
    	width = 45;
    }
    if(screen.width <= 375)
    {
        width = 35;
    }
    var data = [];
    var values = [];
    var colors = [];
    var index = document.getElementById("tasteStats").className;    
    for (i = 1; i <= index; i++) {
        var name = document.getElementById("id-" + i).className;
        var result = name.split(':::');

        data.push(parseFloat(result[1]));
        values.push(result[0]);            
        colors.push(result[2]);

        if (i > 5) {//Mettre à 6
            //Génération des couleurs si plusieurs données reçues
            colors.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
        }
    }
    $(".pieLoad").hide();
    $.jqplot('pie', [data], {
        animate: !$.jqplot.use_excanvas,
        seriesColors: colors,
        seriesDefaults: {
            renderer: $.jqplot.BarRenderer,
            shadow:false,
            rendererOptions: {
                varyBarColor: true,
                barWidth: width,
                barPadding:-10
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
                rendererOptions: {
                    drawBaseline:false
                },
                min:0,
                max:data.length +1 ,
                renderer: $.jqplot.CategoryAxisRenderer
            },
            yaxis: {
                max:120,
				min:0,
                showTicks: false,
                tickOptions: {
                    showGridline: false
                },
                rendererOptions: {
                    drawBaseline:false
                }
            }
        },
    });
    //Changement de couleurs des pointslabels   
    for (i = 0; i < data.length; i++) {
        var cols = document.getElementsByClassName('jqplot-point-'+ i);
        cols[0].style.color = colors[i];
        cols[0].style.fontWeight = 'bold';
    }
    
});

