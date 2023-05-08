export type IWorkProcessTag = "개발 중" | "출시 임박" | "출시 완료";
export type IWorkTypeTag = "Frontend" | "Backend" | "Film" | "Design" | "PM";

export type IWorkDetail = {
  id: string;
  title: string;
  content: () => JSX.Element;
  status: { process: IWorkProcessTag; type: IWorkTypeTag[] };
};
export type IWork = {
  id: string;
  cover: () => JSX.Element;
  details: IWorkDetail[];
  tags: IWorkTypeTag[];
};
