import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';




export const fetchPizzas = createAsyncThunk(
    "pizza/fetchPizzasStatus",
    async (params: SearchPizzaParams) => {
      const { sortBy, order, category, search, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(
        `https://63ea407c811db3d7ef0a5619.mockapi.io/items`, {
          params: pickBy(
            {
              page: currentPage,
              limit: 30,
              category,
              sortBy,
              order,
              search,
            },
            identity,
          ),
        }
      );
      return data;
    }
  );
