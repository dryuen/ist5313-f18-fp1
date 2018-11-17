function createList( e )
{
	str = "";
	$( "#sel1 option:selected" ).each( function() { 
		str = str + "<li>" + $( this ).text() + "</li>";
	} );
	$( "#sel2 option:selected" ).each( function() { 
		str = str + "<li>" + $( this ).text() + "</li>";
	} );

	$( "#sel3 option:selected" ).each( function() { 
		str = str + "<li>" + $( this ).text() + "</li>";
	} );

	$( "#sel4 option:selected" ).each( function() { 
		str = str + "<li>" + $( this ).text() + "</li>";
	} );

	$( "#sel5 option:selected" ).each( function() { 
		str = str + "<li>" +  $( this ).text() + "</li>";
	} );
	
	
	$( "#selections-list" ).html( str );
}

$( "#sel1" ).on( "change", createList );
$( "#sel2" ).on( "change", createList );
$( "#sel3" ).on( "change", createList );
$( "#sel4" ).on( "change", createList );
$( "#sel5" ).on( "change", createList );

