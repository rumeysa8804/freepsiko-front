import styles from "../contact/contact.module.css"
import { Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import { BsWhatsapp } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
export function Contact() {
    return(
        <>
<div className={styles.contact}>
    <Card className={styles.contact_card}>
        <div >
            <Row className={styles.contact_row}>
                <Col style={{margin:"auto"}}><FaCircle className={styles.FaCircle}/></Col>
                <Col className={styles.contact_chat}>Chat</Col>
            </Row>
           
        </div>
    </Card>
    <Card className={styles.contact_card}>
            <Row className={styles.contact_row}>
                <Col style={{margin:"auto"}}><BsWhatsapp className={styles.BsWhatsapp}/></Col>
                <Col className={styles.contact_wp}>WhatsApp</Col>
            </Row>
    </Card>

</div>
        </>
    )
}
