console.log("security_questions.js is loaded");

var securityQuestions = [
  { question: "how old are you?", expectedAnswer: "22" },
  { question: "where are you from?", expectedAnswer: "VA" },
  { question: "do you like SF?", expectedAnswer: "yes" }
]

for (var i=0; i < securityQuestions.length; i++){
  userAnswer = prompt(securityQuestions[i].question);
  if (userAnswer != securityQuestions[i].expectedAnswer){
      alert("Incorrect security question response!");
      break;
    }
  }
