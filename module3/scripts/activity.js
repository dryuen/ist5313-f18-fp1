/*	var answer1 = document.forms.activity1.question1.value;
	var answer2 = document.forms.activity1.question2.value;
	var answer3 = document.forms.activity1.question3.value;
	var answer4 = document.forms.activity1.question4.value;
	var answer5 = document.forms.activity1.question5.value;
	var answer6 = document.forms.activity1.question5.value;
	
function check1(){	
	if( answer1 == 2 )
	{
		counter = counter + 1;
		document.getElementByID("q1Success").style.visibility="visible";
	}
	if else{
		document.getElementByID("q1Try").style.visibility="visible";
	}
}
function check2(){
	if( answer2 == 0 )
	{
		counter = counter + 1;
		document.getElementByID("q2Success").style.visibility="visible";
	}
	if else{
		document.getElementByID("q2Try").style.visibility="visible";
	}
}
function check3(){
	if( answer3 == 1 )
	{
		counter = counter + 1;
		document.getElementByID("q3Success").style.visibility="visible";
	}
	if else{
		document.getElementByID("q3Try").style.visibility="visible";
	}
}
function check4(){
	if( answer4 == 0 )
	{
		counter = counter + 1;
		document.getElementByID("q4Success").style.visibility="visible";
	}
	if else{
		document.getElementByID("q4Try").style.visibility="visible";
	}
}
function check5(){
	if( answer5 == 1 )
	{
		counter = counter + 1;
		document.getElementByID("q5Success").style.visibility="visible";
	}
	if else{
		document.getElementByID("q5Try").style.visibility="visible";
	}
}
function check6(){
	if( answer6 == 2 )
	{
		counter = counter + 1;
		document.getElementByID("q6Success").style.visibility="visible";
	}
	if else{
		document.getElementByID("q6Try").style.visibility="visible";
	}
}*/
$( "input[type=radio][name=question1]" ).on( "change", function() 
	{

	document.getElementById("q1successA").style.visibility="visible";
});




