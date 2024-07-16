import { SearchItem } from './search-item.model';

export type SearchResponse = {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
};

type PageInfoKeys = 'totalResults' | 'resultsPerPage';

type PageInfo = Record<PageInfoKeys, string>;
