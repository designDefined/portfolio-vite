import { ReactNode } from "react";
import WaffleStudioCover from "../../components/Works/Cover/WaffleStudioCover/WaffleStudioCover";
import {
  WackathonDetail,
  WaffleDotComDetail,
  WebgamDetail,
} from "../../components/Works/DetailContents/DetailContents";

export type IWorkProcessTag = "개발 중" | "출시 임박" | "출시 완료";
export type IWorkTypeTag = "Frontend" | "Backend" | "Film" | "Design" | "PM";

export type IWorkDetail = {
  title: string;
  content: ReactNode;
  status: { process: IWorkProcessTag; type: IWorkTypeTag[] };
};
export type IWork = {
  id: string;
  cover: ReactNode;
  details: IWorkDetail[];
  tags: IWorkTypeTag[];
};

function EmptyNode() {
  return <div></div>;
}

export const works: IWork[] = [
  {
    id: "wafflestudio",
    cover: WaffleStudioCover,
    details: [
      {
        title: "웹 게임 에디터 webgam",
        content: WebgamDetail,
        status: { process: "개발 중", type: ["Frontend", "PM"] },
      },
      {
        title: "2023 봄 해커톤 Wackathon:X",
        content: WackathonDetail,
        status: { process: "출시 완료", type: ["Frontend", "PM", "Design"] },
      },
      {
        title: "와플닷컴 리뉴얼",
        content: WaffleDotComDetail,
        status: { process: "출시 임박", type: ["Frontend"] },
      },
    ],
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
