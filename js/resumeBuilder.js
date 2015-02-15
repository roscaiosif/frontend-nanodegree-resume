
 var work =
{
	"jobs": [
	{
	"employer" : "Concordia University",
	"title": "Lab Manager",
	"location" : "Montreal",
	"dates" : "2007 - present",
	"description" : "bla bla"
	},
	{
	"employer" : "Politehnica University Bucharest",
	"title": "Associate Professor",
	"location" : "Bucharest",
	"dates" : "1991 - 2006",
	"description" : "bla bla"
	}
	]
}

 var projects =
{
	"projects" : [
	{
	"title" : "Conductive composites",
	"dates" : "2007-present",
	"description" : "bla bla",
	"images" : ["images/197x148.gif","images/197x148.gif", "images/197x148.gif" ]
	},
	{
	"title" : "Nanocrystalline cellulose",
	"dates" : "2012-present",
	"description" : "bla bla",
	"images" : ["images/197x148.gif","images/197x148.gif","images/197x148.gif"]
	}
	]
}

var bio =
{
	"name" : "Daniel Rosca",
	"role" : "Research Associate",
	"welcomeMessage" : "Welcome to the world of nanocomposites",
	"contacts" :
	{
		"email" : "iosifrosca@gmail.com",
		"mobile" : "514-497-9517",
		"github" : "roscaiosif"
	},
	"location" : "Montreal",
	"skills" : ["carbon nanomaterials", "composite manufacturing", "composite testing"]
}

var education =
{
	"schools" : [
		{
		"name" : "Hokkaido Daigaku",
		"location" : "Sapporo",
		"degree": "Postdoctoral",
		"majors" : ["biodegradable particles", "carbon nanotubes"],
		"dates" : "2002-2004",
		"url" : "http://www.hokudai.ac.jp/"
		},
		{
		"name" : "Université Jean Monnet",
		"location" : "Saint-Etienne",
		"degree": "PhD",
		"majors" : ["heat and mass transfer in polymers", "modelling and simula"],
		"dates" : "1993-1998",
		"url" : "http://portail.univ-st-etienne.fr/"
		},
		{
		"name" : "Politehnica University Bucharest",
		"location" : "Bucharest",
		"degree": "Engineer",
		"majors" : ["polymer synthesis", "polymer processing"],
		"dates" : "1983-1988",
		"url" : "http://www.upb.ro"
		}
	],
	"onlineCourses" : [
		{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : "February 2015",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
		"title" : "How to use Git and GitHub",
		"school" : "Udacity",
		"dates" : "February 2015",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : "February 2015",
		"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		}
	]
}

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

var str = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(str);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (var i = bio.skills.length - 1; i >= 0; i--) {
		var str = HTMLskills.replace("%data%", bio.skills[i]);
		$("#header").append(str);
	}
};

for (job in work.jobs){
	var fEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var fTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var fDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var fLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var fDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$("#workExperience").append(HTMLworkStart);

	$(".work-entry:last").append(fEmployer + fTitle);
	//$("#workExperience").append();
	$("#workExperience").append(fDates);
	$("#workExperience").append(fLocation);
	$("#workExperience").append(fDescription);
}
//$("#main").append(weirdObject.property());
//$("#main").append(weirdObject["property()"]);