import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import service from "../images/service.jpg";
// import file from '../app.module.css';
const GetPerks = () => {
  return (
    <Container className="get-perk">
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={8} md={8}>
          <h3 style={{fontWeight:"900"}}>You Get </h3>
          <Row>
            <Col xs={10} sm={8} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title>Primary Care Visist Available</Modal.Title>
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
        <Col xs={12} sm={4} md={4} >
          <Row>
           
            <Col xs={6} md={12}>
              <Row>
              <Col xs={12} md={2}></Col>
                <Col xs={12} md={8}>
                {/* //////////////////////// */}
                <h3  style={{fontWeight:"700"}}>My Perks </h3>
                <Card>
                <p  className="myPerksEduc" style={{ color: "#6FA1FF"  }}>
                  <i class="fas fa-graduation-cap"></i> Educational Resources
                </p>
                <Card.Img variant="top" src={service} style={{}} />
                <div>
                  <h2 className="myPerksEductxt">
                    What to Expect When You're Expecting...a Colonoscopy
                  </h2>
                  <p className="myPerksEdutxts">
                   National Colon Health Week is coming up.
                   Most adults can experct to get their first
                   colonoscopy  at age 50 Thee National...
                  </p>
                  <Button
                      variant="primary"
                      style={{
                      background: " transparent",
                      border: "0",
                      color: "#fda510",
                    }}
                    className="myPerksEdubtn"
                  >
                    Learn More <i class="fas fa-caret-right"></i>
                  </Button>
                </div>
              </Card>



                {/* //////////////////////////// */}

                </Col>
                <Col xs={12} md={2}></Col>
              
              </Row>
            </Col>

            <Col xs={6} md={12}>
              <Row className="paddingPerks">
              <Col xs={12} md={2}></Col>
                <Col xs={12} md={8}>
                {/* //////////////////////// */}
                <Card>
                <p  className="myPerksEduc" style={{ color: "#6FA1FF"  }}>
                  <i class="fas fa-utensils"></i> Cooking Center
                </p>
                <Card.Img variant="top" src={service} style={{}} />
                <div>
                  <h2 className="myPerksEductxt">
                    Hearty Chicken and Rice Soup
                  </h2>
                  <p className="myPerksEdutxts">
                   just because your diet needs to consist of "bland" foods a few
                   days before a colonscopy doesn't mean your meals need to 
                   taste bland. Here's how to.... 
                  </p>
                  <Button
                      variant="primary"
                      style={{
                      background: " transparent",
                      border: "0",
                      color: "#fda510",
                    }}
                    className="myPerksEdubtn"
                  >
                    Learn More <i class="fas fa-caret-right"></i>
                  </Button>
                </div>
              </Card>



                {/* //////////////////////////// */}

                </Col>
                <Col xs={12} md={2}></Col>
              
              </Row>
            </Col>
            
            <Col xs={6} md={12}>
              <Row>
              <Col xs={12} md={2}></Col>
                <Col xs={12} md={8}>
                {/* //////////////////////// */}
                <Card>
                <p  className="myPerksEduc" style={{ color: "#6FA1FF"  }}>
                  <i class="fas fa-graduation-cap"></i> Educational Resources
                </p>
                <Card.Img variant="top" src={service} style={{}} />
                <div>
                  <h2 className="myPerksEductxt">
                    What to Expect When You're Expecting...a Colonoscopy
                  </h2>
                  <p className="myPerksEdutxts">
                   National Colon Health Week is coming up.
                   Most adults can experct to get their first
                   colonoscopy  at age 50 Thee National...
                  </p>
                  <Button
                      variant="primary"
                      style={{
                      background: " transparent",
                      border: "0",
                      color: "#fda510",
                    }}
                    className="myPerksEdubtn"
                  >
                    Learn More <i class="fas fa-caret-right"></i>
                  </Button>
                </div>
              </Card>



                {/* //////////////////////////// */}

                </Col>
                <Col xs={12} md={2}></Col>
              
              </Row>
            </Col>

            
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GetPerks;
