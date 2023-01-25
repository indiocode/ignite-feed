export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface IContent {
  type: "paragraph" | "link";
  content: string;
}

export interface IPostProps {
  id?: number;
  author: Author;
  publishedAt: Date;
  content: IContent[];
}
