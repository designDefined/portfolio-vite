import { ReactNode } from "react";
import WaffleStudioCover from "../../components/Works/Cover/WaffleStudioCover/WaffleStudioCover";

type WorkDetail = {
  title: string;
  content: ReactNode;
};
type WorkTag = "dev" | "film" | "design" | "PM";
export type WorkData = {
  id: string;
  cover: ReactNode;
  details: WorkDetail[];
  tags: WorkTag[];
};

function EmptyNode() {
  return <div></div>;
}

export const works: WorkData[] = [
  {
    id: "wafflestudio",
    cover: WaffleStudioCover,
    details: [],
    tags: [],
  },
  {
    id: "xction",
    cover: EmptyNode,
    details: [],
    tags: [],
  },
  {
    id: "wonder",
    cover: EmptyNode,
    details: [],
    tags: [],
  },
  {
    id: "entertain",
    cover: EmptyNode,
    details: [],
    tags: [],
  },
];
