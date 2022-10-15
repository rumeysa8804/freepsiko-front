import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../footer/footer.module.css";
// import Sonnet from '../../components/Sonnet';
import twitter from "../../img/twitterlogo.svg"
import instagram from "../../img/instagramlogo.svg"
import telegram from "../../img/telegramlogo.svg"
import logo from "../../img/logo.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
export function Footer() {
  const { isOpen: isAboutOpen, onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure()
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_2}>
        {/* <div className={styles.row}> */}
            <Row className={styles.footer_row}>
          <Col md={5} sm={6} xs={6}>
            <div className={styles.list_group}>Kategoriler</div>
            <ListGroup variant="pils">
              <ListGroup.Item className={styles.list_group_item}>
                <Link to="/">Anasayfa</Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                <Link to="/explore">Çalışmalar</Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                <Link to="/jobs#normal">Çalışan Ol</Link>
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item} onClick={onAboutOpen}>
                Hakkında
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                <Link to="/help">Yardım</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={5} sm={6} xs={6}>
            <div className={styles.list_group}>Topluluk</div>
            <ListGroup variant="pils">
              <ListGroup.Item className={styles.list_group_item}>
                Blog
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                Becoming a freelancer
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                Communicate
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                Carrer
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                Talk
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={1} sm={12} xs={12} className={styles.col_logocontainer}>
            <span className={styles.logo_container}>
            <a href="https://twitter.com/bgoteams">
            <img className={styles.logo} src={twitter}/>
              </a> 
            </span>
            <span className={styles.logo_container}>
            <a href="https://www.instagram.com/bgoteams/">
            <img className={styles.logo} src={instagram}/>
              </a> 
            </span>
            <span className={styles.logo_container}>
              <a href="">
                <img className={styles.logo} src={telegram}/>
              </a>
            </span>
          </Col>
          </Row>
        </div>
      </div>
      <Modal onClose={onAboutClose} isOpen={isAboutOpen} isCentered>
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{border: "1px solid white", borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{color: "white", marginTop: "40px", fontSize: "18px", fontWeight: 700}}>
           HAKKINDA
            </div>
          </ModalBody>
          <ModalFooter>
            <img className={styles.modal_logo} src={logo}/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
