import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoNewsHeaders = {
  'some header here': 'some header here',
  'some header here': 'some header here',
  'some header here': 'some header here'

}

const baseUrl = 'some url here'

const createRequest= (url)=>({url,headers:cryptoNewsHeaders})


export const cryptoNewsApi = createApi({
  reducerPath:'cryptoNewsApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder) =>({
    getCryptoNews:builder.query({
      query:({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
