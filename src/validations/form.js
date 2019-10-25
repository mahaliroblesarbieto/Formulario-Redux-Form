  export const handleValidateForm = values => {
    const error = {};
    if (!values.name) {
      error._error = "name, valor requerido";
    } else if (!values.numberCard ) {
      error._error = "numberCard, valor requerido";
    } else if (!values.dueDate) {
      error._error = "dueDate, valor requerido";
    } else if(!values.cvv) {
        error._error = "cvv, valor requerido";
    } else if(!values.email) {
      error._error = "email, valor requerido";
    }else if(!values.acceptcuota) {
        error._error = "acceptcuota, valor requerido";
    }  else if(!values.acceptpolitics) {
        error._error = "acceptpolitics, valor requerido";
    }
    return error;
  };