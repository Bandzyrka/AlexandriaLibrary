import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import React, { useState } from 'react'
import Filters from '../components/filters/filters.component'
import BookList from '../components/book-list/book-list.component'
import { useQuery } from 'react-query'

const useGetBooks = (filters) => {
  return useQuery(['books', filters], async (filters) => {
    const { data } = await axios.get(
      'https://gnikdroy.pythonanywhere.com/api/book/',
      { params: filters.queryKey[1] }
    )
    return data
  })
}

const Home = () => {
  const [filters, setFilters] = useState({})

  const { status, data, error, isFetching } = useGetBooks(filters)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Alexandria Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Filters pages={data?.count/10} filters={filters} setFilters={setFilters} />
      {!isFetching ? <BookList books={data.results} /> : null}
    </div>
  )
}

export default Home
