/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Json with my personal information

//bio 

var bio = {

	"name" : "Jean Pierre",
	"role" : "Web Developer",
	"welcomeMessage" : "Hello, I am Jean :-). I like Mathematics, Physics, Chess and of course... PROGRAMMING. My favorite Programming Languages are : Python and C++.",
    "image" : "images/computer_science.jpg",
	"contacts" : {

		"mobile" : "8095555555",
		"email" : "juanpedro1519@gmail.com",
		"github" : "JPGITHUB1519",
		"twitter" : "@JEANPIERRE1519",
		"location" : "Santo Domingo, Distrito Nacional, República Dominicana"
	},

	
	"skills" : ["Respectful", "Smart", "Pro-active"]

}


// education 

var education = {

	"schools": [
	{
		"name": "PBP",
		"location": "Santo Domingo, Distrito Nacional, República Dominicana",
		"degree": "High School",
		"majors": ["Informatics"],
		"dates": 2014,
		"url" : "http://politecnicobrauliopaulino.com"

	},

	{
		"name" : "UTESA",
		"location" : "Santo Domingo, Distrito Nacional, República Dominicana",
		"degree" : "Bachelor",
		"majors" : ["Computer Science"],
		"dates": 2014,
		"url" : "http://www.utesa.edu"

			
	}
	],

	"Online-Courses" : [
	{
		"title" : "Intro To Computer Science",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/intro-to-computer-science--cs101"
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : 2016,
		"url" : "https://www.udacity.com/course/javascript-basics--ud804"
	}

	]

}

//work
var work = {

	"Jobs" : [
	{
		"employer" : "JPSOFTWARE",
		"title" : "CEO",
		"location" : "Santo Domingo, Distrito Nacional, República Dominicana",
		"dates" : 2010,
		"description" : "GOOD JOB"

	},
	{
		"employer" : "JSOFT",
		"title" : "Web Developer",
		"location" : "Santo Domingo, Distrito Nacional, República Dominicana",
		"dates" : 2014,
		"description" : "Hard Job!"
	}
	]
}

//projects1

var projects = {

	"projects" : [
	{
		"title" : "Search Engine",
		"dates" : 2016,
		"description" : "Educational project",
		"images" : ["images/computer_science2.jpg","images/computer_science2.jpg","images/computer_science2.jpg","images/computer_science2.jpg"]

	},
	{
		"title" : "Social Network",
		"dates" : 2016,
		"description" : "Make my own Social Newtwork",
		"images" : ["images/computer_science2.jpg","images/computer_science2.jpg","images/computer_science2.jpg","images/computer_science2.jpg"]
	}

	]
}


// ensapsulated Function for display the BIO information

bio.displayBio = function()
{
		
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedImage = HTMLbioPic.replace("%data%", bio.image);
	

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#header").append(formattedImage);
	$("#header").append(formattedWelcomeMessage);

	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	// if quiz
	if(bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);


	}
}
// ensapsulated Function for display the worls information

work.displayWork = function()
{
	// display - work for in quiz
	for(cont in work.Jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.Jobs[cont].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.Jobs[cont].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.Jobs[cont].location);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.Jobs[cont].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.Jobs[cont].description);
		$(".work-entry:last").append(formattedDescription);

	}


}

// ensapsulated Function for display the projects information

projects.displayProjects = function()
{
	for(pro in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates)
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description)
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[pro].images.length > 0)
		{
			for(img in projects.projects[pro].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[pro].images[img]);
				$(".project-entry:last").append(formattedImage);

			}
			
		}
		
	}

}

// ensapsulated Function for display the Education information

education.displayEducation = function()
{
	//schools

	for(edu in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		var formattedSchoolDegree =  HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);

		
		
		formattedSchoolMajors = HTMLschoolMajor.replace("%data%", "hola");

		if(education.schools[edu].majors.length > 0)
		{
			for(maj in education.schools[edu].majors)
			{
				formattedSchoolMajors = ""
				formattedSchoolMajors += HTMLschoolMajor.replace("%data%", education.schools[edu].majors[maj]);
				
			}
		}

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajors);

	}

	// online courses information
	$(".education-entry:last").append(HTMLonlineClasses);
	for(oc in education["Online-Courses"])
	{
		var formattedTitle = HTMLonlineTitle.replace("%data%",education["Online-Courses"][oc].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education["Online-Courses"][oc].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education["Online-Courses"][oc].dates);
		var formmatedUrl =  HTMLonlineURL.replace("%data%", education["Online-Courses"][oc].url)
		$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formmatedUrl);
		
	}



}


/*


$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);


});


function locationizer(work_obj)
{
	locations = []
	for(cont in work_obj.Jobs)
	{
		
		locations.push(work_obj.Jobs[cont].location);
	}

	return locations;

}

console.log(locationizer(work));
*/


function inName(name)
{
	name = name.trim().split(" ");
	string = "";
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	string = name[0] + " " + name[1];

	return string;


}
/*
$("#main").append(internationalizeButton);

console.log(inName("jean urenia"));
*/

bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);