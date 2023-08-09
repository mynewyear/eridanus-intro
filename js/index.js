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
// store leave_message
let messageForm = document.forms.leave_message;
//Add an event listener
messageForm[0].addEventListener('submit', function(event) {
    //prevent the default refreshing
    event.preventDefault() 
    // Retrieve values
    const usersName = messageForm.usersName.value;
    const usersEmail = messageForm.usersEmail.value;
    const usersMessage = messageForm.usersMessage.value;
    console.log(userName + "\n" + userEmail + "\n" + userMessage); //log

    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");
    newMessage.innerHTML = '<a href="mailto:">' + event.target.name.value + '</a>' + ' <span>wrote: ' + event.target.message.value + '</span>  '
    messageList.appendChild(newMessage);

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remove";
    removeButton.addEventListener('click', function(e) {
        let entry = removeButton.parentElement;
        entry.remove();
    });
    newMessage.appendChild(removeButton);  
    messageList.appendChild(newMessage);
    messageForm.reset();
});
