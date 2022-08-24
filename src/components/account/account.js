import { Menu } from "../menu/menu";
import styles from "../account/account.module.css"
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import user from "../../img/account_user.svg";
import register from "../../img/account_registered.svg";
import works from "../../img/account_works.svg";
import { Contact } from "../contact/contact";
import { useDisclosure } from '@chakra-ui/react'
import { Input} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
export function Account() {
    const { isOpen: isPersonalInfoOpen, onOpen: onPersonalInfoOpen, onClose: onPersonalInfoClose } = useDisclosure()
    const { isOpen: isRegistersOpen, onOpen: onRegistersOpen, onClose: onRegistersClose } = useDisclosure()
    const { isOpen: isWorksOpen, onOpen: onWorksOpen, onClose: onWorksClose } = useDisclosure()
    const { isOpen: isOfferOpen, onOpen: onOfferOpen, onClose: onOfferClose } = useDisclosure()
  
    return(
        <>

        <Menu />
      <Container style={{marginLeft:"20%"}}>
        <Row>
            <Col sm={2} className={styles.col} >
            <Card className={styles.card} onClick={onPersonalInfoOpen}>
                <img className={styles.img} src={user} style={{margin:"auto"}}/>
                <span style={{fontSize:"20px",marginBottom:"10%"}}>Kişisel Bilgiler</span>
            </Card>
            </Col>
            <Col sm={2} className={styles.col}>
            <Card className={styles.card} onClick={onRegistersOpen}>
            <img className={styles.img} src={register} style={{margin:"auto"}}/>
            <div style={{fontSize:"20px",marginBottom:"10%",textAlign:"center"}}>
                <span >Kayıtlı</span>
                <div style={{fontWeight:"200"}}>14 August</div>
            </div>
            </Card>
            </Col>
            <Col sm={2} className={styles.col}>
            <Card className={styles.card} onClick={onWorksOpen}>
            <img className={styles.img} src={works} style={{margin:"auto"}}/>
            <div style={{fontSize:"20px",marginBottom:"10%",textAlign:"center"}}>
                <span >Çalışmalarım</span>
                <div style={{fontWeight:"200"}}>1 adet</div>
            </div>
            </Card>
            </Col>

        </Row>
      </Container>
      
      <button className={styles.modal_button} onClick={onOfferOpen}>MODAL 4</button> {/* burası kalkacak */}

    <Modal onClose={onPersonalInfoClose} isOpen={isPersonalInfoOpen} isCentered >
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px",textAlign:"center"}}>
            Kişisel Bilgiler
            </div>
                <Input type='text' placeholder="Username" />
                <Input type='text' placeholder="+90(123)1231231234" />
                <Input type='email' placeholder="free@gmail.com" />
                <Input type='password' placeholder="*****" />
            <button className={styles.modal_button}>Güncelle</button>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={onRegistersClose} isOpen={isRegistersOpen} isCentered size="xxl" m={4}>
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px"}}>
            Kaydedilenler
            </div>
            <div className={styles.modal_text}>
              <Container style={{float:"left",left:"0"}}>
                <Row>
                <Col>
                <Card  className={styles.card_container}>
                   <Card.Header className={styles.card_header_container}>
                    <div className={styles.card_header_left}>Jobs</div>
                    <div className={styles.card_header_right}>14 August</div>
                  </Card.Header>
                <Card.Body>
                  <Card.Text className={styles.card_text}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  </Card.Text>
                    <div className={styles.card_footer_container}>
                    <div className={styles.card_footer_left}>BGO TEAM</div>
                    <div className={styles.card_footer_rigth}>Full Time</div>
                    </div>
                </Card.Body>
              </Card>
                </Col>
                <Col>
                  <Card  className={styles.card_container}>
                    <Card.Header className={styles.card_header_container}>
                        <div className={styles.card_header_left}>Jobs</div>
                        <div className={styles.card_header_right}>14 August</div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className={styles.card_text}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                      </Card.Text>
                      <div className={styles.card_footer_container}>
                      <div className={styles.card_footer_left}>BGO TEAM</div>
                      <div className={styles.card_footer_rigth}>Part Time</div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                </Row>
              </Container>
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Modal onClose={onWorksClose} isOpen={isWorksOpen} isCentered size="xl">
        <ModalOverlay   bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px"}}>
            Çalışmalarım
            </div>
            <div className={styles.modal_text}>
            <Card  className={styles.card_container}>
                    <Card.Body>
                        <Container>
                          <Row >
                            <Col sm={3} >Web Site</Col>
                            <Col sm={6} >Lorem ipsum dolor sit amet,consetetur</Col>
                            <Col sm={3} style={{color:"#ec3b83"}}>More</Col>
                          </Row>
                        </Container>
                    </Card.Body>
            </Card>
            <Card  className={styles.card_container}>
                    <Card.Body>
                        <Container>
                          <Row >
                            <Col sm={3} >Mobile App</Col>
                            <Col sm={6} >Lorem ipsum dolor sit amet,consetetur</Col>
                            <Col sm={3} style={{color:"#ec3b83"}}>More</Col>
                          </Row>
                        </Container>
                    </Card.Body>
            </Card>
            <Card  className={styles.card_container}>
                    <Card.Body>
                        <Container>
                          <Row >
                            <Col sm={3} >Graphic</Col>
                            <Col sm={6} >Lorem ipsum dolor sit amet,consetetur</Col>
                            <Col sm={3} style={{color:"#ec3b83"}}>More</Col>
                          </Row>
                        </Container>
                    </Card.Body>
            </Card>
            </div>

          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={onOfferClose} isOpen={isOfferOpen} isCentered >
        <ModalOverlay       bg='blackAlpha.300'
      backdropFilter='blur(10px) ' />
        <ModalContent  bg='blackAlpha.200' style={{ borderRadius: "15px"}}
      backdropFilter='blur(50px)'>
          <ModalCloseButton style={{backgroundColor: "white", borderRadius: "20px"}} />
          <ModalBody>
            <div style={{ fontSize: "24px", fontWeight: 400,marginTop:"20px",marginBottom:"30px"}}>
            Logo Tasarımı
            </div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div>Bu işi kabul ediyor musunuz?</div>
            <button className={styles.modal_button} style={{borderRadius:"20px"}}>Kabul</button>
            <button className={styles.modal_button} style={{backgroundColor:"#e23072",color:"white",borderRadius:"20px",marginLeft:"10px"}}>Red</button>
            <Row style={{marginTop:"25px"}}>
              <Col>
              <Col>Ortalama</Col>
            <Col style={{color:"#e23072"}}>3-5 gün</Col>
              </Col>
              <Col>
              <Col>İşveren</Col>
              <Col style={{color:"#e23072"}}>google.com</Col>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <Contact/>
        </>
    )
}