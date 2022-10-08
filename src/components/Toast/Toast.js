import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function DismissibleExample({ message }) {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={12} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Want a propose??
        </Button>
        <ToastContainer position="middle-center">
          <Toast show={showA} onClose={toggleShowA} position="top-center">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Ferdous Zihad </strong>
              <small>now !!</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default DismissibleExample;
