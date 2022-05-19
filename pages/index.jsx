import Head from 'next/head'
import Image from 'next/image'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import BookList from '../components/book-list/book-list.component'
import { SearchIcon } from '@heroicons/react/outline';

const Home = ({books, totalCount}) => {
  const [currentBooks, setCurrentBooks] = useState(books);
  const [pageCount, setPageCount] = useState(totalCount);
  const [searchInput, setSearchInput] = useState('')
  const handlePageClick = async (event) => {
    const query = ''
    if(event.selected > 0)
    {
      query = `https://gnikdroy.pythonanywhere.com/api/book/?page=${event.selected+1}`;
    } else { query = `https://gnikdroy.pythonanywhere.com/api/book/`} 
    console.log(query)
    const books = await axios.get(query);
    setCurrentBooks(books.data.results)
    setPageCount(event.selected)
  }
  const handleSearchClick = async () => {
    const query = ''
    query = `https://gnikdroy.pythonanywhere.com/api/book/?search=${searchInput}`;
    const books = await axios.get(query);
    setCurrentBooks(books.data.results)
  }
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
              <button onClick={handleSearchClick} className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
          </div>
        </div>
      </div>
     
   
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalCount}
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
      <BookList books={currentBooks}/>
    </div>
  )
}
  Home.getInitialProps = async ({ query }) => {
    const books = await axios.get(`https://gnikdroy.pythonanywhere.com/api/book/`);
    return {
        totalCount: 1000,
        books: books.data.results,
    };
  }
export default Home
