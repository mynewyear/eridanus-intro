// date 
let today = new Date();
let thisYear = today.getFullYear();

// select footer
let footer = document.querySelector("footer");
let copyright = document.createElement("div");
copyright.className = "copyright";
// Set copyright element
copyright.innerText = "© Natalia Ia " + thisYear;
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
// store leave_message
let messageForm = document.querySelector('.message-form');  // Adjusted to match the class of your form

// Add an event listener
messageForm.addEventListener('submit', function(event) {
    // Prevent refreshing
    event.preventDefault();

    // Retrieve values
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName + "\n" + usersEmail + "\n" + usersMessage); // log

    let messageSection = document.getElementById("messages");
    messageSection.removeAttribute("hidden");  // Show the message section when a new message is added
    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");
    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a>' + ' <span>wrote: ' + usersMessage + '</span>';
    messageList.appendChild(newMessage);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', function(e) {
        let entry = removeButton.parentElement;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageForm.reset();
});

// Fetch data
fetch('https://api.github.com/users/mynewyear/repos')
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.status);
        }
        return response.json();
    })
    .then(function(repositories) {
        // Sort by creation date
        repositories.sort(function(a, b) {
            return new Date(b.created_at) - new Date(a.created_at);
        });

        let projectSection = document.getElementById("projects");
        let projectsList = projectSection.querySelector("ul");

        let repoLimit = Math.min(repositories.length, 5);  // Use a variable
        for (let i = 0; i < repoLimit; i++) {
            let project = document.createElement("li");
            // repository name and link
            project.innerHTML  = `<a href = "https://github.com/${repositories[i].full_name}"> ${repositories[i].name}</a>`
            projectsList.appendChild(project);
        };
    })
    .catch(function(error) {
        // catch error during the fetch process
        console.error("Error fetching data:", error);
    });

