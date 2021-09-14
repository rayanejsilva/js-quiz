import { showQuestion } from "../../business-logic/show-questions";
import { get } from "../../business-logic/get.js";
import { set } from "../../business-logic/set.js";

export const showQuestionHandler = (event) => {
   // read user input
   const newQuestion = event.detail.question;

   // update state
   showQuestion(newQuestion);

   // read state
   const getQuestion = get("question");

   // update state
   set("question", newQuestion);

   // update the UI
   const questionContainer = document.getElementById("questionParagraph");
   questionContainer.appendChild(getQuestion);
};
