import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from "../job/job.module.css";
import { Footer } from "../footer/footer";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Job_Normal } from "./normal/normal";
import { Job_Premium } from "./premium/permium";
export function Jobs() {
  return (
    <>
      <div className={styles.job_black_container}>
        <div className={styles.job_black_container_title}>Jobs</div>
        <div className={styles.job_black_container_text}>
          Join the giveaway, become an employee!
        </div>
        <div className={styles.job_black_container_img}></div>
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <ListGroup className={styles.menu_items_container}>
            <div style={{display: "flex", margin: "auto", marginTop: "50px"}} >

            <ListGroup.Item style={{ backgroundColor: "#000", borderRadius: 30, marginRight: 5  }} className={styles.menu_item} action href="#link1">
              Normal
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#000", borderRadius: 30, marginLeft: 5  }} className={styles.menu_item} action href="#link2">
              Premium
            </ListGroup.Item>
            </div>
          </ListGroup>
          <Tab.Content style={{padding: 0, margin: 0}}>
            <Tab.Pane style={{padding: 0, margin: 0}} eventKey="#link1">
             <Job_Normal/>
            </Tab.Pane>
            <Tab.Pane style={{padding: 0, margin: 0}} eventKey="#link2">
            <Job_Premium/>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
    </>
  );
}
