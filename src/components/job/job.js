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
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
class Job extends React.Component{
  constructor(){
    super();
    this.state = {
      title:"normal",
      description: "Çekilişe katıl, çalışan olma şansı yakala!"
    }
  }
  setJob=(job)=>{
    if(job==="premium")
      this.setState({title:"premium",description:"Hemen şimdi 'Premium' satın alarak platformda çalışmaya başlayabilirsin. Bu işe başlamanın en hızlı yoludur."});
    if(job==="normal")
      this.setState({title:"normal",description:"Çekilişe katıl, çalışan olma şansı yakala!"});
  }
  render(){
    return (
      <div>
      <div className={styles.job_black_container}>
        <div className={styles.job_black_container_title}>Çalışan Ol</div>
        <div className={styles.job_black_container_text}>{this.state.description}</div>
      <div className={styles.job_black_container_img}></div>
    </div>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#normal">
        <ListGroup className={styles.menu_items_container}>
          <div style={{display: "flex", margin: "auto", marginTop: "50px"}} >
          <ListGroup.Item variant="dark" style={{ borderRadius: 30, marginRight: 5  }} className={styles.menu_item} action href="#normal" onClick={e=>this.setJob("normal")}>
            Normal
          </ListGroup.Item>
          <ListGroup.Item variant="dark" style={{ borderRadius: 30, marginLeft: 5  }} className={styles.menu_item} action href="#premium" onClick={e=>this.setJob("premium")}>
            Premium
          </ListGroup.Item>
          </div>
        </ListGroup>
        
        <Tab.Content style={{padding: 0, margin: 0}}>
          <Tab.Pane style={{padding: 0, margin: 0}} eventKey="#normal">
           <Job_Normal/>
          </Tab.Pane>
          <Tab.Pane style={{padding: 0, margin: 0}} eventKey="#premium">
          <Job_Premium/>
          </Tab.Pane>
        </Tab.Content>
  </Tab.Container>
    </div>
    );
  }
}

export function Jobs() {
  return (
    <>
    <Job/>
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Job/>
  </React.StrictMode>,
  document.getElementById('root')
);