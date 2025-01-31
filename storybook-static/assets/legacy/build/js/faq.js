function openQuestion(id){
	var QClicked = $('#Q-'+id);
	var Answer = $('#R-'+id);
	var className= QClicked.attr('class');
	if (className == "currentQuestion") //close
	{
		QClicked.removeClass('currentQuestion').addClass("noCurrentQuestion");
		Answer.addClass('hideAnswer');
	}else{ // open
		QClicked.removeClass('noCurrentQuestion').addClass("currentQuestion");
		Answer.removeClass('hideAnswer');
	}
}


