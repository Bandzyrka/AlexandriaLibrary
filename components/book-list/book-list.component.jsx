import React from 'react'
import BookCard from '../book-card/book-card.component'

const BookList = ({books}) => {
  return (
    <div className="flex flex-wrap">
        {
        books.map(book => 
            (
            <BookCard 
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.agents[0]?.person}
                img={book.resources.find(resource => resource.type === 'image/jpeg' && resource.uri.indexOf('medium') > 0).uri}
                tags={book.subjects.slice(0, 5)}
            />
        ))}
    </div>
  )
}

export default BookList

// const mockBook = {
//     id: 1342,
//     title: 'Pride and Prejudice',
//     author: "Austen, Jane",
//     img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
//     tags: ['Movie Books',' Vampires -- Fiction','Gothic fiction','Horror tales','Epistolary fiction']
//   }