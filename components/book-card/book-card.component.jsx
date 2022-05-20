import React, {useState} from 'react'
import Image from 'next/image'
import {HeartIcon, BookOpenIcon, BookmarkIcon} from "@heroicons/react/outline";



const BookCard = ({title, author, resources, tags, id}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    const img = 'https://media.istockphoto.com/photos/brown-leather-book-cover-background-picture-id467429011?k=20&m=467429011&s=612x612&w=0&h=sWdKHm9XT8Nzx_u2whLyxMcSAGMowGaK4sGlhFT75mM='
    const urlImg = resources.find(r => r.type === 'image/jpeg' && r.uri.indexOf('medium') > 0)?.uri
    if(urlImg) {
        img = urlImg
    }
    return (
    <div className="flex flex-col w-[300px] h-[580px] relative border-2 p-4 shadow-xl shadow-gray-200 items-center m-4">
        <div className="max-w-[250px] drop-shadow-lg hover:scale-105 ease-in-out duration-300  cursor-pointer">
        <Image
            alt="book cover"
            loading='lazy'
            src={img}
            width={200}
            height={250}
            
        />
        </div>
        <HeartIcon 
            className={`${isFavourite ? 'text-red-500' : ' hover:text-red-500'} h-7  rounded-full absolute right-2 top-5`}
            onClick={() => setIsFavourite(!isFavourite)}
        />
        <BookmarkIcon className="h-7  rounded-full absolute right-2 top-14 hover:text-yellow-500"/>        
        <BookOpenIcon  className="h-7 rounded-full absolute right-2 top-24" />
        
        <h3 className="font-bold text-lg mt-2 text-center max-h-[60px] overflow-hidden">{title}</h3>
        <p className="text-center h-[5  0px]">~ {author}</p>
        <div className="flex flex-wrap justify-center items-center w-full gap-1 mt-2    ">
            {
                tags.map((tag,index) => (
                    <div key={tag+index} className={`text-xs inline-flex items-center font-bold text-center leading-sm drop-shadow-md uppercase px-3 py-1 rounded-full tag-${index}`}>
                        {tag}
                    </div>
                ))
            }    
        </div>
    </div>
  )
}

export default BookCard