import styles from "./WorkDetail.module.scss";
import { useState } from "react";
import * as classNames from "classnames/bind";
import useWaffleScroll from "../../../libs/WaffleScroll/index";
import { IWorkDetail } from "../../../types/workTypes";

type Props = {
  detail: IWorkDetail;
};

const cx = classNames.bind(styles);

export default function WorkDetail({ detail }: Props) {
  const { title, content: Content, status } = detail;
  const [open, setOpen] = useState(false);

  const { ref, scrollState } = useWaffleScroll<{ on: boolean }>(
    ({ toggleState }) => {
      toggleState(0.9, 3.1, "on");
    },
    { on: false },
  );

  return (
    <div
      className={cx("WorkDetail", { close: !open, off: !scrollState.on })}
      ref={ref}
    >
      <div
        className={cx("title")}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {title}
      </div>
      <div className={cx("status")}>
        <span
          className={cx("process", {
            onDev: status.process === "개발 중",
            soon: status.process === "출시 임박",
            released: status.process === "출시 완료",
          })}
        >
          {status.process}
        </span>
        {status.type.map((type) => (
          <span
            key={type.toLowerCase()}
            className={cx("type", `${type.toLowerCase()}`)}
          >
            {type}
          </span>
        ))}
      </div>
      <div className={cx("content")}>{open && <Content />}</div>
    </div>
  );
}
