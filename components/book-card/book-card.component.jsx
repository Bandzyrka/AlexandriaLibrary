import React, {useState} from 'react'
import Image from 'next/image'
import {HeartIcon, BookOpenIcon, BookmarkIcon} from "@heroicons/react/outline";
const BookCard = ({title, author, img, tags, id}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    return (
    <div className="flex flex-col max-w-[300px] h-auto relative border-2 p-4 shadow-xl shadow-gray-200 items-center m-4">
        <div className="max-w-[250px]">
        <Image
            alt="book cover"
            src={img}
            width={200}
            height={250}
        />
        </div>
        <HeartIcon 
            className={`${isFavourite ? 'text-red-500' : ' hover:text-red-500'} h-7 bg-white rounded-full absolute right-2 top-4`}
            onClick={() => setIsFavourite(!isFavourite)}
        />
        <BookmarkIcon className="h-7 bg-white rounded-full absolute right-2 top-12"/>        
        <BookOpenIcon  className="h-7 bg-white rounded-full absolute right-2 top-20" />
        <h3 className="font-bold text-lg mt-2 text-center">{title}</h3>
        <p className="">~ {author}</p>
        <div className="flex flex-wrap justify-center items-center w-full gap-1 mt-2">
            {
                tags.map((tag,index) => (
                    <div key={tag+index} className={`text-xs inline-flex items-center font-bold text-center leading-sm uppercase px-3 py-1 rounded-full tag-${index}`}>
                        {tag}
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default BookCard