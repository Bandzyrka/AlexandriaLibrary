import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

import BookList from '../components/book-list/book-list.component'

const Home = ({books}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Alexandria Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BookList books={books}/>
    </div>
  )
}
  Home.getInitialProps = async ({ query }) => {
    const books = await axios.get(`https://gnikdroy.pythonanywhere.com/api/book/`);
    return {
        totalCount: books.data.count,
        books: books.data.results,
    };
  }
export default Home
