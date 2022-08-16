import styles from "../homeImage/homeImage.module.css";
export function HomeImage() {
    return(
        <>
        <div className={styles.home}>
        <div className={styles.img_wr}>
                <div className={styles.wr1}>How about working as Freelance?</div>
                <div className={styles.wr2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <button variant="" className={`${styles.button} rounded`}>
                More
                </button>
            </div>
        </div>
        </>
    );
}

export default HomeImage;