import styles from "../menu/menu.module.css";
import {HashLink as Link} from 'react-router-hash-link';
import { TbCircles } from "react-icons/tb";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoHelpOutline } from "react-icons/io5";
import {  Row, Col } from 'react-grid-system';

export function Menu() {
    document.body.style.backgroundColor = "#e2e2e2";
  return (
    <>
    <div className={styles.menu}>
        <ul className={styles.menu_ul}>
            <div className={styles.menu_top}>
            <span className={styles.menu_span}>Menu</span>
                <li className={styles.menu_li}>
                <Link to="/profile">
                    <Row>
                        <Col><TbCircles className={styles.icon}/></Col>
                        <Col><div className={styles.menu_text}>Profil</div></Col>
                    </Row>
                </Link>
                   
                </li>
                <li className={styles.menu_li}>
                <Link to="/account">
                    <Row>
                        <Col><RiAccountCircleFill className={styles.icon}/></Col>
                        <Col><div className={styles.menu_text}>Hesap</div></Col>
                    </Row>
                </Link>
                </li>
                <li className={styles.menu_li}>
                <Link to="/security">
                    <Row>
                        <Col><AiOutlineLock className={styles.icon}/></Col>
                        <Col><div className={styles.menu_text}>Güvenlik</div></Col>
                    </Row>
                </Link>
                </li>
            </div>
            <div className={styles.menu_low}>
                <span className={styles.menu_span}>Bot</span>
                <li className={styles.menu_li}>
                <Link to="/privacy-policy">
                    <Row>
                        <Col><MdOutlinePrivacyTip className={styles.icon}/></Col>
                        <Col><div className={styles.menu_text}>Gizlilik</div></Col>
                    </Row>
                </Link>
                </li>
                <li className={styles.menu_li}>
                <Link to="/help">
                    <Row>
                        <Col><IoHelpOutline className={styles.icon}/></Col>
                        <Col><div className={styles.menu_text}>Yardım</div></Col>
                    </Row>
                </Link>
                </li>

            </div>
        </ul>
    </div>
    </>
  );
}
