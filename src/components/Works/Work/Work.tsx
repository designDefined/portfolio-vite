import styles from "./Work.module.scss";
import { IWork } from "../../../pages/Works/data";
import WorkDetail from "../WorkDetail/WorkDetail";

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
          <WorkDetail detail={detail} />
        ))}
      </ul>
    </div>
  );
}
