import Button from "@restart/ui/esm/Button";
import React,{useState} from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import service from "../images/service.jpg";
import {ImUsers} from "react-icons/im"
import { MdPhoneInTalk } from "react-icons/md"
import { GrUserFemale } from "react-icons/gr"
import { FaRegHospital } from "react-icons/fa"
import { MdSupportAgent } from "react-icons/md"
import { FaPrescription } from "react-icons/fa"
import {GiMedicines} from "react-icons/gi"
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const GetPerks = () => {
  const [progress, setProgress] = useState(75);
  return (
    <Container className="get-perk">
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={8} md={8}>
          <h3 style={{fontWeight:"900"}}>You Get </h3>
          
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
                  <div  style={{width:"80%"}}className="gerkfooter">
                    <div>
                    <span  style ={{cursor:"pointer", color: progress == 25 ? "green" :"black"}}onClick={() =>setProgress(25)}  > 3</span>
                   <span  onClick={() =>setProgress(50)} style={{paddingLeft:"25%", cursor:"pointer" ,color: progress == 50 ? "green" :"black"}} >2</span>
                   <span  style={{paddingLeft:"25%" ,cursor:"pointer" , color: progress == 75 ? "green" :"black"}} onClick={() =>setProgress(75)}>1</span>
                   <span style={{ paddingLeft:"25%" , cursor:"pointer" , color: progress == 100 ? "green" :"black"}} onClick={() =>setProgress(100)}>0</span>
                    </div>
                  
                  <Progress percent={progress} />

                  </div>
                
                <Button className="modal-button" variant="primary">
                  View appointment details
                </Button>
              </Modal.Dialog>
            </Col>
            
           <Col xs={12} sm={12} md={6}>
              <Modal.Dialog style={{height:"500px"}} className="modal-dialog first">
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
              
              <Modal.Dialog style={{height:"500px"}} className="modal-dialog first">
               
                <MdSupportAgent   className="usericon"/>
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

              <Modal.Dialog  style={{height:"520px"}} className=" modal-dialog first  ">
                <FaPrescription className="usericon"/>

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

              <Modal.Dialog className="modal-dialog first cardHeight">
                <GiMedicines className="usericon"/>
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
