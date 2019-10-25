import React from "react";
import ThirdStepContainer from "./ThirdStepContainer";
import "./StylesContainer/index.scss";
import { Row, Col } from "react-styled-flexboxgrid";

class Index extends React.Component { 
  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={6} lg={6}> 
              <ThirdStepContainer/> 
          </Col>
        </Row>
      </>
    );
  }
}


export default Index;
