import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../pink/pink.module.css"
import Col from "react-bootstrap/Col";

export function Pink() {
  return (
    <Card className={`text-center ${styles.pink_card}`}>
      <Card.Body>
        <Card.Title>Why Freelance</Card.Title>
        <Card.Text>
            <Col className={styles.col} xs={9} sm={8} md={7} lg={7} >

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut labore et.
            </Col>
        </Card.Text>
        <Button className={styles.button} variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}
