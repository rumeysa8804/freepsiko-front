import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../section5/section5.module.css"
import card_img from '../../img/section5_card.svg'
var sectionStyle = {
  backgroundImage: `url(${card_img})`
}
function Section5() {
  return (
    <div className={styles.section5_big_container}>
    <Container className={styles.section5_container}>
      <Row className={styles.section5_row}>
    <Col  lg={8} md={7} sm={6} xs={12} className={`${styles.left_card} mh-100`}>
      <Card.Body>
        <Card.Title className={styles.section5_left_card_title}>Why Freelance</Card.Title>
        <Col className={styles.left_card_text}>
        Lorem ipsum dolor sit amet, consetetur
sadipscing elitr sed diam nonumy
        </Col>
        <Button className={styles.left_card_button} variant="primary">More</Button>
      </Card.Body>
    </Col>
        <Col  lg={3} md={4} sm={5} xs={12} className={`${styles.right_card} mh-100`}>
          {/* <img className={styles.right_card_img} src={card_img}/> */}
        <Card.Body className={styles.right_card_body}>
          <Card.Title className={styles.right_card_title}>More information</Card.Title>
          <Card.Text className={styles.right_card_text}>
          More power
          </Card.Text>
        <Button className={styles.right_card_button} variant="primary">More</Button>

        </Card.Body>
      </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Section5;