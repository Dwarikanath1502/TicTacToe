import React, { useState } from "react";
import "./App.css";
import Icon from "./Components/Icon";
//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Bootstrap
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  //TODO: methods
  const reloadGame = () => {
    //
  };

  const checkIsWinner = () => {
    //
  };

  const changeItem = (iteNumber) => {
    //
  };

  return (
    <div>
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
