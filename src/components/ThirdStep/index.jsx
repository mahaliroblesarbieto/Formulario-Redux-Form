import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import SquareCheckboxComponent from "../ElementsUI/SquareCheckboxComponent";
import ButtonComponent from "../ElementsUI/ButtonComponent";
import {
  handleValidateEmail,
  handleValidateDueDate,
  handleValidateNameAndLastName,
  handleValidateCardNumber,
  handleValidateCvv
} from "../../validations/field";

const ThirdStep = ({
  error,
  handleSubmit,
  pristine,
  reset,
  submitting,
  name,
  numberDni,
  initialValues,
  disabledTextfieldDni,
  modifyDni,
  invalid,
  totalAmount,
  handleChange,
  handleChangeDiscountCode,
  handleApplyDiscount,
  applyDiscount,
  discount,
  showList,
  hideListUser,
  showListUser,
  insuredUsers
}) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <MobileWidth>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <FormComponent onSubmit={handleSubmit}>
                    <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nombre del Titular"}
                        name={"name"}
                        normalize={handleValidateNameAndLastName}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Número de Tarjeta"}
                        name={"numberCard"}
                        normalize={handleValidateCardNumber}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <Field
                        component={TextFieldComponent}
                        label={"Fecha de Vencimiento"}
                        name={"dueDate"}
                        normalize={handleValidateDueDate}
                      />
                    </Col>
                    <Col xs={6}>
                      <Field
                        component={TextFieldComponent}
                        label={"CVV"}
                        name={"cvv"}
                        normalize={handleValidateCvv}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Correo electrónico"}
                        name={"email"}
                        validate={handleValidateEmail}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={SquareCheckboxComponent}
                        label={"Autorizo el cargo de mi cuota a la tarjeta registrada como cargo recurrente."}
                        name={"acceptcuota"}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={SquareCheckboxComponent}
                        label={"Acepto las políticas de envío de la póliza electrónica."}
                        name={"acceptpolitics"}
                      />
                    </Col>
                  </Row>

                    <Row>
                      <Col xs={12}>
                      <ButtonComponent
                            type={"submit"}
                            // disabled={submitting || invalid}
                            content={`PAGAR ${totalAmount}`}
                          />
                        {/* <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="submit"
                          // disabled={submitting || invalid
                        >
                          PAGAR {totalAmount}
                        </Button> */}
                      </Col>
                    </Row>
                  </FormComponent>
                </Col>
              </Row>
            </Col>
          </Row>
        </MobileWidth>
      </Row>
    </React.Fragment>
  );
};

export default reduxForm({
  form: "FormThirdStep",
})(ThirdStep);
