console.log("hello")

const personObject = Object.create (null, {
    general: {
        value:{
            agree: ["Quick, Imaginative and Strategic Mind","Jacks-of-all-Trades","Clueless in romance"],
            disagree: ["High Self-Confidence","Arrogant","Judgmental"]
            why: ["I find myself having trusting my own ability","I don't feel superior","I try let someone show me by example first"]
        },
        similarPeople: {
            value: ["Seven of Nine","Gandalf The Grey","Katniss Everdeen"]
        },
        communication: {
            value: {
                littleSib: "Best way to communicate is through a text-chat such as Slack, Discord or Steam.",
                instructors: "I like the instructional dictation and then one-on-one assitance afterwards."
                teams: "I prefer to have direct dialogue with members of my team."
            }
        }
    }
})

console.log(personObject.general.agree[0])