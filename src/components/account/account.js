import { Menu } from "../menu/menu";
import styles from "../account/account.module.css"
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import user from "../../img/account_user.svg";
import register from "../../img/account_registered.svg";
import works from "../../img/account_works.svg";
import { Contact } from "../contact/contact";
export function Account() {
    return(
        <>
        <Menu />
        <Container style={{marginLeft:"20%"}}>
        <Row>
            <Col sm={2} className={styles.col}>
            <Card style={{borderRadius:"20px",alignItems: "center",height:"200px",padding:"10px"}}>
                <img className={styles.img} src={user} style={{margin:"auto"}}/>
                <span style={{fontSize:"20px",marginBottom:"10%"}}>Kişisel Bilgiler</span>
            </Card>
            </Col>
            <Col sm={2} className={styles.col}>
            <Card style={{borderRadius:"20px",alignItems: "center",height:"200px",padding:"10px"}}>
            <img className={styles.img} src={register} style={{margin:"auto"}}/>
            <div style={{fontSize:"20px",marginBottom:"10%",textAlign:"center"}}>
                <span >Kayıtlı</span>
                <div style={{fontWeight:"200"}}>14 August</div>
            </div>
            </Card>
            </Col>
            <Col sm={2} className={styles.col}>
            <Card style={{borderRadius:"20px",alignItems: "center",height:"200px",padding:"10px"}}>
            <img className={styles.img} src={works} style={{margin:"auto"}}/>
            <div style={{fontSize:"20px",marginBottom:"10%",textAlign:"center"}}>
                <span >Çalışmalarım</span>
                <div style={{fontWeight:"200"}}>1 adet</div>
            </div>
            </Card>
            </Col>

        </Row>
    </Container>
    <Contact/>
        </>
    )
}