import React from 'react'
import BookCard from '../book-card/book-card.component'

const BookList = ({books}) => {
  return (
    <div className="flex flex-wrap items-center justify-center">{
        books.map(book => (
          <BookCard 
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.agents[0]?.person}
            resources={book.resources}
            tags={book.subjects.slice(0, 5)}
          />
        )
      )}
    </div>
)}
export default BookList