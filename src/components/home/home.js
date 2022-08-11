// import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import styles from "../home/home.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
      <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
    </>
  );
}
