import styles from "./Introduction.module.scss";
import classNames from "classnames/bind";
import useWaffleScroll from "../../../libs/WaffleScroll/index";

const cx = classNames.bind(styles);

export default function Introduction() {
  const { ref, scrollState } = useWaffleScroll<{ open: boolean }>(
    ({ toggleState }) => {
      toggleState(0.8, 3.1, "open");
    },
    { open: false },
  );

  return (
    <div className={cx("Introduction", { close: !scrollState.open })} ref={ref}>
      <div className={styles.Title}>
        <div className={styles.gradient}>Design</div>
        <div className={styles.gradient}>Defined.by</div>
        <div className={cx({ gradient: true, box: true })} />
      </div>
      <div className={styles.Roles}>
        <div className={styles.empty} />
        <div className={styles.intro}>Welcome!</div>
        <div className={styles.intro}>This is the portfolio of</div>
        <div className={styles.empty} />
        <div className={cx({ role: true, developer: true })}>
          Frontend Developer
        </div>
        <div className={styles.empty} />
        <div className={styles.intro}>as well as,</div>
        <div className={styles.empty} />
        <div className={cx({ role: true, filmmaker: true })}>Filmmaker</div>
        <div className={cx({ role: true, designer: true })}>Designer</div>
        <div className={cx({ role: true, projectManager: true })}>
          and Project Manager
        </div>
        <div className={styles.empty} />
        <div className={styles.intro}>please enjoy!</div>
      </div>
    </div>
  );
}
