export type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
    topping: string;
  };
  
  export enum Status {
    LOADING = "loading",
    SUCCESS = "completed",
    ERROR = "error"
  }
  
  export type SearchPizzaParams = {
    sortBy: string; 
    order: string;
    category: string;
    search: string
    currentPage: string;
    [key: string]: any;
  }

  export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
  }
