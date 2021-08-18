import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://611d61397d273a0017e2f7c7.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useFetchContactsQuery } = contactApi;

// https://611d61397d273a0017e2f7c7.mockapi.io/api/v1/contacts
