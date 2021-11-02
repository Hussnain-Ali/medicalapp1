import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import service from "../images/service.jpg";
import {ImUsers} from "react-icons/im"
import { MdPhoneInTalk } from "react-icons/md"
import { GrUserFemale } from "react-icons/gr"
import { FaRegHospital } from "react-icons/fa"

const GetPerks = () => {
  return (
    <Container className="get-perk">
      <Row className="d-flex justify-content-center">
        <Col xs={10} sm={8} md={8}>
          <p className="youget">You Get </p>
        
          <Row>
             <Col xs={12} sm={12} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <ImUsers className="usericon"/>
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title >Primary Care Visist Available</Modal.Title>
                </Modal.Header>
                

                <Modal.Body className="modal-body">
                  <p className="gerkcontent">
                    You get <strong>3 visits</strong> with your
                    Primary Care Doctor annually. Your provider is available for
                    regular checkups, sick visits and referrals.
                  </p>
                </Modal.Body>
                
                  
                  <h6 className="gerkfooter">
                    Visits Available:
                  </h6>

                
                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
          <Col xs={12} sm={12} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <MdPhoneInTalk className="usericon"/>
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title >Telehealth</Modal.Title>
                </Modal.Header>
                

                <Modal.Body className="modal-body">
                  <p>
                    Your appointment with John Smithn is confirmed for
                    <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                    You can prepare by reviewing your appointment details.
                  </p>
                </Modal.Body>
                 <h6 className="gerkfooter">
                    Visits Available:
                </h6>
                <h5 className="unlimited"> Unlimited: </h5>
                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
          
          </Row>
            <Row>
             <Col xs={12} sm={12} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <GrUserFemale className="usericon"/>
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title >Care Concierge</Modal.Title>
                </Modal.Header>
                

                <Modal.Body className="modal-body">
                  <p className="gerkcontent">
                    You get <strong>3 visits</strong> with your
                    Primary Care Doctor annually. Your provider is available for
                    regular checkups, sick visits and referrals.
                  </p>
                </Modal.Body>
                
                  
                  <h6 className="gerkfooter">
                    Visits Available:
                  </h6>

                
                <Button className="modal-button" variant="primary">
                  Call(501)489-2901
                </Button>
              </Modal.Dialog>
            </Col>
          <Col xs={12} sm={12} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <FaRegHospital className="usericon"/>
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title >Hospital Finder</Modal.Title>
                </Modal.Header>
                

                <Modal.Body className="modal-body">
                  <p>
                    Your appointment with John Smithn is confirmed for
                    <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                    You can prepare by reviewing your appointment details.
                  </p>
                </Modal.Body>
                 <h6 className="gerkfooter">
                    Visits Available:
                </h6>
                <h5 className="unlimited"> Unlimited: </h5>
                <Button className="modal-button" variant="primary">
                  Find A Hospital
                </Button>
                <p className="helpwith">
                  Help with a past bill
                  <i class="fas fa-caret-right"></i>
                </p>
                <div  style={{textAlign:"center", color:"#9D9D9D"}}>
                <p>Have an Emergency?</p>
                <p>Dial <b>911</b> on your phone.</p>
                </div>
              </Modal.Dialog>
            </Col>
          
          </Row>
        
        <Row>
             <Col xs={12} sm={12} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <ImUsers className="usericon"/>
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title >Prescription Search</Modal.Title>
                </Modal.Header>
                

                <Modal.Body className="modal-body">
                  <p className="gerkcontent">
                    You get <strong>3 visits</strong> with your
                    Primary Care Doctor annually. Your provider is available for
                    regular checkups, sick visits and referrals.
                  </p>
                </Modal.Body>
                
                  
                <form>
                  <input className="searchicon" type="search" name="search" placeholder="Type drug name.." ></input>
                 <button className="searchicon" type="submit"><i class="fa fa-search"></i> </button>
                </form>

                
                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
            
          <Col xs={12} sm={12} md={6}>
              <Modal.Dialog className="modal-dialog first">
                <MdPhoneInTalk className="usericon"/>
                <Modal.Header className="modal-header" closeButton>
                  <Modal.Title >Vitamins & Supplements</Modal.Title>
                </Modal.Header>
                

                <Modal.Body className="modal-body">
                  <p>
                    Your appointment with John Smithn is confirmed for
                    <strong> Wednesday,July</strong> at <strong>9:00AM</strong>.
                    You can prepare by reviewing your appointment details.
                  </p>
                  <p style={{textAlign:"left"}}className="helpwith">
                  Help with a past bill
                  <i class="fas fa-caret-right"></i>
                </p>
                </Modal.Body>

              </Modal.Dialog>
            </Col>
          
          </Row>
          
        </Col>
        <Col xs={10} sm={4} md={4} className="d-flex justify-content-end">
          <Row className="d-flex justify-content-end">
              
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GetPerks;
