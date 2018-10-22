
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Don’t let the name fool you-you don’t need to be an actual chef to use this knife! It’s a commonly used knife that is great for chopping herbs, fruits and vegetables.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Wondering how you will dissect that huge Thanksgiving bird? Reach for a carving knife and save yourself the hassle. It’s perfect for carving or slicing meats such as turkeys, chickens, roasts, etc., as the name implies.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "A nifty little knife for peeling fruits and vegetables.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Don’t make the mistake of using the wrong knife to cut through that slab of steak. A steak knife, with its sometimes serrated edge, is great for cutting through steaks and other meats.
";
	}
	else if( number == 5 )
	{
		document.getElementById( "output-text" ).innerHTML = "If you’ve ever gone to a restaurant where bread or rolls were served as appetizers, chances are you’ve probably used a bread knife before. Bread knives are used to slice through succulent bread.
";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}