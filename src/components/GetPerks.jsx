import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import service from "../images/service.jpg";
import {ImUsers} from "react-icons/im"
const GetPerks = () => {
  return (
    <Container className="get-perk">
      <Row className="d-flex justify-content-center">
        <Col xs={10} sm={8} md={8}>
          <p className="youget">You Get </p>
          <Row>
            <Col xs={10} sm={8} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title><ImUsers color="83AEFF"/>Primary Care Visist Available</Modal.Title>
                </Modal.Header>
                

                <Modal.Body className="modal-body">
                  <p>
                    Your appointment with John Smithn is confirmed for
                    <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                    You can prepare by reviewing your appointment details.
                  </p>
                </Modal.Body>

                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
            <Col>
              <Modal.Dialog className="modal-dialog first">
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title>Appointments</Modal.Title>
                </Modal.Header>
                <Modal.Header className="modal-header ">
                  <Modal.Title className="date-time">
                    <i
                      style={{ color: "#6FA1FF" }}
                      class="far fa-calendar-alt"
                    ></i>
                    <strong> 07/07/2021</strong>
                    <br />
                    <i style={{ color: "#6FA1FF" }} class="far fa-clock"></i>
                    <strong> 9:00AM</strong>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                  <p>
                    Your appointment with John Smithn is confirmed for
                    <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                    You can prepare by reviewing your appointment details.
                  </p>
                </Modal.Body>

                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
            <Col>
              <Modal.Dialog className="modal-dialog first">
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title>Appointments</Modal.Title>
                </Modal.Header>
                <Modal.Header className="modal-header ">
                  <Modal.Title className="date-time">
                    <i
                      style={{ color: "#6FA1FF" }}
                      class="far fa-calendar-alt"
                    ></i>
                    <strong> 07/07/2021</strong>
                    <br />
                    <i style={{ color: "#6FA1FF" }} class="far fa-clock"></i>
                    <strong> 9:00AM</strong>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                  <p>
                    Your appointment with John Smithn is confirmed for
                    <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                    You can prepare by reviewing your appointment details.
                  </p>
                </Modal.Body>

                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
            <Col>
              <Modal.Dialog className="modal-dialog first">
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title>Appointments</Modal.Title>
                </Modal.Header>
                <Modal.Header className="modal-header ">
                  <Modal.Title className="date-time">
                    <i
                      style={{ color: "#6FA1FF" }}
                      class="far fa-calendar-alt"
                    ></i>
                    <strong> 07/07/2021</strong>
                    <br />
                    <i style={{ color: "#6FA1FF" }} class="far fa-clock"></i>
                    <strong> 9:00AM</strong>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className="modal-body">
                  <p>
                    Your appointment with John Smithn is confirmed for
                    <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                    You can prepare by reviewing your appointment details.
                  </p>
                </Modal.Body>

                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
          </Row>
        </Col>
        <Col xs={10} sm={4} md={4} className="d-flex justify-content-end">
          <Row className="d-flex justify-content-end">
            <p className="mt-4">Perks</p>
            <Col xs={10} md={12}>
              <Card style={{ width: "18rem", marginTop: "28px" }}>
                <p style={{ color: "#6FA1FF" }}>
                  <i class="fas fa-graduation-cap"></i> Educational Resources
                </p>
                <Card.Img variant="top" src={service} />
                <Card.Body>
                  <Card.Title>
                    What to Expect When You're Expecting...a Colonoscopy
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      background: " transparent",
                      border: "0",
                      color: "#fda510",
                    }}
                  >
                    Learn More <i class="fas fa-caret-right"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={12}>
              <Card style={{ width: "18rem", marginTop: "28px" }}>
                <p style={{ color: "#6FA1FF" }}>
                  <i class="fas fa-utensils"></i> Educational Resources
                </p>
                <Card.Img variant="top" src={service} />
                <Card.Body>
                  <Card.Title>
                    What to Expect When You're Expecting...a Colonoscopy
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      background: " transparent",
                      border: "0",
                      color: "#fda510",
                    }}
                  >
                    Learn More <i class="fas fa-caret-right"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GetPerks;
