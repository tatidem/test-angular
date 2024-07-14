import { SearchItem } from './search-item.model';

export type SearchResponse = {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
};

export type PageInfo = Record<'totalResults' | 'resultsPerPage', number>;
