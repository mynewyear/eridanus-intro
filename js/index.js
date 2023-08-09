// date 
let today = new Date();
let thisYear = today.getFullYear();

// select footer
let footer = document.querySelector("footer");
let copyright = document.createElement("p");

// Set copyright element
copyright.innerText = "Natalia Ia " + thisYear;
footer.appendChild(copyright);

// skills section
let skills = ["HTML", "CSS", "JavaScript", "Git", "Linux", "GCP"];

let skillSection = document.querySelector("#skills");
let skillList = skillSection.querySelector("ul");


for (let i = 0; i < skills.length; i++) { 
        let skill = document.createElement("li");
        skill.innerHTML= skills[i];
        skillList.appendChild(skill);
}