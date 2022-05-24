import React, { useState } from 'react'
import Image from 'next/image'
import { HeartIcon, BookOpenIcon} from '@heroicons/react/outline'
import { HeartIcon as HeartFull} from '@heroicons/react/solid'
const BookCard = ({ title, author, resources, tags, id }) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const img =
    'https://media.istockphoto.com/photos/brown-leather-book-cover-background-picture-id467429011?k=20&m=467429011&s=612x612&w=0&h=sWdKHm9XT8Nzx_u2whLyxMcSAGMowGaK4sGlhFT75mM='
  const urlImg = resources.find(
    (r) => r.type === 'image/jpeg' && r.uri.includes('medium')
  )?.uri
  const textUrl = resources.find(
    (r) => r.type.includes('text/html') && r.uri.includes('htm')
  )?.uri
  if (urlImg) {
    img = urlImg
  }
  return (
    <div className="relative m-4 flex h-[580px] w-[300px] flex-col items-center border-2 p-4 shadow-xl shadow-gray-200">
      <div className="max-w-[250px] cursor-pointer drop-shadow-lg duration-300 ease-in-out  hover:scale-105">
        <a href={textUrl} target="_blank">
          <Image
            alt="book cover"
            loading="lazy"
            src={img}
            width={200}
            height={250}
          />
        </a>
      </div>
        {
            !isFavourite ? 
            <HeartIcon
            className="absolute hover:text-red-400 right-2 top-5 h-7 rounded-full"
            onClick={() => setIsFavourite(!isFavourite)}
          />
          :
          <HeartFull
          className="absolute text-red-400 right-2 top-5 h-7 rounded-full"          
          onClick={() => setIsFavourite(!isFavourite)}
        />
        }
      <a href={textUrl} target="_blank">
        <BookOpenIcon className="absolute right-2 top-12 h-7 rounded-full" />
      </a>
      <h3 className="mt-2 max-h-[60px] overflow-hidden text-center text-lg font-bold">
        {title}
      </h3>
      <p className="h-[5 0px]  text-center">~ {author}</p>
      <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-1    ">
        {tags.map((tag, index) => (
          <div
            key={tag + index}
            className={`leading-sm inline-flex items-center rounded-full px-3 py-1 text-center text-xs font-bold uppercase drop-shadow-md tag-${index}`}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookCard
