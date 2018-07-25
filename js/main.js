console.log("hello")

// The Person object.creat (not working) Leave this line Commented
// const personObject = Object.create (null, {
//     general: {
//         value:{
//             agree: ["Quick, Imaginative and Strategic Mind","Jacks-of-all-Trades","Clueless in romance"],
//             disagree: ["High Self-Confidence","Arrogant","Judgmental"],
//             why: ["I find myself having trusting my own ability","I don't feel superior","I try let someone show me by example first"],
//         },
//         similarPeople: {
//             value: ["Seven of Nine","Gandalf The Grey","Katniss Everdeen"]
//         },
//         communication: {
//             value: {
//                 littleSib: "Best way to communicate is through a text-chat such as Slack, Discord or Steam.",
//                 instructors: "I like the instructional dictation and then one-on-one assitance afterwards.",
//                 teams: "I prefer to have direct dialogue with members of my team.",
//             }
//         }
//     }
// })

// The person object with normal object mode
const personObject = {
    general: {
        agree: ["Quick, Imaginative and Strategic Mind","Jacks-of-all-Trades","Clueless in romance"],
        disagree: ["High Self-Confidence","Arrogant","Judgmental"],
        why: ["I find myself having trusting my own ability","I don't feel superior","I try let someone show me by example first"],
    },
    similarPeople: ["Seven of Nine","Gandalf The Grey","Katniss Everdeen"],
    communication: [
           "Best way to communicate with my little sib is through a text-chat such as Slack, Discord or Steam.",
           "I like the instructional dictation and then one-on-one assitance afterwards.",
           "I prefer to have direct dialogue with members of my team.",
    ],
}

// Calling to make sure parameters work
console.log(personObject.communication.littleSib)

// Sending to localStorage
const saveDatabase = (databaseObject, localStorageKey) => {
    const stringifiedDatabase = JSON.stringify(databaseObject);
    localStorage.setItem(localStorageKey, stringifiedDatabase);
    console.log("Data commited to local storage");
}

saveDatabase(personObject, "Daniel")

// Loading from local storage
const loadDatabase = (localStorageKey) => {
    const databaseString = localStorage.getItem(localStorageKey);
    return JSON.parse(databaseString);
    console.log("Database has been loaded from local storage.");
}

const loadedPerson = loadDatabase("Daniel")

console.log(loadedPerson)

loadedPerson.general.agree.forEach(element => {
    document.getElementById("general").innerHTML += `<p>I agree with the statement: "${element}"</p>`
});

loadedPerson.general.disagree.forEach(element => {
    document.getElementById("general").innerHTML += `<p>I disagree with the statement: "${element}"</p>`
});

loadedPerson.similarPeople.forEach(element => {
    document.getElementById("similarPeople").innerHTML += `<p>"${element}"</p>`
});

loadedPerson.communication.forEach(element => {
    document.getElementById("communication").innerHTML += `<p>"${element}"</p>`
});
