import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getBaseUrl} from "../../../utils/baseUrl.js";
//RTK Query management

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/v1/books`,
    credentials: "include",
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            Headers.set("Authorization", `Bearer ${token}`);
        }
        return Headers;
    }
})

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => `/`,
            providesTags: ['Books']
        })
    })
})

export const {useFetchAllBooksQuery} = booksApi