import { calculateImc , notANumber, displayResultMessage } from "./utils.js";
import { alertError } from "./error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    alertError.open();
    return;
  }

  const result = calculateImc(weight, height);
  displayResultMessage(result)
};

form.oninput = () => alertError.close();