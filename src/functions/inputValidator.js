export const handleInputTextValidation = (inputText, stateValidator) => {
  if (inputText > 3) {
    stateValidator(true);
  } else {
    stateValidator(false);
  }
};

export const handleInputNumberValidation = (inputNumber, stateValidator) => {
  if (inputNumber > 0) {
    stateValidator(true);
  } else {
    stateValidator(false);
  }
};
