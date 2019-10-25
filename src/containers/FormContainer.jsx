import React from 'react';
import Form from '../components/Form';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          valuesForm:''
        };
      }

      handleSubmitForm = values => {
        this.setState({valuesForm: values})  
        return values;
      }

      handleSuccessForm = res => {
        console.log('El cambio de estado fue exitoso');
        console.log(res);
        
    }

    render() {
        return <Form 
        onSubmit = {this.handleSubmitForm}
        onSubmitSuccess = {this.handleSuccessForm}
        />
    }
}

export default FormContainer;