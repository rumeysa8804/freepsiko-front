import { Menu } from "../menu/menu";
import styles from "../security/security.module.css"
import { Container, Row, Col } from 'react-grid-system';
import Card from 'react-bootstrap/Card';
import { BsGoogle } from "react-icons/bs";
import { Contact } from "../contact/contact";
// import works from "../../img/account_works.svg";
export function Security() {
    return(
        <>
<Menu />
        <Container style={{marginLeft:"20%"}}>
        <Row >
            <Col sm={2} style={{marginTop:"10%"}}>
            <Card style={{borderRadius:"20px",alignItems: "center",height:"200px",padding:"10px"}}>
              <BsGoogle style={{fontSize:"3rem",color:"#f51e64",margin:"auto"}}/>
              <div style={{textAlign:"center",marginBottom:"10px"}}>
                <div style={{fontSize:"20px",fontWeight:"400"}}>Google Account</div>
                <a href="">Bağlantıyı kes</a>
              </div>
            </Card>
            </Col>
        </Row>
    </Container>
    <Contact/>
        </>
    )
}
