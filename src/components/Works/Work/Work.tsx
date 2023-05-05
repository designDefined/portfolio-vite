import { WorkData } from "../../../pages/Works/data";

type Props = {
  work: WorkData;
};

export default function Work({ work }: Props) {
  const { cover: Cover } = work;
  return (
    <div>
      <Cover />
    </div>
  );
}
