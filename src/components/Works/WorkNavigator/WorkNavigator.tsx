import styles from "./WorkNavigator.module.scss";
import useWaffleScroll from "../../../libs/WaffleScroll/index";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function WorkNavigator() {
  const { ref, scrollState } = useWaffleScroll<{ open: boolean }>(
    ({ toggleState }) => {
      toggleState(2, 3.1, "open");
    },
    { open: false },
  );

  return (
    <div
      className={cx("WorkNavigator", { close: !scrollState.open })}
      ref={ref}
    >
      <div className={styles.static}>WORKS</div>
      <div className={styles.header}>WORKS</div>
    </div>
  );
}
