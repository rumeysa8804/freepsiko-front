import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  
} from '@chakra-ui/react'
import styles from "../faq/faq.module.css"
import add_button from '../../img/faq_add_button.svg'

export function Faq() {
  return (
    <>
  <Accordion className={styles.faq_container} allowToggle>
    <div className={styles.faq_container_2}>
      <div className={styles.faq_title_container}>

      <div className={styles.faq_title}>Faq</div>
      </div>
  <AccordionItem className={styles.faq_item}>
    <h2>
      <AccordionButton className={styles.faq_header }>
        <Box className={styles.faq_box } flex='1' textAlign='left'>
        What does this project do and what are its goals?
        </Box>
<img className={styles.faq_icon} src={add_button}/>
      </AccordionButton>
    </h2>
    <AccordionPanel className={styles.faq_body } pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit, sed do eiusmo ore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi, sed do eiusmo ore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem className={styles.faq_item}>
    <h2>
      <AccordionButton className={styles.faq_header }>
        <Box className={styles.faq_box } flex='1' textAlign='left'>
        What does this project do and what are its goals?
        </Box>
<img className={styles.faq_icon} src={add_button}/>
      </AccordionButton>
    </h2>
    <AccordionPanel className={styles.faq_body } pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo ore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem className={styles.faq_item}>
    <h2>
      <AccordionButton className={styles.faq_header }>
        <Box className={styles.faq_box } flex='1' textAlign='left'>
        What does this project do and what are its goals?
        </Box>
<img className={styles.faq_icon} src={add_button}/>
      </AccordionButton>
    </h2>
    <AccordionPanel className={styles.faq_body } pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo ore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat lamco laboris nisi ut al, consectetur adipiscing elit, sed do eiusmo ore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat lamco laboris nisi ut al
    </AccordionPanel>
  </AccordionItem>
  </div>
</Accordion>
        </>
  );
}
