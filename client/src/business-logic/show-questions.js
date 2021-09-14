import { find } from "../data-access/find.js";

export const showQuestion = () => {
   // read values from state
   const questions = find("questions");

   const newQuestion = (questionIndex) => {
      for (let i = 0; i < questions.length; i++) {
         let userQuestion = questions[questionIndex].question;
         return userQuestion;
      }
   };

   save("questions", newQuestion);
};
