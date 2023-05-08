import WaffleStudioCover from "../../components/Works/Cover/WaffleStudioCover/WaffleStudioCover";
import {
  WackathonDetail,
  WaffleDotComDetail,
  WebgamDetail,
} from "../../components/Works/DetailContents/DetailContents";
import { IWork } from "../../types/workTypes";

function EmptyNode() {
  return <div></div>;
}

export const works: IWork[] = [
  {
    id: "wafflestudio",
    cover: WaffleStudioCover,
    details: [
      {
        id: "webgam",
        title: "웹 게임 에디터 webgam",
        content: WebgamDetail,
        status: { process: "개발 중", type: ["Frontend", "PM"] },
      },
      {
        id: "wackathon",
        title: "2023 봄 해커톤 Wackathon:X",
        content: WackathonDetail,
        status: { process: "출시 완료", type: ["Frontend", "PM", "Design"] },
      },
      {
        id: "waffleDotCom",
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
