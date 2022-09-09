import styles from "../security/security.module.css";
// import {HashLink as Link} from 'react-router-hash-link';
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Menu } from "../menu/menu";
import { BsGoogle } from "react-icons/bs";
import { Contact } from "../contact/contact";
export function Security() {
    document.body.style.backgroundColor = "#e2e2e2";
  return (
    <>
    <Container>
<Row>

    <Col className={styles.col_menu} xs={12} md={12} lg={3}>
        
        <Menu className={styles.menu} />
            </Col>
            <Col className={styles.col_card} xs={12} md={12} lg={9}>
        <Row>
            <Col style={{marginTop: "46px"}} sm={6} lg={3} className={styles.col}>
            <div className={styles.card_container_div}>
            <Card className={styles.info_card} style={{borderRadius:"20px",alignItems: "center",height:"200px"}}>
            <BsGoogle className={styles.img} />
                <div className={styles.card_body}>
                    <div style={{fontSize: "20px",textAlign: "center"}}>Google Account</div>
                    <div style={{fontSize: "16px",textAlign: "center"}}>Bağlantıyı Kes</div>
                </div>
            </Card>  
            </div>
            </Col>
        </Row>
        </Col>
        </Row>

    </Container>
    <Contact/>
    </>
  );
}
