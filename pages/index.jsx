import Head from 'next/head'
import Image from 'next/image'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import BookList from '../components/book-list/book-list.component'

const Home = ({books, totalCount}) => {
  const [currentBooks, setCurrentBooks] = useState(books);
  const [pageCount, setPageCount] = useState(totalCount);
  
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
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Alexandria Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
