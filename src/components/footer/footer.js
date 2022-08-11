import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../footer/footer.module.css";
// import Sonnet from '../../components/Sonnet';
import twitter from "../../img/twitterlogo.svg"
import instagram from "../../img/instagramlogo.svg"
import telegram from "../../img/telegramlogo.svg"

export function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_2}>
        {/* <div className={styles.row}> */}
            <Row className={styles.footer_row}>
          <Col md={5} sm={6} xs={6}>
            <div className={styles.list_group}>Categories</div>
            <ListGroup variant="pils">
              <ListGroup.Item className={styles.list_group_item}>
                Home
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                Explore
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                Jobs
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                About
              </ListGroup.Item>
              <ListGroup.Item className={styles.list_group_item}>
                Help
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={5} sm={6} xs={6}>
            <div className={styles.list_group}>Community</div>
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
                <img className={styles.logo} src={twitter}/>
            </span>
            <span className={styles.logo_container}>
                <img className={styles.logo} src={instagram}/>
            </span>
            <span className={styles.logo_container}>
                <img className={styles.logo} src={telegram}/>
            </span>
          </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
