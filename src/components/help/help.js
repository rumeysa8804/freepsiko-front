import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from "../help/help.module.css";
export function Help() {
  return (
    <>
      <div className={styles.job_black_container}>
        <div className={styles.job_black_container_title}>Yardım</div>
        <div className={styles.job_black_container_text}>
        Bizimle iletişime geç. En kısa sürede sana geri döneceğiz.
        </div>
        <div className={styles.job_black_container_img}></div>
      </div>
      <div className={styles.job_container}>
        <div style={{fontSize:"24px",fontWeight:"500",textAlign:"center",margin:"30px"}}>CONTACT</div>
      <FloatingLabel  className={styles.job_dropdown_container} controlId="floatingSelect" label="Please choose what you want to do">
      <Form.Select className={styles.job_dropdown_button} aria-label="Please choose what you want to do">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
        <div className={styles.job_input_container}>
          <InputGroup className={styles.job_input_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className={styles.job_input_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Surname"
              aria-label="Surname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className={styles.job_input_container}>
          <InputGroup className={styles.job_input_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Phone"
              aria-label="Phone"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className={styles.job_input_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Mail"
              aria-label="Mail"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <InputGroup className={styles.job_text_area}>
            <Form.Control
              className={styles.job_input}
              placeholder="Is there anything else you want to say?"
              aria-label="Textarea"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <div className={styles.job_button_container}></div>
          <div className={styles.job_send_button}>Send Message</div>
      </div>
    </>
  );
}
