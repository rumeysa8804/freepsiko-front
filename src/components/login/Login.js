import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBInput } from "mdbreact";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import login_bg from "../../img/login_bg.svg";
import styles from "../login/login.module.css";
let bgStyle = {
  backgroundImage: login_bg,
};
export function Login() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/profile'; 
    navigate(path);
  }
  return (
    <>
      <div className={styles.login_container}>
        <div style={bgStyle} className={styles.login_bg}></div>
        <div className={styles.form_container}>
          <div lg={8} md={7} sm={6} xs={12} className={styles.form_container_2}>
            <div className={styles.login_title}>Login</div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="Mail"
            />
            <div className={styles.login_input_label}></div>
            <div className={styles.login_second_input}></div>
            <input
              className={styles.login_input}
              variant="flushed"
              placeholder="Password"
            />
            <div className={styles.login_input_label}></div>

            <Form>
              {["checkbox"].map((type) => (
                <div key={type} className="mb-3">
                  <Form.Check
                    className={styles.login_checkbox_container}
                    type={type}
                    id={`check-api-${type}`}
                  >
                    <Form.Check.Input
                      className={styles.login_checkbox_button}
                      type={type}
                      isValid
                    />
                    <div className={styles.login_checkbox_button_text}>
                      <Form.Check.Label>Remember me</Form.Check.Label>
                    </div>
                  </Form.Check>
                </div>
              ))}
            </Form>

            <div
              className={styles.login_button}
              variant="primary"
              type="submit"
              onClick={routeChange}
            >
              login
            </div>
            <div
              className={styles.login_button_forgot}
              variant="primary"
              type="submit"
            >
              Forgot Password
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
