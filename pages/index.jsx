import Head from 'next/head'
import Image from 'next/image'
import BookCard from '../components/book-card/book-card.component'
const Home = () => {
  const mockBook = {
    id: 1342,
    title: 'Pride and Prejudice',
    author: "Austen, Jane",
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    tags: ['Movie Books',' Vampires -- Fiction','Gothic fiction','Horror tales','Epistolary fiction']
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Alexandria Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap space-x-2">
        <BookCard bookData={mockBook} />
        <BookCard bookData={mockBook} />   
        <BookCard bookData={mockBook} />   
        <BookCard bookData={mockBook} />   
      </div>

    </div>
  )
}

export default Home
