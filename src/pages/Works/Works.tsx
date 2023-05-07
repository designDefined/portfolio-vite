import styles from "./Works.module.scss";
import Introduction from "../../components/Works/Introduction/Introduction";
import { works } from "./data";
import Work from "../../components/Works/Work/Work";
import WorkNavigator from "../../components/Works/WorkNavigator/WorkNavigator";

export default function Works() {
  return (
    <main className={styles.Works}>
      <Introduction />
      <WorkNavigator />
      {works.map((work) => (
        <Work key={work.id} work={work} />
      ))}
    </main>
  );
}
