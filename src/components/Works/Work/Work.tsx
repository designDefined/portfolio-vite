import styles from "./Work.module.scss";
import WorkDetail from "../WorkDetail/WorkDetail";
import { IWork } from "../../../types/workTypes";

type Props = {
  work: IWork;
};

export default function Work({ work }: Props) {
  const { id, cover: Cover, details } = work;
  return (
    <div id={id} className={styles.Work}>
      <Cover />
      <ul className={styles.detailList}>
        {details.map((detail) => (
          <WorkDetail key={detail.id} detail={detail} />
        ))}
      </ul>
    </div>
  );
}
