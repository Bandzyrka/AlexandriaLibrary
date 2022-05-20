import Head from 'next/head'
import Image from 'next/image'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import BookList from '../components/book-list/book-list.component'
import { SearchIcon } from '@heroicons/react/outline';
import { useQuery } from 'react-query';

const useGetBooks = (filters) => {
  return useQuery(['books', filters], async (filters) => {
    const { data } = await axios.get(
      "https://gnikdroy.pythonanywhere.com/api/book/", {params: filters.queryKey[1]}
      );
    return data;
  });
}

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [filters, setFilters] = useState({});

  const {status, data, error, isFetching } = useGetBooks(filters);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Alexandria Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input type="search" onChange={(event) => setSearchInput(event.target.value)} value={searchInput} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <button onClick={() => setFilters({...filters, search: searchInput})} className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
          </div>
        </div>
      </div>
      
      <ReactPaginate
      nextLabel="next >"
      onPageChange={(event) => setFilters({...filters, page: event.selected+1})}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={30}
      previousLabel="< previous"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
      
      <div className="p-10">

      <div className="dropdown inline-block relative">
        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-24 rounded inline-flex items-center">
          <span className="mr-1">Order By</span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li><p  className="rounded-t cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Downloads - Descending</p></li>
          <li><p  className="bg-gray-200 cursor-pointer hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Downloads - Ascending </p></li>
          <li><p  className="rounded-b cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Title - Descending</p></li>
          <li><p  className="rounded-b cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Title - Ascending</p></li>          </ul>
      </div>
      </div>
      {!isFetching ? <BookList books={data.results} /> : null}
    </div>
  )
}

export default Home
