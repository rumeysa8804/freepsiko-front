// import { Stack } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import styles from "../home/home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pink } from "../pink/pink";
import Section4 from "../section4/section4";
import Section5 from "../section5/section5";
import { Faq } from "../faq/faq";

export function Home() {
  return (
    <>
      <Pink />
      <Section4 />
      <Section5 />
      <Faq />
    </>
  );
}
