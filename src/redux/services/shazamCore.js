import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath :'shazamCoreApi',
    baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key','aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a');
        return headers;
        }, 
        }),
        endpoints:(builder)=>({
            getTopCharts: builder.query({query:() => '/charts/world'}),

        })

    });

    export const
     { useGetTopChartsQuery,
     } =shazamCoreApi;