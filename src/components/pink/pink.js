import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../pink/pink.module.css"
import Col from "react-bootstrap/Col";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
export function Pink() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/jobs#normal'; 
    navigate(path);
  }
  return (
    <Card className={`text-center ${styles.pink_card}`}>
      <Card.Body>
        <Card.Title style={{fontWeight: "500"}}>Why Freelance</Card.Title>
        <Card.Text style={{fontWeight: "400",marginTop:"1%",marginBottom:"1%"}}>
            <Col className={styles.col} xs={9} sm={8} md={7} lg={7} >

        Text ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut labore et.
            </Col>
        </Card.Text>
        <Button  onClick={onOpen} className={styles.button} variant="primary">More</Button>
      </Card.Body>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{border: "1px solid white", borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          {/* <ModalHeader style={{color: "white"}}>Why freelance</ModalHeader> */}
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{color: "white", marginTop: "40px", fontSize: "18px", fontWeight: 700}}>
            Why freelance
            </div>
            <div className={styles.modal_text}>

          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            </div>
            <button className={styles.modal_button} onClick={routeChange}>Çalışan Ol!</button>
          </ModalBody>
          <ModalFooter>
            <img className={styles.modal_logo} src={logo}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}
