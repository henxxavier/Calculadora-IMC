import { modal } from "./modal.js";

export const calculateImc = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};

export const notANumber = (value) => {
  return isNaN(value) || value == "";
};

export const displayResultMessage = (result) => {
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();
};
