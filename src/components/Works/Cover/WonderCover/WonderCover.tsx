import styles from "./WonderCover.module.scss";
import * as classNames from "classnames/bind";
import useWaffleScroll from "../../../../libs/WaffleScroll/index";

const cx = classNames.bind(styles);

export default function WonderCover() {
  const { ref, scrollState } = useWaffleScroll<{ open: boolean }>(
    ({ toggleState }) => {
      toggleState(0.8, 3.1, "open");
    },
    { open: false },
  );

  return (
    <div className={cx("WonderCover", { close: !scrollState.open })} ref={ref}>
      <div className={cx("titles")}>
        <div className={cx("title", "first")}>
          {["W", "O", "N", "D", "E", "R"].map((char) => (
            <span key={char}>{char}</span>
          ))}
        </div>
        <div className={cx("title", "second")}>
          {["W", "A", "N", "D", "E", "R"].map((char) => (
            <span key={char}>{char}</span>
          ))}
        </div>
        <div className={cx("title", "third")}>
          {["W", "@", "N", "D", "E", "R"].map((char) => (
            <span key={char} className={cx({ small: char === "@" })}>
              {char}
            </span>
          ))}
        </div>
      </div>

      <div className={cx("roles")}>
        <h3>웹 풀스택 개발자</h3>
        <h3>제 2회 우덕 뉴미디어 프로그램 창작부문 선정</h3>
        <h3>SNUBIZ 창업기금 경진대회 수상</h3>
      </div>
      <div className={cx("content")}>
        <p>
          22-2 사용자중심디자인 수업의 일환으로 "교내 동아리 홍보/예매 플랫폼"
          서비스를 기획하여 출시를 앞두고 있습니다. 타입스크립트를 이용한 풀스택
          개발자로 서비스 구현 전반을 담당하고 있습니다.
        </p>
      </div>
    </div>
  );
}
