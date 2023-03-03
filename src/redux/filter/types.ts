export enum SortPropertyEnum {
  RATING = "rating",
  TITLE = "-title",
  PRICE_LOW = "-price",
  PRICE_HIGH = "price",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}
