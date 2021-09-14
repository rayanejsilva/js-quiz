import { showQuestionHandler } from "../handlers/show-questions.js";

export const showQuestionListener = () => {
   document
      .getElementById("questionContainer")
      .addEventListener("showQuestion", showQuestionHandler);
};
