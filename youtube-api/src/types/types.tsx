export interface Id {
  kind: string;
  channelId: string;
  videoId: string;
}
export interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}
export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date;
}
export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}
export interface Default {
  url: string;
  width?: number;
  height?: number;
}

export interface Medium {
  url: string;
  width?: number;
  height?: number;
}

export interface High {
  url: string;
  width?: number;
  height?: number;
}
export type searchBarProps = {
  onFormSubmit: (x: string) => void;
};
// export type GlobeProps = {
//   Globe: GlobeType;
// };
// export type GlobeType = {
//   Canvas: React.ForwardRefExoticComponent<React.RefAttributes<HTMLCanvasElement>>;
// };
