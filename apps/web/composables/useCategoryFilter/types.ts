import { FacetSearchCriteria } from '@plentymarkets/plentymarkets-sdk/packages/api-client/src';

export interface GetFacetsFromURLResponse extends FacetSearchCriteria {
  term?: string;
}

export interface Filters {
  [key: number]: string;
}

export interface UseCategoryFiltersResponse {
  getFacetsFromURL(): GetFacetsFromURLResponse;
  updateFilters(filters: Filters): void;
  updateItemsPerPage(itemsPerPage: number): void;
  updateSearchTerm(term: string): void;
  updateSorting(sort: string): void;
  updatePage(page: string): void;
}