import React from "react";
import FormContainer from "./FormContainer";
import "./StylesContainer/index.scss";
import { Row, Col } from "react-styled-flexboxgrid";

class Index extends React.Component { 
  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={6} lg={6}> 
              <FormContainer/> 
          </Col>
        </Row>
      </>
    );
  }
}


export default Index;
