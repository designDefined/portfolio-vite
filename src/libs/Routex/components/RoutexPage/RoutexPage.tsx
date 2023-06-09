import styles from "./RoutexPage.module.scss";
import { ReactNode, useEffect } from "react";
import { RoutexSide, useRoutex } from "../../hooks/useRoutex";
import classNames from "classnames/bind";
import useWaffleScroll from "../../../WaffleScroll/index";

const cx = classNames.bind(styles);

export function RoutexPageA() {
  const status = useRoutex((state) => state.status);
  const currentSide = useRoutex((state) => state.currentSide);
  const targetComponent = useRoutex((state) => state.componentA);

  return (
    <div
      className={cx("RoutexPage", status, {
        current: currentSide === "A",
        sub: currentSide !== "A",
      })}
    >
      {targetComponent ? targetComponent : <div>none</div>}
    </div>
  );
}

export function RoutexPageB() {
  const status = useRoutex((state) => state.status);
  const currentSide = useRoutex((state) => state.currentSide);
  const targetComponent = useRoutex((state) => state.componentB);

  return (
    <div
      className={cx("RoutexPage", status, {
        current: currentSide === "B",
        sub: currentSide !== "B",
      })}
    >
      {targetComponent ? targetComponent : <div>non!e</div>}
    </div>
  );
}
