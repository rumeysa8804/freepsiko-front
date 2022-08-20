import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from "../job.module.css";
export function Job_Premium() {
  return (
    <>
      <div className={styles.job_container}>

        <div className={styles.job_input_premium_container}>
          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Surname"
              aria-label="Surname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className={styles.job_input_premium_container}>
          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Phone"
              aria-label="Phone"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Mail"
              aria-label="Mail"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <InputGroup className={styles.job_input_premium_group}>
            <Form.Control
              className={styles.job_input}
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <div className={styles.job_send_premium_button}>Send Message</div>
      </div>
    </>
  );
}
