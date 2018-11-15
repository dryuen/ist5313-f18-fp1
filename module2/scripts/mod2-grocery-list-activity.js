function groceryList()
{
	currentString = $( "#my-grocery-list" ).html();
	n = $( "#itemName" ).val();
	a = $( "#itemAmount" ).val();
	o = $( "#other-category option:selected" ).val();
	str = n + "&nbsp; &nbsp; " + a + "&nbsp; &nbsp; " + o + "<br/>";
	
	$( "#my-grocery-list" ).html( currentString + str );
}

