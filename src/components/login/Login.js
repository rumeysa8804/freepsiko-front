import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import login_bg from "../../img/login_bg.svg";
import styles from "../login/login.module.css";
let bgStyle = {
  backgroundImage: login_bg,
};
export function Login() {
  return (
    <>
    <div className={styles.login_container}>
      <div style={bgStyle} className={styles.login_bg}></div>
      <Form className={styles.form_container}>
        <div className={styles.form_container_2}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      </div>
    </>
  );
}
