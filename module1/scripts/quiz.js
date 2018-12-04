// This function is only called when the user/learner clicks on the submit button
// on the HTML page. The purpose of this function is to process the form; that is,
// grade the quiz.
function processQuiz()
{
	var answer1 = document.forms.quiz1.question1.value;
	var answer2 = document.forms.quiz1.question2.value;
	var answer3 = document.forms.quiz1.question3.value;
	var answer4 = document.forms.quiz1.question4.value;
	var answer5 = document.forms.quiz1.question5.value;
	

	var counter = 0;		// This variable keeps track of the number of correct answers
	
	if( answer1 == 2 )
	{
		counter = counter + 1;
	}
	
	if( answer2 == 2 )
	{
		counter = counter + 1;
	}
	
	if( answer3 == 1 )
	{
		counter = counter + 1;
	}
	if( answer4 == 3 )
	{
		counter = counter + 1;
	}
	if( answer5 == 1 )
	{
		counter = counter + 1;
	}
	
	alert( "You got " + counter + " questions correct!" );
	
	var percentage = counter / 5 * 100;
	var score = Math.round(percentage);
	alert( "Your score is " + score + "%" );
	parent.reportScores ( score );
}
