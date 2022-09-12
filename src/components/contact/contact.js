import styles from "../contact/contact.module.css"
import { Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import { BsWhatsapp } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import {BrowserView, MobileView} from 'react-device-detect';
export function Contact() {
    return(
        <>
<div className={styles.contact}>
    <Card className={styles.contact_card}>
        <div >
            <div className={styles.contact_row}>
                <div><FaCircle className={styles.FaCircle}/></div>
                <BrowserView>
                <div className={styles.contact_chat}>Chat</div>
            </BrowserView>
  
            </div>
           
        </div>
    </Card>
    <Card className={styles.contact_card}>
            <div className={styles.contact_row}>
                <div><BsWhatsapp className={styles.BsWhatsapp}/></div>
                <BrowserView>
                <div className={styles.contact_wp}>WhatsApp</div>
            </BrowserView>

            </div>
    </Card>

</div>
        </>
    )
}
