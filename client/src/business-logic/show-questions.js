import { find } from "../data-access/find.js";

export const showQuestion = () => {
   // read values from state
   const readQuestions = find("questions");

   const displayQuestion = (questionIndex) => {
      for (let i = 0; i < readQuestions.length; i++) {
         let userQuestion = readquestions[questionIndex].question;
         return userQuestion;
      }
   };
};
