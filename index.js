let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//increases count 
increment = () => {
    count += 1;
    countEl.innerText = count;
}

//decreases count 
decrease = () => {
    count = count - 1;
    countEl.textContent = count;
}

//saves count 
save = () => {
    let countStr = " " + count + " ";
    saveEl.textContent += countStr;
    countEl.textContent = 0; 
    count = 0;
}

const form = document.querySelector(".submission_form");

//submission form 
function sendMsg(e) {
    e.preventDefault();
const msg = document.querySelector(".msg")

//function send email 

    Email.send({
            SecureToken : "d1df5eac-2a52-4aca-81fc-ef3ee3f889c8",
            To : 'pauljpekarek@gmail.com',
            From: "pauljpekarek@gmail.com",
            Subject : "Submission Form",
            Body : msg.value
            
        }).then(
        message => alert(message)
        );
}

//add the event listener submit 

form.addEventListener('submit', sendMsg); 