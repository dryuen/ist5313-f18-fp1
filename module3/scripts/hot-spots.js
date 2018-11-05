
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "A deep rectangular pan of metal or glass used for baking food in the form of loaves.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Angel food cake is usually baked in a tube pan, a tall, round pan with a tube up the center that leaves a hole in the middle of the cake. description";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = " A flat, rectangular metal pan used in an oven. It is often used for baking bread rolls, pastries and flat products such as cookies, sheet cakes, Swiss rolls and pizzas.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "A baking pan commonly found in every kitchen. Cake pans can be round, square, or rectangular and are available in several sizes. Probably the most popular is the 9 x 13 x 2 inch rectangular cake pan that is used to bake cakes, bars, and savory dishes, such as lasagna.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}