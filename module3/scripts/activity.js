/*function checkActivity(){	
	var answer1 = document.forms.activity1.question1.value;
	var answer2 = document.forms.activity1.question2.value;
	var answer3 = document.forms.activity1.question3.value;
	var answer4 = document.forms.activity1.question4.value;
	var answer5 = document.forms.activity1.question5.value;
	var answer6 = document.forms.activity1.question5.value;
	
	
	if( answer1 == 2 )
	{
		document.getElementByID("q1Success").style.visibility="visible";
	}
	if( answer2 == 0 )
	{
		document.getElementByID("q2Success").style.visibility="visible";
	}
	if( answer3 == 1 )
	{
		document.getElementByID("q3Success").style.visibility="visible";
	}
	if( answer4 == 0 )
	{
		document.getElementByID("q4Success").style.visibility="visible";
	}
	if( answer5 == 1 )
	{
		document.getElementByID("q5Success").style.visibility="visible";
	}
	if( answer6 == 2 )
	{
		document.getElementByID("q6Success").style.visibility="visible";
	}
	if else{
		document.getElementByID("tryAgain").style.visibility="visible";
	}
}*/
$( "input[type=radio][name=question1]" ).on( "change", function() 
	{

	document.getElementById("q1successA").style.visibility="visible";
});



