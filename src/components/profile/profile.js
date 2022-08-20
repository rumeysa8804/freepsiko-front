import styles from "../profile/profile.module.css";
// import {HashLink as Link} from 'react-router-hash-link';
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Menu } from "../menu/menu";
import { Contact } from "../contact/contact";

export function Profile() {
    document.body.style.backgroundColor = "#e2e2e2";
  return (
    <>
    <Menu />
    <Container style={{marginLeft:"20%"}}>
        <Row>
            <Col sm={2} className={styles.col}>
            <Card style={{borderRadius:"20px",alignItems: "center",height:"200px"}}>
                <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268" className={styles.img} />
                <div className={styles.card_body}>
                    <div style={{fontSize: "20px",fontWeight:"500"}}>Harmour</div>
                    <span style={{fontSize: "16px",marginLeft:"10px"}}>Premium</span>
                </div>
            </Card>
            </Col>
            <Col sm={3} className={styles.col}>
            <Card style={{borderRadius:"20px",height:"200px",padding:"10px"}}>
                <div className={styles.card_body}>
                    <div style={{fontSize: "24px",fontWeight:"500"}}>Cüzdan Değeri</div>
                    <div style={{fontSize: "20px"}}>$26,36</div>
                </div>
            </Card>
            </Col>
            <Col sm={2} className={styles.col}>
            <Card className={styles.cards_right}>
                <div className={styles.card_body}>
                    <ProgressBar now={60} label={60} style={{marginTop:"50px",width:"120px"}}/>
                    <div style={{fontSize: "20px",marginLeft:"20px",marginTop:"20px"}}>İlerleme</div>
                    <span style={{fontSize: "16px",marginLeft:"27px"}}>Durumu</span>
                </div>
            </Card>
            </Col>
            <Col sm={2} className={styles.col}>
            <Card className={styles.cards_right}>
                <div className={styles.card_body}>
                    <ProgressBar now={60} label={60} style={{marginTop:"50px",width:"120px"}}/>
                    <div style={{fontSize: "20px",marginLeft:"30px",marginTop:"20px"}}>Puanın</div>
                    <span style={{fontSize: "16px",marginLeft:"27px"}}>48 Puan</span>
                </div>
            </Card>
            </Col>
            <Col sm={5} className={styles.col}>
                <Card style={{borderRadius:"20px"}}>
                    <div className={styles.card_body}>
                        <div style={{fontSize: "20px",textAlign:"center"}}>İşlem Geçmişi</div>
                        <Container style={{overflow: "auto",height: "300px"}}>
                            <Row className={styles.transaction_history_row_1}>
                                <Col>Premium Membership</Col>
                                <Col >08/01/2022</Col>
                                <Col >$18</Col>
                            </Row>
                            <Row className={styles.transaction_history_row_2}>
                                <Col >Premium Membership</Col>
                                <Col >08/01/2022</Col>
                                <Col >$18</Col>
                            </Row>
                            <Row className={styles.transaction_history_row_1}>
                                <Col>Premium Membership</Col>
                                <Col>08/01/2022</Col>
                                <Col>$18</Col>
                            </Row>
                            <Row className={styles.transaction_history_row_2}>
                                <Col >Premium Membership</Col>
                                <Col >08/01/2022</Col>
                                <Col >$18</Col>
                            </Row>
                            <Row className={styles.transaction_history_row_1}>
                                <Col>Premium Membership</Col>
                                <Col >08/01/2022</Col>
                                <Col >$18</Col>
                            </Row>
                            <Row className={styles.transaction_history_row_2}>
                                <Col >Premium Membership</Col>
                                <Col >08/01/2022</Col>
                                <Col >$18</Col>
                            </Row>
                        </Container>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
    <Contact/>
    </>
  );
}
