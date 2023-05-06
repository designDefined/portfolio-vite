import styles from "./WaffleStudioCover.module.scss";
import * as classNames from "classnames/bind";
import useWaffleScroll from "../../../../libs/WaffleScroll/index";

const cx = classNames.bind(styles);

export default function WaffleStudioCover() {
  const { ref, scrollState } = useWaffleScroll<{ open: boolean }>(
    ({ progress, toggleState }) => {
      toggleState(0.8, 3.1, "open");
    },
    { open: false },
  );

  return (
    <div
      className={cx("WaffleStudioCover", { close: !scrollState.open })}
      ref={ref}
    >
      <h1 className={cx("title")}>WaffleStudio</h1>
      <div className={cx("roles")}>
        <h3>21.5기 웹 프론트엔드 개발자</h3>
        <h3>22-23 동아리 부회장</h3>
        <h3>webgam, 와카톤 프로젝트 매니저</h3>
      </div>
      <div className={cx("content")}>
        <p>
          서울대학교 컴퓨터공학부 웹 / 앱 개발 동아리 와플스튜디오에서 다양한
          프로젝트와 해커톤에 참여하고, 동아리를 운영했습니다.
        </p>
      </div>
    </div>
  );
}
