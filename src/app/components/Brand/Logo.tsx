import styles from "./Logo.module.scss";

export default function Logo({
    text
} : {
    text?: string;
}) {
    return <div className={styles.logo}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={styles.graphic}
        >
            <title>{'Logo of leafal.io'}</title>
            <path
                d=" M 35,10
                    c 30,0 25,45 65,45
                    q -10,35 -50,35
                    c -35,0 -50,-30 -50,-45
                    q 0,-15 10,-15
                    c 30,0 25,45 65,35
                    c -30,0 -25,-45 -62.5,-45
                    c 0,0 7.5,-10 22.5,-10
                    z"
                fill="#3DAD2C"
            />
        </svg>
        {text && <span className={styles.text}>{text}</span>}
    </div>
}