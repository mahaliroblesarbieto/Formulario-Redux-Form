export const handleValidateNameAndLastName = value => {
  const text = value.replace(/[0-9]/, "");
  if (text.length <= 30) {
    return text;
  } else {
    return text.slice(0, 30);
  }
};

export const handleValidateCardNumber = value => {
  const text = value.replace(/[a-zA-Z]/, "");
  if (text.length <= 16) {
    return text;
  } else {
    return text.slice(0, 16);
  }
};

export const handleValidateCvv = value => {
  const text = value.replace(/[a-zA-Z]/, "");
  if (text.length <= 3) {
    return text;
  } else {
    return text.slice(0, 3);
  }
};

export const handleValidateDueDate = value => {
  const text = value.replace(/[a-zA-Z]/, "");
  if (text.length <= 5) {
    return text;
  } else {
    return text.slice(0, 5);
  }
};

export const handleValidateEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Correo electrónico inválido'
    : undefined

