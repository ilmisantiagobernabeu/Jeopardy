$( document ).ready(function() {

    console.log("Document Ready");


    $(".clue").click(function() {
	var clue = $(this),
	    value = clue.children(".clue_value"),
	    question = clue.children(".clue_question"),
	    answer = clue.children(".clue_answer");
	   
	clue.addClass("animated zoomIn answer_state");
	clue.click(function() {
	    clue.removeClass("answer_state");
	    clue.addClass("question_state");
	    question.addClass("animated fadeIn");

	    clue.click(function() {		
		question.removeClass("animated fadeIn");
		clue.removeClass("animated zoomIn question_state");
		clue.addClass("animated fadeOut");
	    });	   
 	});
    });
});
