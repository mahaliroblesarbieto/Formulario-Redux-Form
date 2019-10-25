import React from 'react';
import Form from '../components/Form';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          totalAmount: "",
          discount: "",
          applyDiscount: false,
          showList: false,
        };
      }

      hideListUser = () => {
          this.setState({
            showList: false,
          })
      }

      showListUser = () => {
        this.setState({
            showList: true,
          })
      }

      handleChange = (event) => {
          const newAmount = parseInt(event.target.value) * this.props.insuredUsers.length;
          this.setState({totalAmount: newAmount}, () => console.log(this.state.totalAmount))
      }

      handleChangeDiscountCode = (event) => {
          const amountDiscount = event.target.value.substring(0,2);
          this.setState({discount: amountDiscount}, () => console.log(amountDiscount))
      }

      handleApplyDiscount = () => {
        const newAmountDiscount = this.state.totalAmount - (this.state.totalAmount * parseInt(this.state.discount) / 100);
        this.setState({
            totalAmount: newAmountDiscount,
            applyDiscount: true,
        })
      }

      handleSubmitThirdStep = () => {
          this.props.updateStep()
      }

    render() {
        return <Form 
        handleSubmit = {this.handleSubmitThirdStep}
        />
    }
}

export default FormContainer;