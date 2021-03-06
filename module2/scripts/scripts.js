// this file holds any scripts that have to do with communicating with the learning management system (LMS)

// define a SCORM object to interface with LMS
var oScorm = pipwerks.SCORM;  

// This function starts the course.  This function should be called first to ensure that
// all session variables are created
function startCourse()
{
	// check to see if cookies is enabled, otherwise, this won't work
	if( typeof sessionStorage == "undefined" || sessionStorage.disabled )
	{
		alert( "You must enable cookies for this course to work properly." );
	}
	else
	{
		// if it is enabled, checked to see if this course was started
		// if it was not able to retrieve, the key "course_started", then
		// then this is the first time we are running the course
        if( !sessionStorage.getItem( "course_started" ) )
        {
        		// clear the session storage
            sessionStorage.clear();
            // set the "key" by giving it a value.  all values are strings!
            // course_started indicated that this OLM has started
    			sessionStorage.setItem( "course_started", "1" );
    			
			// set the values you want to persist throughout the website here
    			sessionStorage.setItem("topicVisited", "unvisited");
        }
	}
	
	// initializeSCORM after the OLM environment has been set up
	initializeSCORM();
}

// This function initializes the course by connecting the course to the LMS 
// The SCORM connection is done once at the beginning of the course
// Another function, reportScores(), will connect again when the 
// user is done with the online learning module
function initializeSCORM()
{
	var lmsConnected = oScorm.init();
	
	// we only want to run initializeSCORM once, so use course_started
	// to keep track of how many times we have initialized 
	var getStarted = sessionStorage.getItem( "course_started" );
	
	// only do the following if we are connected to the LMS and
	// if course_started has a value of 1
	if( lmsConnected && getStarted == "1" )
	{
		// SCORM 1.2
        // always set the status to incomplete
		oScorm.set( "cmi.core.lesson_status", "incomplete" );
		
		// change course_started to another value so that this initializeSCORM
		// does not run the initialization code again; otherwise, this OLM
		// will be incomplete if the user goes back to the first page even after
		// passing the exam 
		sessionStorage.setItem( "course_started", "2" );
    		
		// retrieve the LMS values (like user name) here and 
		// integrate them into your course
		alert( "Welcome, " + oScorm.get( "cmi.core.student_name" ) + "!" );
	}
}

// This function reports the score from the assessment to the LMS
// This should only be called when the user submits the answers to the quiz
function reportScores ( score )
{
	oScorm.set("cmi.core.score.raw", score);
	
	oScorm.set("cmi.core.score.min", 0);
	
	oScorm.set("cmi.core.score.max", 100);
	
		if (score>=70)
			{
				oScorm.set("cmi.core.lesson_status", "passed");
			}
		else 
		{
			oScorm.set("cmi.core.lesson_status", "failed");
		}
	
	oScorm.save();
}

// This function is called when the window is closed.  It saves and quits the course.
function finishCourse()
{
	oScorm.save();
	oScorm.quit();
}

function visitTopic1()

{
 sessionStorage.setItem( "topic1Visited", "visited" );
 checkAllVisited();
}
function visitTopic2()

{
 sessionStorage.setItem( "topic2Visited", "visited" );
 checkAllVisited();
}
function visitTopic2activity()

{
 sessionStorage.setItem( "topic2activityVisited", "visited" );
 checkAllVisited();
}
function visitTopic3()

{
 sessionStorage.setItem( "topic3Visited", "visited" );
 checkAllVisited();
}
function visitTopic3a()

{
 sessionStorage.setItem( "topic3aVisited", "visited" );
 checkAllVisited();
}
function visitTopic3b()

{
 sessionStorage.setItem( "topic3bVisited", "visited" );
 checkAllVisited();
}
function visitTopic3activity()

{
 sessionStorage.setItem( "topic3activityVisited", "visited" );
 checkAllVisited();
}
function visitTopic4()

{
 sessionStorage.setItem( "topic4Visited", "visited" );
 checkAllVisited();
}
function visitTopic4a()

{
 sessionStorage.setItem( "topic4aVisited", "visited" );
 checkAllVisited();
}
function visitTopic5()

{
 sessionStorage.setItem( "topic5Visited", "visited" );
 checkAllVisited();
}
function visitTopic5a()

{
 sessionStorage.setItem( "topic5aVisited", "visited" );
 checkAllVisited();
}

function visitRecipeActivity()

{
 sessionStorage.setItem( "recipeActivityVisited", "visited" );
 checkAllVisited();
}

function checkAllVisited()
{
	var t1= sessionStorage.getItem("topic1Visited");
	var t2= sessionStorage.getItem("topic2Visited");
	var t2act= sessionStorage.getItem("topic2activityVisited");
	var t3= sessionStorage.getItem("topic3Visited");
	var t3a= sessionStorage.getItem("topic3aVisited");
	var t3b= sessionStorage.getItem("topic3bVisited");
	var t3act= sessionStorage.getItem("topic3activityVisited");
	var t4= sessionStorage.getItem("topic4Visited");
	var t4a= sessionStorage.getItem("topic4aVisited");
	var t5= sessionStorage.getItem("topic5Visited");
	var t5a= sessionStorage.getItem("topic5aVisited");
	var ra= sessionStorage.getItem("recipeActivityVisited")
if (t1 == "visited" && t2 == "visited" && t2act == "visited" && t3 == "visited" && t3a == "visited" && t3b == "visited" && t3act == "visited" && t4 == "visited" && t4a == "visited" && t5 == "visited" && t5a == "visited"  && ra == "visited" )
	{document.getElementById ("content-frame").contentWindow.document.getElementById("quiz-link").style.display="inline";
	}
}
function visitCertificate()
{
	var learner_name=oScorm.get("cmi.core.student_name");
	document.getElementById("content-frame").contentWindow.document.getElementById("user-name").innerHTML=learner_name;
	}