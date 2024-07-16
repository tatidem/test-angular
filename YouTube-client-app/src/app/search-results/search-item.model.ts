export type SearchItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics?: Statistics;
};

export type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  defaultAudioLanguage: string;
  thumbnails: Thumbnails;
  localized: Localized;
  tags?: string[];
};

type ThumbnailsKeys = 'default' | 'medium' | 'high' | 'standard' | 'maxres';

export type Thumbnails = Partial<Record<ThumbnailsKeys, Thumbnail>>;

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type LocalizedKeys = 'title' | 'description';

type Localized = Record<LocalizedKeys, string>;

type StatisticsKeys =
  | 'viewCount'
  | 'likeCount'
  | 'dislikeCount'
  | 'favoriteCount'
  | 'commentCount';

type Statistics = Record<StatisticsKeys, string>;
