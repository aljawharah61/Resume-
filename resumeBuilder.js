/*
This is empty on purpose! Your code to build the resume will go here.
 */
// basic bio information object
var bio = {
    name: "Aljawharah Alqahtani ",
    role: "Web Developer",
    welcomeMessage: "This resume upadated Aprl 7, 2017",
    biopic: "images/fry.jpg",
    // contacts object contain main contacts
    contacts: {
        mobile: "0596249609",
        email: "aljawharah61@gmail.com",
        github: "aljawharah61",
        twitter: "aljawharah61",
        location: "riyadh"
    },
    // Array of skills
    skills: [
        "css", "html", "php", "wordpress", "JavaScript"
    ],
    // function to display bio information
    display: function() {
        // assign new info to html
        var newName = HTMLheaderName.replace("%data%", bio.name);
        var newRole = HTMLheaderRole.replace("%data%", bio.role);
        // contacts info
        var newMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var newEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var newGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var newTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var newLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        // picture and welcome message
        var newBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var newWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        // loop to assign skills to single string
        var newSkills = "";
        bio.skills.forEach(function(skill) {
            newSkills += HTMLskills.replace("%data%", skill);
        });
        // appened new HTML
        // Header
        $("#header").prepend(newName, newRole);
        // contacts
        $("#topContacts").append(newMobile, newEmail, newGithub, newTwitter, newLocation);
        $("#footerContacts").append(newMobile, newEmail, newGithub, newTwitter, newLocation);

        // pic
        $("#header").append(newBiopic, newWelcomeMessage);
        // skills
        $("#header").append(HTMLskillsStart);
        $("#skills-h3").append(newSkills);
    }
};

// education object: schools and online courses information
var education = {
    //array of school objects
    schools: [{
        name: "Princess Nourah bint Abdulrahman University",
        location: "Riyadh",
        degree: "BA",
        majors: ["network & telecommnction"],
        dates: "2015",
        url: "http://PNU.edu.sa/"
    }],
    // array of online courses objects
    onlineCourses: [{
        title: "Front-end nanodegree",
        school: "Udacity",
        dates: "2017",
        url: "https://www.udacity.com/"
    }],
    // function to display education information
    display: function() {
        // loop for schools information
        education.schools.forEach(function(school) {
            // assign new info to html
            var newName = HTMLschoolName.replace("%data%", school.name);
            var newLocation = HTMLschoolLocation.replace("%data%", school.location);
            var newDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var newMajor = HTMLschoolMajor.replace("%data%", school.majors);
            var newDates = HTMLschoolDates.replace("%data%", school.dates);
            // check if there is a school url and add it to the string
            if (typeof school.url !== 'undefined' && school.url.length > 0) {
                newName = newName.replace("#", school.url);
            }
            // append to HTML
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(newName, newDegree, newDates, newLocation, newMajor);

        });
        // check if there an online classes
        if (typeof education.onlineCourses !== 'undefined' && education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            // loop for online couses information
            education.onlineCourses.forEach(function(online) {
                // assign new info to html
                var newTitle = HTMLonlineTitle.replace("%data%", online.title).replace("#", online.url);
                var newSchool = HTMLonlineSchool.replace("%data%", online.school);
                var newDates = HTMLonlineDates.replace("%data%", online.dates);
                var newUrl = HTMLonlineURL.replace("%data%", online.url).replace("#", online.url);
                // append to HTML
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(newTitle, newSchool, newDates, newUrl);

            });
        }

    }
};

// work object: contain all places of employments
var work = {
    // array of all job objects
    jobs: [{
        employer: "FIXTAG",
        title: "Opration Manger",
        dates: "may 2014 - Future",
        location: "Riyadh",
        description: "control the opration inside the company"
    }],
    // function to display work information
    display: function() {
        // check that jobs array not empty
        if (typeof work.jobs !== 'undefined' && work.jobs.length > 0) {
            // loop for jobs information
            work.jobs.forEach(function(job) {
                //assign new job information in loop
                var newEmployer = HTMLworkEmployer.replace("%data%", job.employer);
                var newTitle = HTMLworkTitle.replace("%data%", job.title);
                var newDates = HTMLworkDates.replace("%data%", job.dates);
                var newLocation = HTMLworkLocation.replace("%data%", job.location);
                var newDescription = HTMLworkDescription.replace("%data%", job.description);
                // append to html
                $("#workExperience").append(HTMLworkStart);
                $(".work-entry:last").append(newEmployer, newTitle, newDates, newLocation, newDescription);
            });
        }
    }
};

// projects object : contain all previous and current project information
var projects = {
    // array of all projects
    projects: [{
        title: "creat anew brand",
        dates: "2013",
        description: "Creat anew brand in the repairing services",
        // array of project images
        images: [

            "images/Fixtag.png"
        ]
    }],
    // function to display projects information
    display: function() {
        // check that projects array not empty
        if (typeof projects.projects !== 'undefined' && projects.projects.length > 0) {
            // loop for projects information
            projects.projects.forEach(function(project) {
                //assign new project information in loop
                var newTitle = HTMLprojectTitle.replace("%data%", project.title);
                var newDates = HTMLprojectDates.replace("%data%", project.dates);
                var newDescription = HTMLprojectDescription.replace("%data%", project.description);
                // loop to assign images to single string
                var newImages = "";
                project.images.forEach(function(img) {
                    newImages += HTMLprojectImage.replace("%data%", img);
                });
                // append to html
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(newTitle, newDates, newDescription, newImages);

            });
        }
    }
};

//call dispaly functions
bio.display();
work.display();
projects.display();
education.display();

//append map to HTML
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
