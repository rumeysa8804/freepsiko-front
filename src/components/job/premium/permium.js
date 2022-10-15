import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-grid-system';
import React from "react";
import Card from 'react-bootstrap/Card';
import { useDisclosure } from '@chakra-ui/react'
import Select from 'react-select';
import styles from "../job.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,Text
} from '@chakra-ui/react'
export function Job_Premium() {
  const OverlayOne = () => (
    <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
    />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
      <div className={styles.job_container}>
        <div className={styles.job_input_premium_container}>
          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Surname"
              aria-label="Surname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

        </div>
        <div className={styles.job_input_premium_container}>

          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Phone"
              aria-label="Phone"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Mail"
              aria-label="Mail"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          
        </div>
        <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <div className={styles.job_send_button} onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}>Gönder</div>
      </div>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl" >
        {overlay}
        <ModalContent style={{ borderRadius: "20px"}}>
          <ModalHeader>Ödeme Yap</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
            <Row>
              <Col sm={4} className={styles.modal_text}><Text>Kart No</Text></Col>
              <Col sm={8}>
                <InputGroup className={styles.job_input_premium_group}>
                  <Form.Control
                    className={styles.job_input}
                    aria-label="Phone"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row style={{marginTop:"10px"}}>
              <Col sm={4} className={styles.modal_text}><Text>Kart Sahibi</Text></Col>
              <Col sm={8}>
                <InputGroup className={styles.job_input_premium_group}>
                  <Form.Control
                    className={styles.job_input}
                    aria-label="Phone"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup></Col>
            </Row>
            <Row style={{marginTop:"20px"}}>
              <Col className={styles.modal_text}><Text >Son Tarih</Text></Col>
              <Col>
                <Form.Select className={styles.job_dropdown_button}>
                  <option value="1">Ocak</option>
                  <option value="2">Şubat</option>
                  <option value="3">Mart</option>
                  <option value="4">Nisan</option>
                  <option value="5">Mayıs</option>
                  <option value="6">Haziran</option>
                  <option value="7">Temmuz</option>
                  <option value="8">Ağustos</option>
                  <option value="9">Eylül</option>
                  <option value="10">Ekim</option>
                  <option value="11">Kasım</option>
                  <option value="12">Aralık</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select className={styles.job_dropdown_button}>
                  <option value="1">2022</option>
                  <option value="2">2023</option>
                  <option value="3">2024</option>
                  <option value="4">2025</option>
                  <option value="5">2026</option>
                  <option value="6">2027</option>
                  <option value="7">2028</option>
                  <option value="8">2029</option>
                  <option value="9">2030</option>
                  <option value="10">2031</option>
                  <option value="11">2032</option>
                  <option value="12">2033</option>
                  <option value="13">2034</option>
                  <option value="14">2035</option>
                  <option value="15">2036</option>
                  <option value="16">2037</option>
                  <option value="17">2038</option>
                  <option value="18">2039</option>
                  <option value="19">2040</option>
                </Form.Select>
              </Col>

            </Row>
            <Row style={{marginTop:"10px"}}>
              <Col sm={4} className={styles.modal_text}>CVC2</Col>
              <Col sm={4}>
                <InputGroup className={styles.job_input_premium_group_cvc}>
                  <Form.Control
                    className={styles.job_input}
                    aria-label="Phone"
                    aria-describedby="basic-addon1"
                    placeholder="000"
                  />
                </InputGroup></Col>
            </Row>
            <Row style={{marginTop:"20px"}}>
              <Col>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={type} className="mb-3">
                      <Form.Check
                        className={styles.login_checkbox_container}
                        type={type}
                        id={`check-api-${type}`}
                      >
                        <Form.Check.Input
                          className={styles.login_checkbox_button}
                          type={type}
                          isValid
                        />  Yazılı anlaşmaları kabul ediyorum.
                      </Form.Check>
                    </div>
                  ))}
                </Form>
              </Col>
 
            </Row>
            <Row>
            <Col>
                <div className={styles.job_pay_button}>Öde</div>
              </Col>
            </Row>
          </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )

}
