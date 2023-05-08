import WaffleStudioCover from "../../components/Works/Cover/WaffleStudioCover/WaffleStudioCover";
import {
  WackathonDetail,
  WaffleDotComDetail,
  WebgamDetail,
  WonderClientDetail,
  WonderServerDetail,
} from "../../components/Works/DetailContents/DetailContents";
import { IWork } from "../../types/workTypes";
import WonderCover from "../../components/Works/Cover/WonderCover/WonderCover";

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
    cover: WonderCover,
    details: [
      {
        id: "wonderClient",
        title: "모바일 웹 프론트엔드 개발",
        content: WonderClientDetail,
        status: { process: "출시 임박", type: ["Frontend"] },
      },
      {
        id: "wonderServer",
        title: "서버 개발",
        content: WonderServerDetail,
        status: { process: "출시 임박", type: ["Backend"] },
      },
    ],
    tags: [],
  },
  {
    id: "entertain",
    cover: EmptyNode,
    details: [],
    tags: [],
  },
];
