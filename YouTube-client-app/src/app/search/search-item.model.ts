export type SearchItem = Record<'kind' | 'etag' | 'id', string> & {
  snippet: Snippet;
  statistics?: Statistics;
};

export type Snippet = Record<
  | 'publishedAt'
  | 'channelId'
  | 'title'
  | 'description'
  | 'channelTitle'
  | 'categoryId'
  | 'liveBroadcastContent'
  | 'defaultAudioLanguage',
  string
> & {
  thumbnails: Thumbnails;
  localized: Localized;
  tags?: string[];
};

export type Thumbnails = Record<
  'default' | 'medium' | 'high' | 'standard' | 'maxres',
  Thumbnail | undefined
>;

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type Localized = Record<'title' | 'description', string>;

export type Statistics = Record<
  'viewCount' | 'likeCount' | 'dislikeCount' | 'favoriteCount' | 'commentCount',
  string
>;
