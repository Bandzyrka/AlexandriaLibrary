import React, {useState} from 'react'
import Image from 'next/image'
import {HeartIcon} from "@heroicons/react/outline";
const BookCard = ({bookData: {title, author, img, tags, id}}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    return (
    <div className="flex flex-col max-w-[300px] h-auto relative border-2 p-4 shadow-xl shadow-gray-200 items-center">
        <div className="max-w-[250px]">
        <Image
            alt="book cover"
            src={img}
            width={200}
            height={250}
        />
        </div>
        <HeartIcon 
            className={`${isFavourite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} h-7 bg-white rounded-full absolute right-2 top-3`}
            onClick={() => setIsFavourite(!isFavourite)}
        />        
        <div className="flex flex-wrap justify-center items-center w-full gap-1 mt-2">
            {
                tags.map((tag,index) => (
                    <div key={tag+index} className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full tag-${index}`}>
                        {tag}
                    </div>
                ))
            }
            
        </div>
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <p className="">{author}</p>
        <button type="button" className="shadow-xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none mt-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Read It! &#128216;
        </button>

    </div>
  )
}

export default BookCard