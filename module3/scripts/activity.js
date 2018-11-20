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
$( "input[type=radio][name=question1a]" ).on( "change", function() 
	{

	document.getElementById("q1atryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question1b]" ).on( "change", function() 
	{

	document.getElementById("q1btryAgain").style.visibility="visible";
});

$( "input[type=radio][name=question1c]" ).on( "change", function() 
	{

	document.getElementById("q1cSuccess").style.visibility="visible";
});

$( "input[type=radio][name=question2a]" ).on( "change", function() 
	{

	document.getElementById("q2aSuccess").style.visibility="visible";
});
$( "input[type=radio][name=question2b]" ).on( "change", function() 
	{

	document.getElementById("q2btryAgain").style.visibility="visible";
});

$( "input[type=radio][name=question2c]" ).on( "change", function() 
	{

	document.getElementById("q2ctryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question3a]" ).on( "change", function() 
	{

	document.getElementById("q3atryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question3b]" ).on( "change", function() 
	{

	document.getElementById("q3bSuccess").style.visibility="visible";
});

$( "input[type=radio][name=question3c]" ).on( "change", function() 
	{

	document.getElementById("q3ctryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question4a]" ).on( "change", function() 
	{

	document.getElementById("q4aSuccess").style.visibility="visible";
});
$( "input[type=radio][name=question4b]" ).on( "change", function() 
	{

	document.getElementById("q4btryAgain").style.visibility="visible";
});

$( "input[type=radio][name=question4c]" ).on( "change", function() 
	{

	document.getElementById("q4ctryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question5a]" ).on( "change", function() 
	{

	document.getElementById("q5atryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question5b]" ).on( "change", function() 
	{

	document.getElementById("q5bSuccess").style.visibility="visible";
});

$( "input[type=radio][name=question5c]" ).on( "change", function() 
	{

	document.getElementById("q5ctryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question6a]" ).on( "change", function() 
	{

	document.getElementById("q6atryAgain").style.visibility="visible";
});
$( "input[type=radio][name=question6b]" ).on( "change", function() 
	{

	document.getElementById("q6btryAgain").style.visibility="visible";
});

$( "input[type=radio][name=question6c]" ).on( "change", function() 
	{
	document.getElementById("q6cSuccess").style.visibility="visible";
});