// keep this file!  it works and you will need it

// keep this import statement
import { initializeState } from "../../business-logic/initialize-state.js";

// you can remove the rest of them
import { get } from "../../business-logic/get.js";

// keep this function! it works and you will need it
export const initializeApp = async () => {
   // this works! you will only need to change the name of the .json file
   await initializeState();

   // you can remove this code to make room for your app
   // read state
   const getQuestion = get("questions");

   // update the UI
   const questionContainer = document.getElementById("questionParagraph");
   questionContainer.appendChild(getQuestion);
};
