import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const convinApi = createApi({
  reducerPath: 'convinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  tagTypes: ['Item'],
  endpoints: (builder) => ({
    getBucket: builder.query({
      query: (name) => `buckets`,
      providesTags: ['Item']
    }),
    addBucket: builder.mutation({
        query: (bucket) => ({
            url: `buckets`,
            method: 'POST',
            body: bucket,
        }),
        invalidatesTags: ['Item']
    }),
    deleteBucket: builder.mutation({
      query: ({id}) => ({
          url: `buckets/${id}`,
          method: 'DELETE',
          body: id,
      }),
      invalidatesTags: ['Item']
    }),
    updateBucket: builder.mutation({
      query: (bucket) => ({
          url: `buckets/${bucket.id}`,
          method: 'PATCH',
          body: bucket,
      }),
      invalidatesTags: ['Item']
    }),
    getFile: builder.query({
      query: (name) => `files`,
      providesTags: ['Item']
    }),
    addFile: builder.mutation({
      query: (file) => ({
          url: `files`,
          method: 'POST',
          body: file,
      }),
      invalidatesTags: ['Item']
    }),
    deleteFile: builder.mutation({
      query: ({id}) => ({
          url: `files/${id}`,
          method: 'DELETE',
          body: id,
      }),
      invalidatesTags: ['Item']
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBucketQuery,
  useAddBucketMutation,
  useDeleteBucketMutation,
  useUpdateBucketMutation,
  useGetFileQuery,
  useAddFileMutation,
  useDeleteFileMutation,
} = convinApi;