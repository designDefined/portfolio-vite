import styles from "./XctionCover.module.scss";
import * as classNames from "classnames/bind";
import useWaffleScroll from "../../../../libs/WaffleScroll/index";

const cx = classNames.bind(styles);

export default function XctionCover() {
  const { ref, scrollState } = useWaffleScroll<{ open: boolean }>(
    ({ toggleState }) => {
      toggleState(0.8, 3.1, "open");
    },
    { open: false },
  );

  return (
    <div className={cx("XctionCover", { close: !scrollState.open })} ref={ref}>
      <h1 className={cx("title")}>
        <span className={cx("x")}>X</span>ction!
      </h1>
      <div className={cx("roles")}>
        <h3>프로젝트 총괄</h3>
        <h3>영상 / 프론트 / UX 팀 리드</h3>
        <h3>우덕 뉴미디어 프로그램 창업부문 선정</h3>
      </div>
      <div className={cx("content")}>
        <p>
          개발과 영상제작 기술이 어우러진 인터랙티브 영화를 제작하는
          프로젝트입니다. 초기 구상부터 팀 조직, 운영 등 프로젝트 전반을
          관리하는 PM으로 활동하는 동시에 영상 제작팀과 개발팀의 리드로써 파일럿
          작품을 제작 중에 있습니다. 교내의 여러 지원사업에 선정되는 성과를
          거두었습니다. 기존의 인터랙티브 영상에서는 쉽게 느낄 수 없는 몰입과
          완성도, 참신한 아이디어를 작품에 구현하기 위해 최선을 다하고 있습니다.
        </p>
      </div>
    </div>
  );
}
